var express = require('express');
const Posts = require('../models/post');
var Postrouter = express.Router();
var Post = require('../models/post')

/* GET home page. */
Postrouter.get("/", async (req, res, next) => {
    try {
    const post = await Post.find({});
    res.json(post);
    } catch (error) {
    res.Postrouter(500).send(error.message);
    }
});
Postrouter.get('/:userId', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.json(post)
        if(!post){
            return res.status(404);
        }
        res.status(200).send(post);
    }catch(error){
        res.Postrouter(500).send(error.message);
    }
})

Postrouter.post('/NewPost/:topicId/:userId', async(req,res)=>{
    Post.create(req.body)
    .then((post) => {
      console.log("post added", post);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(post);
    },(err) => next(err))
    .catch((err) => next(err)); 
})


Postrouter.delete('/:postId', (req,res,next) => {
    Post.findByIdAndDelete(req.params.postId)
    .then ((resp) =>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
                  res.json(user);
              }, (err) => next(err))
              .catch((err) => next(err));
  })

module.exports = Postrouter;