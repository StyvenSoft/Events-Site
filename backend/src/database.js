const mongoose = require('mongoose');

const URI = 'mongodb://localhost/eventsdb';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
    useCreateIndex: true 
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});