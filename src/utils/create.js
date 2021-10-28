require("dotenv").config();
const axios = require("axios");
const getIssueBody = require("./issueBody");
const getImplementationContent = require("./implementationContent");

const baseUrl = "https://api.github.com";

const createIssue = async (owner, repo, title, body) => {
    console.log("Creating Issue...");

    const url = `${baseUrl}/repos/${owner}/${repo}/issues`;

    const json = {
        accept: "application/vnd.github.v3+json",
        owner: owner,
        repo: repo,
        title: title,
        body: body,
    }

    const response = await axios.post(url, json, {
        headers: {
            Authorization: `token ${process.env.ACCESS_TOKEN}`
        }
    });

    console.log(`Status Code: ${response.status} | Status Msg: ${response.statusText}`);
    console.log(`New Issue URL: ${response.data.html_url}\n`);
    return response.data.html_url;
};

const getMasterSha = async () => {
    console.log("Getting Master Sha...");

    const owner = "antoniopgs";
    const repo = "api-test";
    const ref = "heads/master";

    const url = `${baseUrl}/repos/${owner}/${repo}/git/ref/${ref}`;

    const json = {
        accept: "application/vnd.github.v3+json",
        owner: owner,
        repo: repo,
        ref: ref
    }

    const response = await axios.get(url, json, {
        headers: {
            Authorization: `token ${process.env.ACCESS_TOKEN}`
        }
    });

    console.log(`Status Code: ${response.status} | Status Msg: ${response.statusText}`);
    console.log(`Master Sha: ${response.data.object.sha}\n`);
    return response.data.object.sha;
}

const createBranch = async (owner, repo, branchName) => {
    console.log("Creating Branch...");

    const url = `${baseUrl}/repos/${owner}/${repo}/git/refs`;

    const json = {
        accept: "application/vnd.github.v3+json",
        owner: owner,
        repo: repo,
        ref: `refs/heads/${branchName}`,
        sha: await getMasterSha(),
    };

    const response = await axios.post(url, json, {
        headers: {
            Authorization: `token ${process.env.ACCESS_TOKEN}`
        }
    });

    console.log(`Status Code: ${response.status} | Status Msg: ${response.statusText}\n`);
}

const createImplementation = async (owner, repo, branchName, implementationName, implementationContent) => {
    console.log("Creating File...");

    const commitMessage = `Add ${implementationName}`;

    const url = `${baseUrl}/repos/${owner}/${repo}/contents/${implementationName}`;

    const json = {
        accept: "application/vnd.github.v3+json",
        owner: owner,
        repo: repo,
        path: implementationName,
        message: commitMessage,
        content: Buffer.from(implementationContent).toString('base64'),
        branch: branchName
    }

    const response = await axios.put(url, json, {
        headers: {
            Authorization: `token ${process.env.ACCESS_TOKEN}`
        }
    });

    console.log(`Status Code: ${response.status} | Status Msg: ${response.statusText}\n`);
}

const createPR = async (owner, repo, issueTitle, issueUrl, head, maintainer_can_modify, draft) => {
    console.log("Creating Pull Request...");

    const url = `${baseUrl}/repos/${owner}/${repo}/pulls`;
    const title = `Add ${issueTitle}`;
    const body = `# Proposal Number - Proposal Title\nIssue: ${issueUrl}`;

    const json = {
        accept: "application/vnd.github.v3+json",
        owner: owner,
        repo: repo,
        title: title,
        head: head,
        base: "master",
        body: body,
        maintainer_can_modify: maintainer_can_modify,
        draft: draft,
    }

    const response = await axios.post(url, json, {
        headers: {
            Authorization: `token ${process.env.ACCESS_TOKEN}`
        }
    });

    console.log(`Status Code: ${response.status} | Status Msg: ${response.statusText}\n`);
}

const createAll = async (owner, repo, proposalNumber, proposalTitle, proposalDescription, discourseEoiUrl, discourseProposalUrl, snapshotVoteUrl, details, discussion, codeArgs, code, json) => {
    try {
        const maintainerCanModify = false;
        const draft = false;

        const issueTitle = `Proposal #${proposalNumber} - ${proposalTitle}`;
        const issueBody = getIssueBody(proposalNumber, proposalTitle, proposalDescription, discourseEoiUrl, discourseProposalUrl, snapshotVoteUrl, details);
        const issueUrl = await createIssue(owner, repo, issueTitle, issueBody);

        const branchName = proposalTitle.toLowerCase().replace(/ /g, "-");
        await createBranch(owner, repo, branchName);

        const implementationName = `${proposalNumber}-${branchName}.md`;
        const implementationContent = getImplementationContent(proposalNumber, proposalTitle, proposalDescription, issueUrl, discussion, codeArgs, code, json);
        await createImplementation(owner, repo, branchName, implementationName, implementationContent);

        await createPR(owner, repo, issueTitle, issueUrl, branchName, maintainerCanModify, draft);

        console.log("All done!");

    } catch (err) {
        console.error(`Status Code: ${err.response.status} | Status Msg: ${err.response.statusText} | Msg: ${err.response.data.message}`);
    }
}

module.exports = createAll;