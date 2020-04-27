const { Router } = require('express');
const router = Router();
const { getEvents, creatEvents, getEvent, updateEvent, deleteEvent } = require('../controllers/events.controller');

router.route('/')
    .get(getEvents)
    .post(creatEvents);

router.route('/:id')
    .get(getEvent)
    .put(updateEvent)
    .delete(deleteEvent);

module.exports = router;