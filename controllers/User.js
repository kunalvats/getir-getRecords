const recordInteractor = require('../mongo_interactors/Record.js');
const { SimpleSuccessResponse, ErrorResponse } = require('../utils/Response.js')
class User {
    getRecords = async (req, res) => {
        try {
            const { minCount, maxCount, startDate, endDate } = req.body;
            const recordData = await recordInteractor.getRecords(minCount, maxCount, startDate, endDate);
            res.json(SimpleSuccessResponse(recordData));
        } catch (error) {
            res.json(ErrorResponse(500, error.stack, error.message));
        }
    }
}

module.exports = new User();