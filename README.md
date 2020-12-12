 # AbleGO
 Uses Google Maps Javascript API and Directions API to display map and directions.
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
cd AbleGO

move all files(html,jpgs,js, etc) within the assets folder to the AbleGO/src directory
Windows:C:/Users/username/AbleGO<br>
Mac: OS/users/AbleGO<br>
### **Step 4:**
Verify the app works

cd AbleGO<br>
npm start<br>


### **Step 5:**
Make a standalone package of the app

npm run package<br>
AbleGO/out contains the .exe<br>