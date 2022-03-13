const errorMessage = require('../utils/Error.js')
SimpleSuccessResponse = function (response, successCode = 0) {
    if(!response) throw new Error('Response is required')
    return {
        code: successCode,
        msg: successCode === 0 ? 'Success' : 'Failed',
        records: response
    }
}

ErrorResponse = function (code = 500, error, message) {
    message = message || errorMessage.genericError;
    console.log(error);
    return {
        code,
        error,
        message
    }
}

module.exports = {
    SimpleSuccessResponse,
    ErrorResponse
}