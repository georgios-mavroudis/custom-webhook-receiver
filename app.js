const express = require('express');
const app = express();
const router = require('./routes');
const connectDB = require('./mongo');

app.use('/', router);

const hostname = '127.0.0.1';
const port = 8000;

app.listen(port, hostname, (error) => {
    connectDB()
    if (error) {
        console.log('Error: server cannot start', error)
    } else {
        console.log(`Server running at http://${hostname}:${port}/`);
    }
});
module.exports = app;