# Testing My Store Website using NightwatchJS and testing Mocha-Auth-User API Routes using SuperTest

## Overview
This README provides instructions on how to test the My Store website using NightwatchJS and test the Mocha-Auth-User API routes using Supertest. It includes steps for setting up and running UI tests using NightwatchJS and API tests using Supertest and Mocha.

## UI Testing with NightwatchJS
NightwatchJS is a browser automation framework that allows you to write automated tests in JavaScript. Follow the steps below to run UI tests on the My Store website.

### Prerequisites
- Node.js and NPM (Node Package Manager) should be installed.
- NightwatchJS should be installed.

### Getting Started
1. Clone or download the repository.
2. Navigate to the `UI/NightWatch` folder in the project directory.
3. Open the Command Line.
4. Run the following command to initialize NightwatchJS:
   npm init nightwatch
Follow the setup guide to choose the browser and testing type.
5. To test the ContactUs form, run the following command:
npx nightwatch test/MyStore/ContactUs.js
This will generate an HTML report with the test case output in the `test-output/night-watch-html-report` folder.
6. To test the SearchDress function, run the following command:
   npx nightwatch test/MyStore/SearchDress.js
This will generate an HTML report with the test case output in the `test-output/night-watch-html-report` folder.

## API Testing with Supertest and Mocha-Auth-User
Supertest is a library for testing HTTP servers in Node.js, providing a high-level API for making HTTP requests and asserting responses. Follow the steps below to run API tests on the Mocha-Auth-User routes.

### Prerequisites
- Supertest should be installed.
- Mock-User-Auth should be installed.
- Mocha test runner should be installed.

### Getting Started
1. Clone or download the repository.
2. Navigate to the `API/MockUser` folder in the project directory.
3. Open the Command Line.
4. Run the following command to install the Mock-User-Auth module:
   npm i --save mock-user-auth
5. Create a script in the `package.json` file:
```json
{
  "scripts": {
    "dev": "nodemon ./node_modules/mock-user-auth/bin/www.js"
  }
}
```
6. Start the Mock-User-Auth server by running:
 npm run dev
Keep this command running in one command line instance.

Open a new command line instance and navigate to the API/MockUser folder.

7. Run the following command to install Supertest:
   npm install supertest --save-dev

8. Run the following command to install Mocha:
   npm install --save-dev mocha

9. Execute the API tests by running the command:
   npx mocha api.test.js

10. To generate an HTML report using mochawesome, run the following command:
    npm install --save-dev mochawesome

11. Add the following line under the "scripts" section in the package.json file:
    "test": "mocha --reporter mochawesome api.test.js"

12. Run the command npm test to execute the tests and generate an HTML report.

13. The HTML report with the test cases will be created inside the mochawesome-report folder.
