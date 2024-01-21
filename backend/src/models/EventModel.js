const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({   
    title: {
        type: String,
        required: true
    },
    dated: {
        type: String,
        required: true
    }
    ,
    description: {
        type: String,
        required: true
    }
    // ,
    // photo:
    // {
    //     type: String,
    //     // data: Buffer,
    //     // contentType: String,
    //     required: true
    // },
    // type:    // Events, Outreach, Achievements
    // {
    //    
    // }
}, { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
