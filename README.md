Testing My Store Website using NightwatchJS

This README provides instructions on how to test the My Store website using NightwatchJS and to test mocha-auth-user API routes using supertest.
 
NightwatchJS is a browser automation framework that allows you to write automated tests in JavaScript.
Supertest is SuperTest is a library for testing HTTP servers in Node.js. It provides a high-level API for making HTTP requests and asserting the responses, allowing you to easily test your web applications and APIs.


The reports and bug reports and documentation for both the UI and API parts are avaialable inside output folder in the root directory.

For the first folder (UI):
We are testing the UI for MyStore WebPage, specifically the ContactUs form and the searching for a dress function.

Prerequisites for running the project:
1.Node.js to be installed.
2.NPM (Node Package Manager) to be installed.
3.NightwatchJS to be installed.

Getting Started (Windows Version):
1.Clone  or download the repository 
2.Navigate to UI/NightWatch folder in the project directory.
3.Open the Command Line
5.Run npm init nightwatch
6.Choose the used browser, testing type and so on, you can find the details in the guide here: https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html
4.Run the following command for testing ContactUs form npx nightwatch test/MyStore/ContactUs.js
5.The HTML report with the test cases output will be created in test-output/night-watch-html-report
6.Run the following command for testing SearchDress function npx nightwatch test/MyStore/SearchDress.js
7.The HTML report with the test cases output will be created in test-output/night-watch-html-report

For the second folder (API):
We are testing the mock-user-auth APIs using supertest and mocha as a test runner

Prerequisites for running the project:
1.SuperTest to be installed.
2.mock-user-auth to be installed.
3.Mocha test runner to be installed.

Getting Started (Windows Version):
1.Clone  or download the repository
2.Navigate to API/MockUser folder in the project directory.
3.Open the Command Line
4.Run npm i --save mock-user-auth
5.Create script in package.json:

 {
   "script": {
     "dev": "nodemon ./node_modules/mock-user-auth/bin/www.js"
   }
 }
6.npm run dev

In a new command line while keepint the other one running run the following commands 
7.npm install supertest --save-dev
8.npm install --save-dev mocha
9.npx mocha api.test.js

To create HTML report I used mochawesome
10.npm install --save-dev mochawesome
11.Add this under scripts in the package.json file: "test": "mocha --reporter mochawesome api.test.js",
12.Run npm test
13.An HTML report with test cases will be created inside mochawesome-report


