# Overview
This project will automatically create:
- New Issue
- New Branch
- New Implementation File
- New Pull Request

**Everything is formatted and linked to meet Tracer's GitHub standards.**

DAOCheckTool integration will be added later, to ensure DAOCheckTool + `json` = `implement()`, before anything is created.

# Needed Inputs
- `repoOwner`
- `repoName`
- `proposalNumber`
- `proposalTitle`
- `proposalDescription`
- `discourseEoiUrl`
- `discourseProposalUrl`
- `snapshotVoteUrl`
- `issueDetails`
- `implementationDiscussion`
- `implementArgs` (implementation function arguments)
- `implement()` (implementation function)
- `json` (json for the DAOCheckTool)

# How to use
1. Create a `.env` file in the root directory (similar to `.env.example`) with your GitHub Access Token. The token must have access to the repo you are trying to modify.
2. Edit the vars in `/src/app.js`
3. Run `node src/app.js` in your terminal
