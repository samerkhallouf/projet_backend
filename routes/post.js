var express = require('express');
const Posts = require('../models/post');
var Postrouter = express.Router();
var Post = require('../models/post');
const { post } = require('./user');

/* GET home page. */
Postrouter.get("/Bytopics", async (req, res) => {
    try {
    const post = await Post.find(req.body);
    res.json(post);
    } catch (error) {
    res.Postrouter(500).send(error.message);
    }
});

Postrouter.get("/Byuser", async(req,res)=>{

    try {
        const post = await Post.find(req.body);
        res.json(post);
        } catch (error) {
        res.Postrouter(500).send(error.message);
        }
})
Postrouter.post('/NewPost',(req,res)=>{
    const post = new Post(req.body);
    post.save().then(() => {
        res.status(200).json(post)
    }).catch((error) =>{
        console.log(error);
        res.status(500).json({
            success : false,
            message : "error creating a new post"
        })
    }) 

});



Postrouter.delete('/:postId', (req,res,next) => {
    Post.findByIdAndRemove(req.params.postId)
    .then ((resp) =>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
                  res.json(resp);
              }, (err) => next(err))
              .catch((err) => next(err));
  })

module.exports = Postrouter;