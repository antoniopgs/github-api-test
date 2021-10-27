// ----- EDIT VAR VALUES TO FIT YOUR NEEDS -----
const owner = "antoniopgs";
const repo = "github-api-test";

const proposalNumber = 9;
const proposalTitle = "Fund I";
const proposalDescription = "Deploy Fund I at address 0x9";

const discourseEoiUrl = "https://www.example1.com";
const discourseProposalUrl = "https://www.example1.com";
const snapshotVoteUrl = "https://www.example1.com";

const details = "Issue Bla Bla"; // issue details
const discussion = "Implementation Bla Bla"; // implementation details

const implementArgs = {
    foo: "This", 
    bar: "works!"
};

function implement(implementArgs) { // must return two arrays (1st for targets, 2nd for data)
    console.log("Lorem Ipsum");
}

const json = {
    "name": "Code 423n4 (Arena) Audit - Bug Bounty #2",
    "calls": [
        {
            "target": "USDC",
            "name": "transfer",
            "parameters": [
                { "type": "address", "name": "recipient", "value": "0xC2bc2F890067C511215f9463a064221577a53E10" },
                { "type": "uint256", "name": "amount", "value": "30000000000" }
            ]
        },
        {
            "target": "TCR",
            "name": "transfer",
            "parameters": [
                { "type": "address", "name": "recipient", "value": "0xC2bc2F890067C511215f9463a064221577a53E10" },
                { "type": "uint256", "name": "amount", "value": "32258000000000000000000" }
            ]
        }
    ] 
};

// ----- DO NOT CHANGE -----
const createAll = require("./utils/create");
createAll(owner, repo, proposalNumber, proposalTitle, proposalDescription, discourseEoiUrl, discourseProposalUrl, snapshotVoteUrl, details, discussion, implementArgs, implement, json);