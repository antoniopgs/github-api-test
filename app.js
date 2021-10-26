const axios = require("axios");

const accept = "application/vnd.github.v3+json";
const owner = "antoniopgs";
const repo = "api-test"
const title = "Pull Request 1"
const body = "Lorem Ipsum 123"
//const assignee = 
//const milestone = 
//const labels = 
//const assignees = 

const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
const json = {
    accept: accept,
    owner: owner,
    repo: repo,
    title: title,
    body: body,
    //assignee: assignee,
    //milestone: milestone,
    //labels: labels,
    //assignees: assignees
}

const createPR = async () => {
    try {
        const response = await axios.post(url, json);
        console.log("response:", response);

    } catch (err) {
        console.error(err.response.status, err.response.statusText);
    }
}

createPR();