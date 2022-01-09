const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var likeSchema = new Schema ({
    user : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    post : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Posts'
    }
    }, {
        timestamps: true
})

var Like = mongoose.model('Like',likeSchema);

module.exports = Like;