// ----- EDIT VAR VALUES TO FIT YOUR NEEDS -----
const proposalNumber = 1936;
const proposalTitle = "Growth WW2";
const proposalDescription = `\
Deploy Fund byb at address 0x000
- Address A: \`0xE94A8d2eda89866C628AfF5Ff1461DFD22fC5DcD\`
- Amount B: \`50_000\``;

const discourseEoiUrl = "https://www.example1.com";
const discourseProposalUrl = "https://www.example1.com";
const snapshotVoteUrl = "https://www.example1.com";

const issueDetails = `\
- Address A: \`0xE94A8d2eda89866C628AfF5Ff1461DFD22fC5DcD\`
- Amount B: \`50_000\``;

const implementationDiscussion = `\
- Address A: \`0xE94A8d2eda89866C628AfF5Ff1461DFD22fC5DcD\`
- Amount B: \`50_000\``;

function implement() {

    // ----- EDIT HERE -----
    const targets = [1, 2, 3];
    const data = ["a", "b", "c"];
    // ----- STOP EDITING -----

    return {
        targets: targets,
        data: data
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
const run = require("./utils/create");
run(
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