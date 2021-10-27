const getIssueBody = (proposalNumber, proposalTitle, proposalDescription, discourseEoiUrl, discourseProposalUrl, snapshotVoteUrl, details = null) => {
    return `
        # ${proposalNumber} - ${proposalTitle}
        ${proposalDescription}

        ## Links
        [Discourse EOI](${discourseEoiUrl})
        [Discourse Proposal](${discourseProposalUrl})
        [Snapshot Vote](${snapshotVoteUrl})

        ## Extra Details Needed for implementation
        ${details ? details : "N/A"}
    `
}

module.exports = getIssueBody;