const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    title: String,
    content: {
        type: String,
        require: true
    },
    author: String,
    date: {
        type: date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Event', eventSchema);