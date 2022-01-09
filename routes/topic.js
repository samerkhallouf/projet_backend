
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

Topicrouter.post('/NewTopic',(req,res)=>{
    const topic = new Topics(req.body);
    topic.save().then(() => {
        res.status(200).json(topic)
    }).catch((error) =>{
        console.log(error);
        res.status(500).json({
            success : false,
            message : "error creating a new topic"
        })
    }) 

});
Topicrouter.delete('/:topicId',  (req,res,next )=>{
    Topics.findByIdAndRemove(req.params.topicId)
    .then ((resp) => {
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
Topicrouter.put("/ModifyTopics/:id", (req, res) => {
    Topics.findByIdAndUpdate(req.params.id,
         {$set:req.body}, 
         { new: true })
         .then(() => {
             res.status(200).json({success: true});
    }).catch((err) => {
      console.log(err);
      res.status(400).json({success: false, msg: err.message})
    })
});

module.exports = Topicrouter;