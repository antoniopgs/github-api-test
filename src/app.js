require("dotenv").config();
const axios = require("axios");
const getIssueBody = require("./issueBody");
const getFileContent = require("./fileContent");

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
            Authorization: `token ${process.env.API_TEST_TOKEN}`
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
            Authorization: `token ${process.env.API_TEST_TOKEN}`
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
            Authorization: `token ${process.env.API_TEST_TOKEN}`
        }
    });

    console.log(`Status Code: ${response.status} | Status Msg: ${response.statusText}\n`);
}

const createFile = async (owner, repo, branchName, fileName, fileContent) => {
    console.log("Creating File...");

    const commitMessage = `Add ${fileName}`;

    const url = `${baseUrl}/repos/${owner}/${repo}/contents/${fileName}`;

    const json = {
        accept: "application/vnd.github.v3+json",
        owner: owner,
        repo: repo,
        path: fileName,
        message: commitMessage,
        content: Buffer.from(fileContent).toString('base64'),
        branch: branchName
    }

    const response = await axios.put(url, json, {
        headers: {
            Authorization: `token ${process.env.API_TEST_TOKEN}`
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
            Authorization: `token ${process.env.API_TEST_TOKEN}`
        }
    });

    console.log(`Status Code: ${response.status} | Status Msg: ${response.statusText}\n`);
}

const createAll = async (owner, repo, proposalNumber, proposalTitle, proposalDescription, discourseEoiUrl, discourseProposalUrl, snapshotVoteUrl, details, discussion) => {
    try {
        const maintainerCanModify = false;
        const draft = false;

        const issueBody = getIssueBody(proposalNumber, proposalTitle, proposalDescription, discourseEoiUrl, discourseProposalUrl, snapshotVoteUrl, details);
        const issueTitle = `Proposal #${proposalNumber} - ${proposalTitle}`;
        const branchName = proposalTitle.toLowerCase().replace(/ /g, "-");
        const fileName = `${proposalNumber}-${branchName}.md`;

        const issueUrl = await createIssue(owner, repo, issueTitle, issueBody);

        const fileContent = getFileContent(proposalNumber, proposalTitle, proposalDescription, issueUrl, discussion);

        await createBranch(owner, repo, branchName);
        await createFile(owner, repo, branchName, fileName, fileContent);
        await createPR(owner, repo, issueTitle, issueUrl, branchName, maintainerCanModify, draft);

        console.log("All done!");

    } catch (err) {
        console.error(`Status Code: ${err.response.status} | Status Msg: ${err.response.statusText} | Msg: ${err.response.data.message}`);
    }
}

const owner = "antoniopgs";
const repo = "github-api-test";

const proposalNumber = 999;
const proposalTitle = "Fund ZZZ";
const proposalDescription = "Deploy Fund ZZZ at address 0x999";

const discourseEoiUrl = "https://www.example9a.com";
const discourseProposalUrl = "https://www.example9b.com";
const snapshotVoteUrl = "https://www.example9c.com";

const details = "Issue Bla Bla"; // issue details
const discussion = "Implementation Bla Bla"; // implementation details

createAll(owner, repo, proposalNumber, proposalTitle, proposalDescription, discourseEoiUrl, discourseProposalUrl, snapshotVoteUrl, details, discussion);