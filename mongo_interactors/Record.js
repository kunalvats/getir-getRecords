const Records = require("../mongo_model/Records.js")

class RecordInteractor {
    getRecords = async (minCount, maxCount, startDate, endDate) => {
        const recordData = await Records.aggregate([
            {
                $project: {
                    _id: 0,
                    key: 1,
                    createdAt: 1,
                    totalCount: { $sum: "$counts" }
                }
            },
            {
                $match: {
                    totalCount: {
                        $gte: Number(minCount),
                        $lte: Number(maxCount)
                    },
                    createdAt: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    }
                }
            }
        ])

        return recordData
    }
}

module.exports = new RecordInteractor();
