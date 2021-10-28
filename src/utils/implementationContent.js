const getImplementationContent = (proposalNumber, proposalTitle, proposalDescription, issueUrl, discussion, codeArgs, code, json) => {
    return (

`# ${proposalNumber} - ${proposalTitle}
${proposalDescription}

## Issue Link
Issue: ${issueUrl}

## Implementation Discussion
${discussion ? discussion : "N/A"}

## Implementation
Targets: []
Data: []

## Generation Code
\`\`\`javascript
const implementArgs = ${JSON.stringify(codeArgs, null, 4)}

${code.toString()}
\`\`\`

Generated using the following function call(s) and the DAOCheck tool:
\`\`\`json
${JSON.stringify(json, null, 4)}
\`\`\``

    )
};

module.exports = getImplementationContent;