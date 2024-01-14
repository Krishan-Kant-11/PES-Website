const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    // id:{
    //     type: Number,
    //     required: true
    // },   
    title: {
        type: String,
        required: true
    },
    dated: {
        type: String,
        required: true
    }
}
);

module.exports = mongoose.model('Event', eventSchema);
