//
const mongoose = require('mongoose');

const TotalUser = new mongoose.Schema({
    totalUser: {
        type: Number,
    },
    bus: {
        type: Number,
    },
    returnBus: {
        type: Number,
    },
    entry: {
        type: Number,
    },
    launch: {
        type: Number,
    },
    dinner: {
        type: Number,
    },
});
module.exports = mongoose.model('total', TotalUser);
