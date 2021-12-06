const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var postSchema = new Schema({
    postId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    highlighted:   {
        type: Boolean,
        default: false
    },
    numberOfLikes:{
	type: Numbrer,
	default: 0,
    timestamps: true
    }
});

var Posts = mongoose.model('Post', postSchema);

module.exports = Posts;