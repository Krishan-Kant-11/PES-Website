const mongoose = require('mongoose');

//attendance schema 
const attendanceSchema = new mongoose.Schema({
    date: { 
        type: Date, 
        required: true 
    },
    present: { 
        type: Boolean, 
        required: true 
    }
});

//user schema
const userSchema = new mongoose.Schema({
    photo: {
        type: String, 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    team: {
        type: String,
    },
    workDuration: {
        type: Number,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    attendance: [attendanceSchema],
    privileges: {
        type: String,
        enum: ["volunteer", "admin"],
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);