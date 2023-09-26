const express = require('express');
const app = express();
const router = require('./routes');
const connectDB = require('./mongo');

app.use('/', router);

const port = process.env.PORT

app.listen(port, (error) => {
    connectDB()
    if (error) {
        console.log('Error: server cannot start', error)
    } else {
        console.log(`Server running at PORT: ${port}/`);
    }
});
module.exports = app;