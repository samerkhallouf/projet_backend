var express = require('express');
var router = express.Router();
const User = require('../models/user');
/* GET home page. */
router.get("/", async (req, res, next) => {
    try {
    const user = await User.find({});
    res.json(user);
    } catch (error) {
    next(error);
    }
    });

router.post('/AddUser', async(req,res,next)=>{
  User.create(req.body)
  .then((user) => {
    console.log("User added", user);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(user);
  },(err) => next(err))
  .catch((err) => next(err)); 
})

router.delete('/:userId', (req,res,next) => {
  User.findByIdAndDelete(req.params.userId)
  .then ((resp) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err));
})

router.put('/AddUser/:userId',(req,res,next)=>{
  User.findByIdAndUpdate(req.params.userId,{
    $set:req.body
  },{ new : true})
  .then ((user) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err));
})
module.exports = router;