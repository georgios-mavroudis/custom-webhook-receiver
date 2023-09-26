const mongoose = require('mongoose');

const ParamSchema = mongoose.Schema({
    secret: String,
    body: String,
});

module.exports = mongoose.model('Param', ParamSchema)