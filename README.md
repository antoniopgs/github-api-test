# Overview
This project will automatically create:
- New Issue
- New Branch
- New Implementation File
- New Pull Request

**Everything is formatted and linked to meet Tracer's GitHub standards.**

DAOCheckTool integration will be added later, to ensure DAOCheckTool + `json` = `implement()`, before anything is created.

# Needed Inputs
- `owner` (repo owner)
- `repo` (repo name)
- `proposalNumber`
- `proposalTitle`
- `proposalDescription`
- `discourseEoiUrl`
- `discourseProposalUrl`
- `snapshotVoteUrl`
- `details` (issue details)
- `discussion` (implementation details)
- `implementArgs` (implementation function arguments)
- `implement()` (implementation function)
- `json` (json for the DAOCheckTool)

# How to use
1. Edit the vars in `/src/app.js`
2. Run `node src/app.js` in your terminal
