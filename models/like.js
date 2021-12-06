const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var likeSchema = new Schema ({
    date : {
        type : String, 
    },
    id_like : {
        type : Number
    }
})

var like = mongoose.model('Like',likeSchema);

module.exports = like;