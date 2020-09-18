const eventsCtrl = {};
const Event = require('../models/Event');

eventsCtrl.getEvents = (req, res) => res.send('Event Router');

eventsCtrl.creatEvents = (req, res) => res.json({message: 'Event Saved'});

eventsCtrl.getEvent = (req, res) => res.json({title: 'Title event'});

eventsCtrl.updateEvent = (req, res) =>  res.json({message: 'Event Update'});

eventsCtrl.deleteEvent = (req, res) => res.json({message: 'Event Delete'});

module.exports = eventsCtrl;