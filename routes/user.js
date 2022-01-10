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

router.post('/AddUser', async(req,res)=>{
  const user = new User(req.body);
  user.save().then(() => {
      res.status(200).json(user)
  }).catch((error) =>{
      console.log(error);
      res.status(500).json({
          success : false,
          message : "error creating a new user"
      })
  }) 
})

router.delete('/:userId', (req,res,next) => {
  User.findByIdAndRemove(req.params.userId)
  .then ((resp) =>{
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
})

router.put('/:userId',(req,res)=>{
  User.findByIdAndUpdate(req.params.userId,
    {$set:req.body}, 
    { new: true })
    .then(() => {
        res.status(200).json({success: true});
}).catch((err) => {
 console.log(err);
 res.status(400).json({success: false, msg: err.message})
})
})

router.put('/ChangePass/:userId', (req,res) =>{
  User.findByIdAndUpdate(req.params.userId,
    {$set:req.body}, 
    { new: true })
    .then(() => {
        res.status(200).json({success: true});
}).catch((err) => {
 console.log(err);
 res.status(400).json({success: false, msg: "Could not update password"})
})
})
module.exports = router;