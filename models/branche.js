const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var brancheSchema = new Schema ({
    region:{
        type: String,
        required : true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }]
})

var Branche = mongoose.model('Branche',brancheSchema);

module.exports = Branche;