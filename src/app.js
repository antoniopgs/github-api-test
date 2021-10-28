// ----- EDIT VAR VALUES TO FIT YOUR NEEDS -----
const repoOwner = "antoniopgs";
const repoName = "github-api-test";

const proposalNumber = 818;
const proposalTitle = "Fund byb";
const proposalDescription = "Deploy Fund byb at address 0x000";

const discourseEoiUrl = "https://www.example1.com";
const discourseProposalUrl = "https://www.example1.com";
const snapshotVoteUrl = "https://www.example1.com";

const issueDetails = "Issue Bla Bla";
const implementationDiscussion = "Implementation Bla Bla";

// must return object with targets array and data array
function implement() {
    console.log("Hello, world!");

    return {
        targets: [1, 2, 3],
        data: ["a", "b", "c"]
    }
}

// edit the calls array
const json = {
    "name": `${proposalTitle}`,
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
createAll(
    repoOwner,
    repoName,
    proposalNumber,
    proposalTitle,
    proposalDescription,
    discourseEoiUrl,
    discourseProposalUrl,
    snapshotVoteUrl,
    issueDetails,
    implementationDiscussion,
    implement,
    json
);