# MobFlix
An online streaming portal interface using React which lets user stream movies and TV series.

## Prerequisite
You need to have [Node.js (12+)](https://nodejs.org/en/) installed to run this project

## Setup
- clone the repository
```
git clone https://github.com/bahmi/mobflix.git
```
-  After cloning the repo, go to its root directory and run the following command to install required packages
```
npm install
```
- Once all the packages are installed, create a `.env` file at the root directory and fill out with your firebase
credentials.
```
REACT_APP_API_KEY = YOUR_API_KEY
REACT_APP_AUTH_DOMAIN = YOUR_AUTH_DOMAIN
REACT_APP_DATABASE_URL = YOUR_DATABASE_URL
REACT_APP_PROJECT_ID = YOUR_PROJECT_ID
REACT_APP_STORAGE_BUCKET = YOUR_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID = YOUR_MESSAGING_SENDER_ID
REACT_APP_APP_ID = YOUR_APP_ID
```
- Finally, to run the project simply do 
```
npm start
```

## Live Demo
Check out the live demo at [mobflix.netlify.app](https://mobflix.netlify.app/)

## Built With
- [React](https://reactjs.org/) - Frontend Library
- [npm](https://www.npmjs.com/) - Package Manager
- [Firebase](https://firebase.google.com/) - Data Storage Platform
- [VSCode](https://code.visualstudio.com/) - Code Editor
- [Jest](https://jestjs.io/) - Testing Framework
- [Netlify](https://www.netlify.com/) - Deployment Platform