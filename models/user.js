var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    admin:  {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        default: "ChangeYourPassword"
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post'
    }],
    job_title : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'JobTitle',
        required: true
    },
    branche : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Branche',
        required: true
    }
    // ,
    // likes: [{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Like'
    // }]
});



module.exports = mongoose.model('User', User);