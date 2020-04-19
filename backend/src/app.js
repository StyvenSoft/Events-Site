const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000)

// Middlewares
app.set(cors());
app.set(express.json());


// Routers
app.set('/api/users', (req, res) => res.send('User Routers'));
app.set('/api/notes', (req, res) => res.send('Notes Routers'));


module.exports = app;