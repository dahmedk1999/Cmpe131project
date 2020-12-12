 ### This project uses Node.js and Electron to build and package the html files into an desktop application.

Tutorial and installation links found here:
https://adityasridhar.com/posts/desktop-apps-with-html-css-javascript

## Requires:

npm<br>
Git<br>
Node.js<br>
Electron<br>
electron-forge<br>

## How we built the project

### **Step 1:**

Install Nodejs 14.15.1 LTS<br>
https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi

Install, click next and accept everything, except the final extension checkbox

### **Step 2:**

Open command prompt or teminal<br>
npm install -g electron-forge<br>
electron-forge init AbleGO<br>

### **Step 3:**

drag all of the files within the assets folder (html,jpgs,js, etc) and put them in /src folder at C:/Users/username/AbleGO

### **Step 4:**
Verify the app works

cd AbleGO<br>
npm start<br>


### **Step 5:**
Make a standalone package of the app

npm run package<br>
AbleGO/out contains the .exe<br>