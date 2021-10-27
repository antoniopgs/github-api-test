// ----- EDIT VAR VALUES TO FIT YOUR NEEDS -----
const owner = "antoniopgs";
const repo = "github-api-test";

const proposalNumber = 8;
const proposalTitle = "Fund H";
const proposalDescription = "Deploy Fund H at address 0x8";

const discourseEoiUrl = "https://www.example1.com";
const discourseProposalUrl = "https://www.example1.com";
const snapshotVoteUrl = "https://www.example1.com";

const details = "Issue Bla Bla"; // issue details
const discussion = "Implementation Bla Bla"; // implementation details

const implementArgs = { // edit the key value pairs
    foo: "Hello", 
    bar: "world"
};

function implement(args) { // must return object with targets array and data array
    console.log(`${args.foo}, ${args.bar}!`);

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
createAll(owner, repo, proposalNumber, proposalTitle, proposalDescription, discourseEoiUrl, discourseProposalUrl, snapshotVoteUrl, details, discussion, implementArgs, implement, json);