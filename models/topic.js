const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var topicSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    title:{
        type:String,
        required:true
    }
});

var Topics = mongoose.model('Topic', topicSchema);

module.exports = Topics;