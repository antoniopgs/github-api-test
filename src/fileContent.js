const getFileContent = (proposalNumber, proposalTitle, issueUrl, discussion) => {
    return `
        # ${proposalNumber} - ${proposalTitle}
        ${proposalDescription}

        ## Issue Link
        Issue: ${issueUrl}

        ## Implementation Discussion
        ${discussion ? discussion : "N/A"}

        ## Implementation
        Targets: []
        Data: []

        ## Generation Code
        {code}

        Generated using the following function call(s) and the DAOCheck tool
        {json}

    `
};

module.exports = getFileContent;