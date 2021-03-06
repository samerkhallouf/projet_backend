var express = require('express');
const Branche = require('../models/branche');
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
    try {
    const branche = await Branche.find({});
    res.json(branche);
    } catch (error) {
        next(error);
    }
});

router.post('/',(req,res)=>{
    const branche = new Branche(req.body);
    branche.save().then(() => {
        res.status(200).json(branche)
    }).catch((error) =>{
        console.log(error);
        res.status(500).json({
            success : false,
            message : "error creating a new branche"
        })
    }) 

});

router.delete('/:brancheId',  (req,res,next )=>{
    Branche.findByIdAndRemove(req.params.brancheId)
    .then ((resp) => {
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = router;