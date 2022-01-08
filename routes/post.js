var express = require('express');
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
Postrouter.get('/Posts/:userId', async(req,res)=>{
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

Postrouter.post('/NewAdminPost/:topicId/:userId', async(req,res)=>{
    const post = new Post(req.body);
    try{
        await post.save();
        res.status(201).send(post);
    }catch (error){
        res.status(500).send(error);
    }
})

Postrouter.post('/NewUserPost/:topicId/:userId', async(req,res)=>{
    const post = new Post(req.body);
    try{
        await post.save();
        res.status(201).send(post);
    }catch (error){
        res.status(500).send(error);
    }
})

module.exports = Postrouter;