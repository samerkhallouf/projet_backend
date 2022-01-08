
var express = require('express');
var Topicrouter = express.Router();
const Topics = require('../models/topic');
/* GET home page. */
Topicrouter.get("/", async (req, res, next) => {
    try {
    const topic = await Topics.find({});
    res.json(topic);
    } catch (error) {
    next(error);
    }
});

Topicrouter.post('/NewTopic',(req,res,next)=>{
    Topics.create(req.body)
    .then ((topic) => {
        console.log("Topic added ",topic );
        res.json(topic);
    },(err)=> next(err))
    .catch((err)=> next(err))   
});

Topicrouter.delete('/:topicId',  (req,res,next )=>{
    Topics.findByIdAndRemove(req.params.topicId)
    .then ((resp) => {
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

Topicrouter.put('/ModifyTopics/:topicId',  (req,res,next)=>{
    Topics.findByIdAndUpdate(req.params.topicId)
    .then((resp) => {
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
});


module.exports = Topicrouter;