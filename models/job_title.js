const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var jobSchema = new Schema ({
    description : {
        type : String,
        required: true 
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }]
})

var JobTitle = mongoose.model('Job_title',jobSchema);

module.exports = JobTitle;