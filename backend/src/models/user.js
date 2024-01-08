const mongoose = require('mongoose');

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
    attendance: {
        type: {
            date: {
                type: Date,
                required: true
            },
            present: {
                type: Boolean,
                required: true 
            }
        },
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);