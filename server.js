/**
 * @description Server to handle AWS requests from Alexa
 * 
 * Handle the LockMyComputer requests and lock the pc
 */

// Server setup
const express = require('express');
const app     = express();

app.listen(1337, () => {console.log("Listening on port 1337")});

const bodyParser = require('body-parser');

// // Get Sensitive data 
const sensitive = require('./sensitive');
// // My Modules
const alexaValidator = require('./Alexa/Validation').validator({
    applicationId: sensitive.alexa.applicationId
})
// const alexaResponder = require('./Alexa/Communication'); // 

const alexaMessages = require('./Alexa/Messages');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Validate all incoming requests
app.use(alexaValidator);
// Identify and process the valid requests
//app.use();

// Test Get page
app.get('/', (req, res) => {
    res.send(req.alexa);
})

// Command to lock a windows10 PC
function lockComputerCommand(msg) {
    return `rundll32.exe user32.dll, LockWorkStation && msg * ${msg}`;
}

// Main Alexa request handler
app.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    /*
    // Set response content type
    console.log(`[POST-IN]<Req.body> : ${JSON.stringify(req.body, null, 2)}`);
    let response = {content: "none"};
    if (req.body.request.type == "IntentRequest") {
        response = intentResponse;
    } else {
        response = launchResponse;
    }
    res.json(response);
    */
    // Reject
    
    res.json(alexaMessages.raw.launchResponse);
})

