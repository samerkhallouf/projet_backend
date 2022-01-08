const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var topicSchema = new Schema({
    topicId: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    posts: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

var Topics = mongoose.model('Topic', topicSchema);

module.exports = Topics;