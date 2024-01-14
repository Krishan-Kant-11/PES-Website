const Event = require('../models/EventModel');
const mongoose = require('mongoose')

// Get a Single Event
const getEvent = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'});
    }

    const event = await Event.findById(id);
    if(!event){
        res.status(404).json({error: "No such event"});
    }
    res.status(200).json(event)
}

// Get All Events 
const getEvents = async (req, res) => {
    const events = await Event.find({}).sort({createdAt: -1});
    res.status(200).json(events)
}

// Create an Event
const createEvent = async (req, res) => {
    const {title, dated} = req.body;

    try{
      const event = await Event.create({title, dated});
      res.status(200).json(event); 
    } catch(error) {
      res.status(400).json({error: error.message});
    }
}

// Delete an Event
const deleteEvent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'});
    }
    
    const event = await Event.findOneAndDelete({_id: id});
    if(!event){
        res.status(404).json({error: "No such event"});
    }
    res.status(200).json(event)
}

// Update an Event
const updateEvent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'});
    }

    const event = await Event.findOneAndUpdate({_id: id});
    if(!event){
        res.status(404).json({error: "No such event"});
    }
    res.status(200).json(event)

}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
}