const Web3 = require("web3");
const axios = require("axios");
require("dotenv").config();

const web3 = new Web3();

const createIssue = async (owner, repo, title, body) => {
    const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

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

    console.log(response.status, response.statusText);
    //console.log("Data:", response.data);
    console.log("New Issue URL:", response.data.html_url);
    return response.data.html_url;
};

const createBranch = async (ref) => {
    try {
        const owner = "antoniopgs";
        const repo = "api-test";
        const sha = web3.utils.sha3(ref);
        const slicedSha = sha.slice(2, 42);

        const url = `https://api.github.com/repos/${owner}/${repo}/git/refs`;

        const json = {
            accept: "application/vnd.github.v3+json",
            owner: owner,
            repo: repo,
            ref: `refs/heads/${ref}`,
            sha: slicedSha,
        };

        const response = await axios.post(url, json, {
            headers: {
                Authorization: `token ${process.env.API_TEST_TOKEN}`
            }
        });

        console.log(response.status, response.statusText);

    } catch (err) {
        console.error(`Status Code: ${err.response.status} | Status Msg: ${err.response.statusText} | Msg: ${err.response.data.message}`);
    }
}

const createFile = () => {

}

const createPR = async (owner, repo, title, head, base, body, maintainer_can_modify, draft, issue) => {
    try {
        const url = `https://api.github.com/repos/${owner}/${repo}/pulls`;

        const json = {
            accept: "application/vnd.github.v3+json",
            owner: owner,
            repo: repo,
            //title: title,
            head: head,
            base: base,
            body: body,
            maintainer_can_modify: maintainer_can_modify,
            draft: draft,
            issue: issue
        }

        const response = await axios.post(url, json, {
            headers: {
                Authorization: `token ${process.env.API_TEST_TOKEN}`
            }
        });
        console.log(response.status, response.statusText);
        //console.log("Data:", response.data);

    } catch (err) {
        console.error(`Status Code: ${err.response.status} | Status Msg: ${err.response.statusText} | Msg: ${err.response.data.message}`);
    }
}

const createAll = async () => {

    const issueUrl = await createIssue("antoniopgs", "api-test", "New Issue XXX", "Lorem Ipsum 123");
    //await createPR(issueUrl);
}

//createIssue("antoniopgs", "api-test", "New Issue XXX", "Lorem Ipsum 123");
//createPR("antoniopgs", "api-test", "new 2", "branch-1", "master", "Bla", false, false, 5);
createBranch("branch-2");