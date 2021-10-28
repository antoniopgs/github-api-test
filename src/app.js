// ----- EDIT VAR VALUES TO FIT YOUR NEEDS -----
const repoOwner = "antoniopgs";
const repoName = "github-api-test";

const proposalNumber = 666;
const proposalTitle = "Fund 666";
const proposalDescription = "Deploy Fund 666 at address 0x666";

const discourseEoiUrl = "https://www.example1.com";
const discourseProposalUrl = "https://www.example1.com";
const snapshotVoteUrl = "https://www.example1.com";

const issueDetails = "Issue Bla Bla";
const implementationDiscussion = "Implementation Bla Bla";

function implement() { // must return object with targets array and data array
    console.log("Hello, world!");

    return {
        targets: [1, 2, 3],
        data: ["a", "b", "c"]
    }
}

const json = { // edit the calls array
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

/*
if (implement(implementArgs) !== daoCheckTool) {
    throw new Error("implementation does not match DAOCheckTool json output");
}
*/

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