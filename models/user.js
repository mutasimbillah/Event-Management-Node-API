//
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'register',
        required: true,
    },
    bus: {
        type: Boolean,
    },
    returnBus: {
        type: Boolean,
    },
    entry: {
        type: Boolean,
    },
    launch: {
        type: Boolean,
    },
    dinner: {
        type: Boolean,
    },
});
module.exports = mongoose.model('user', UserSchema);
