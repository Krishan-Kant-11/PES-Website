const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({   
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
    ,
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["celebrations", "outreach", "competitions", "others"],
    },
    images: {
        type: [String],
        required: true
    }
}, { timestamps: true }
);

eventSchema.index({ date: -1 });
module.exports = mongoose.model('Event', eventSchema);
