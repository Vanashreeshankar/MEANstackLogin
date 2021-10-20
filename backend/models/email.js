const mongoose = require('mongoose');

var Email = mongoose.model('Email',{
 
    type: {type:String},
    email_id: {type:String},
    category: {type:String}
});

module.exports = { Email };