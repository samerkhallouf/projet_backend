const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var brancheSchema = new Schema ({
    id:{
        type : Number,
        required : true
    },
    region:{
        type: String,
        required : true
    }
})

var branche = mongoose.model('Branche',brancheSchema);

module.exports = branche;