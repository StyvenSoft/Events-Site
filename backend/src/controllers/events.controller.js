const eventsCtrl = {};
const Event = require('../models/Event');

eventsCtrl.getEvents = async (req, res) => {
    const Events = await Event.find();
    res.json(Events);
};

eventsCtrl.creatEvents = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newEvent = new Event({
        title,
        content,
        date,
        author
    });
    await newEvent.save();
    res.json({ message: 'Event Saved' });
};

eventsCtrl.getEvent = async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json(event);
};

eventsCtrl.updateEvent = async (req, res) => {
    const { title, content, author } = req.body;
    await Event.findOneAndUpdate({ _id: req.params.id }, {
        title,
        author,
        content
    });
    res.json({ message: 'Event Update' });
};

eventsCtrl.deleteEvent = async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event Delete' })
};

module.exports = eventsCtrl;