//
const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add user Name'],
    },
    mobile: {
        type: String,
        maxLength: 11,
        required: [true, 'Please add mobile Number'],
    },
    email: {
        type: String,
        required: [true, 'Please add an Email'],
    },
    type: {
        type: String,
        required: [true, 'Please add a user Type'],
        enum: ['teacher', 'student', 'guest'],
    },
});
module.exports = mongoose.model('register', RegisterSchema);
