const log = console.log;

/**
 * @typedef ValidatorProps
 * @prop {String} applicationId - Valid Amazon Alexa Application's ID
 */
/**
 * @function
 * 
 * @param {ValidatorProps} o 
 */
function Validator(o) {

    /**
     * 
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     * 
     * @description Validate incoming express request and respond accordingly, if needed 
     */
    this.validateRequest = function (req, res, next) {
        // Get the application ID from the incoming requests body
        const hasApplicationId = ( req && req.body && req.body.session && req.body.session.application && req.body.session.application.applicationId);
        const applicationId = (hasApplicationId)? req.body.session.application.applicationId : null;
        // Create a body with an applicationID to forward
        req.alexa = {
            applicationId
        };
        
        // Compare the incoming AppId to the valid AppId
        req.alexa.isValid = (applicationId === o.applicationId);
        if (o.log === true)
            log(`Incoming application ID ${isValid?`is`:`isn't`} valid`);
            log(`${applicationId}\nVS\n${o.applicationId}`);
        
        // Identify the request type
        const hasRequestType = (req && req.body && req.body.request && req.body.request.type);
        req.alexa.requestType = (hasRequestType)? req.body.request.type : null;
        if (o.log === true)
            log(`Incoming request, type: ${req.alexa.requestType}`);

        next();
    }


}



 

/**
 * 
 * @param {ValidatorProps} o 
 */
function createValidator(o) {
    return new Validator(o).validateRequest;
}


module.exports.validator = createValidator;
