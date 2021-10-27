const axios = require("axios");
require("dotenv").config();

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

const createFile = async (owner, repo, branch, fileName, fileContent) => {
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
        branch: branch
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
    const body = `Issue: ${issueUrl}`;

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

const createAll = async (owner, repo, issueTitle, issueBody, branch, fileName, fileContent) => {
    try {
        const maintainerCanModify = false;
        const draft = false;

        const issueUrl = await createIssue(owner, repo, issueTitle, issueBody);
        await createBranch(owner, repo, branch);
        await createFile(owner, repo, branch, fileName, fileContent);
        await createPR(owner, repo, issueTitle, issueUrl, branch, maintainerCanModify, draft);

        console.log("All done!");

    } catch (err) {
        console.error(`Status Code: ${err.response.status} | Status Msg: ${err.response.statusText} | Msg: ${err.response.data.message}`);
    }
}

const owner = "antoniopgs";
const repo = "api-test";

const issueTitle = "Proposal 3";
const issueBody = "Proposal 3 body";

const branchName = "proposal-3";

const fileName = "proposal3.md";
const fileContent = "Proposal 3 content";

createAll(owner, repo, issueTitle, issueBody, branchName, fileName, fileContent);