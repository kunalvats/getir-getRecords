const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecordsSchema = new Schema({
    key: {
        type: String,
        index: true
    },
    value: String,
    counts: { type: [Array], default: []},
}, {
    timestamps: true
});
module.exports = mongoose.model("records", RecordsSchema)