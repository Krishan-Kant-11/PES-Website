const mongoose = require('mongoose');

//volunteer joining pending requests schema
const pendingRequestSchema = new mongoose.Schema({
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
    branch: {
        type: String,
        required: true
    },
    team: {
        type: String,
    },
    privileges: {
        type: String,
        enum: ["volunteer", "admin"],
        required: true
    }
}, {timestamps: true});

const PendingRequest = mongoose.model('PendingRequest', pendingRequestSchema);
module.exports = PendingRequest;