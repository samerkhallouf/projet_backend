const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var postSchema = new Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    topic : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Topic'
    }
    }, {
        timestamps: true
    // ,
    // highlighted:   {
    //     type: Boolean,
    //     default: false
    // },
    // numberOfLikes:{
	// type: Number,
	// default: 0,
    // timestamps: true
    // },
    // likes: [{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Like'
    // }]
});

var Posts = mongoose.model('Post', postSchema);

module.exports = Posts;
