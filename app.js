const axios = require("axios");

const API_TOKEN = "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";

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
            Authorization: `token ${API_TOKEN}`
        }
    });

    console.log(response.status, response.statusText);
    //console.log("Data:", response.data);
    console.log("New Issue URL:", response.data.html_url);
    return response.data.html_url;
};

const createPR = async (owner, repo, title, head, base, body, maintainer_can_modify, draft, issue) => {
    try {
        const url = `https://api.github.com/repos/${owner}/${repo}/pulls`;

        const json = {
            accept: "application/vnd.github.v3+json",
            owner: owner,
            repo: repo,
            title: title,
            head: head,
            base: base,
            body: body,
            maintainer_can_modify: maintainer_can_modify,
            draft: draft,
            //issue: issue
        }

        const response = await axios.post(url, json, {
            headers: {
                Authorization: `token ${API_TOKEN}`
            }
        });
        console.log(response.status, response.statusText);
        console.log("Data:", response.data);

    } catch (err) {
        console.error(`Status Code: ${err.response.status} | Status Msg: ${err.response.statusText} | Msg: ${err.response.data.message}`);
    }
}

const createAll = async () => {

    const issueUrl = await createIssue("antoniopgs", "api-test", "New Issue XXX", "Lorem Ipsum 123");
    //await createPR(issueUrl);
}

//createIssue("antoniopgs", "api-test", "New Issue XXX", "Lorem Ipsum 123");
createPR("antoniopgs", "api-test", "new", "branch-1", "master", "Bla", false, false, 5);