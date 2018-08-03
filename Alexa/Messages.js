/**
 * @description Message creation for answering alexa
 */





const launchResponse = {
    "version": "1.0",

    "response": {
        "outputSpeech": {
            "type": "PlainText",
            "text": "I am not a real human."        },
        "reprompt": {
            "outputSpeech": {
                "type": "PlainText",
                "text": "Hello, again, Erik, normal response, test 1 2 3",
                "ssml": "<speak><amazon:effect name=\"whispered\">I am not a real human.</amazon:effect></speak>"
            }
        },
        "shouldEndSession": true
    },
    "card": {
        "type": "Simple",
        "title": "test Card",
        "content": "This is just some testing text.\nAnd this should be another row of testing text."
    },
};

const intentResponse = {
    "version": "1.0",

    "response": {
        "outputSpeech": {
            "type": "PlainText",
            "text": "Hello, Erik, the fridge includes some vodka and half a bottle of milk, would you like some?",
            "ssml": "<speak>Hello, Erik, the fridge includes some vodka and half a bottle of milk, would you like some?</speak>"       
        },
        "reprompt": {
        "outputSpeech": {
            "type": "PlainText",
            "text": "Hello, again, Erik, normal response, test 1 2 3",
            "ssml": "<speak>Hello, again, Erik, normal response, test 1 2 3</speak>"
        }
        },
        "shouldEndSession": true
    },
    "card": {
        "type": "Simple",
        "title": "Fridge contents",
        "content": "This is just some testing text.\nAnd this should be another row of testing text."
    },
};


module.exports = {
    raw: {
        launchResponse,
        intentResponse
    }
}