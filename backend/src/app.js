const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000)

// Middlewares
app.set(cors());
app.set(express.json());


// Routers
app.use('/api/users', require('./routers/users'));
app.use('/api/events', require('./routers/events'));


module.exports = app;