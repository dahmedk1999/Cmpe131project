This project uses Node.js and Electron to build and package the html files into an desktop application.
Tutorial and installation links found here:
https://adityasridhar.com/posts/desktop-apps-with-html-css-javascript

Requires:
Git
Node.js
Electron
electron-forge

How we built the project
Step 1:
Install Nodejs 14.15.1 LTS
https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi
Install, click next and accept everything, except the final extension checkbox

Step 2:
Open cmd
npm install -g electron-forge

electron-forge init AbleGO

Step 3:
drag all of the assets and required files (html,jpgs,js, etc) and put them in /src folder at C:/Users/username/AbleGO

Step 4: 
cd AbleGO
npm start

Verify the app works

Step 5:
npm run package

AbleGO/out contains the .exe