var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config/mongodb');

mongoose.connect(config.database);


// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
    name: String, 
    email: String,
    number: Number,
    about: String 
}));