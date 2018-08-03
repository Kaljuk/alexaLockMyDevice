

/** Object that was created and will be returned as a response to the alexa request
 * @typedef CreatedResponse
 * @prop {String} version  - Version of the BackEnd software
 * @prop {responseCard} response - Response text that alexa responds
 * @prop {Object} card     - Card that shows up in alexa app as indication of past communication
 */

/**
 * @typedef {Object} responseCard Card that shows communication summary in the alexa app
 * @prop {String} type    - Type of the card [ "Simple" (just text), "Standard" (text with picture), "LinkAccount" (? FINDOUT:) ]
 * @prop {String} title   - Title of the card
 * @prop {String} content - Cards content / paragraph 
 * // TODO: Add picture properties and add them into the functions possible outcome
 */
/**
 * @typedef {Object} responseText 
 * @prop {String} text
 */
/**
 * @typedef {Object} ResponseParameters
 * @prop {responseCard} card - Card that shows in the alexa app
 * @prop {responseText} response
 */
/**
 * @param {ResponseParameters} o 
 * @returns {CreatedResponse}
 */
// TODO: Refactor this to handle parameters before entering them into an object
function createResponse(o={}) {
    let message = {
        "version": "1.0"
    };

    const response = {
        "outputSpeech": {
        "type": "PlainText",
        "text": `${(typeof o.response.text == "string")?o.text : "No text"}`,
        "ssml": `<speak>${
            (typeof o.response.pronounce == "string")?o.response.pronounce:
            (typeof o.response.text == "string")?o.response.text:
            "lol, what was it again?"
        }</speak>`
        },
        "shouldEndSession": true
    };
    const card = {
        "type": `${(typeof o.card != 'undefined' && typeof o.card.type == 'string')? o.card.type : ""}`,
        "title": `${(typeof o.card != 'undefined' && typeof o.card.title == 'string')? o.card.title : ""}`,
        "content": `${(typeof o.card != 'undefined' && typeof o.card.content == 'string')? o.card.content : ""}`
    };

    message.response = response;
    message.card     = card;
    return message;
}








module.exports = {
    
    
}