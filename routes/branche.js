var express = require('express');
const branche = require('../models/branche');
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
    try {
    const branche = await branche.find({});
    res.json(branche);
    } catch (error) {
        next(error);
    }
});

router.get('/AddUser',async(req,res)=>{
    try{
        const branches = await branche.find({});
        res.status(200).send(branches);
    }catch(error){
        res.status(500).send(error);
    }
})
module.exports = router;