const getFileContent = (proposalNumber, proposalTitle, proposalDescription, issueUrl, discussion, code, json) => {
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
${code.toString()}
\`\`\`

Generated using the following function call(s) and the DAOCheck tool:
\`\`\`json
${JSON.stringify(json, null, 4)}
\`\`\``

    )
};

module.exports = getFileContent;