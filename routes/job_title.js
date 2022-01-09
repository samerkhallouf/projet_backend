var express = require('express');
const JobTitle = require('../models/job_title');
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
    try {
    const job = await JobTitle.find({});
    res.json(job);
    } catch (error) {
        next(error);
    }
});

router.post('/',(req,res)=>{
    const job = new JobTitle(req.body);
    job.save().then(() => {
        res.status(200).json(job)
    }).catch((error) =>{
        console.log(error);
        res.status(500).json({
            success : false,
            message : "error creating a new job"
        })
    }) 

});
router.delete('/:jobId',  (req,res,next )=>{
    Branche.findByIdAndRemove(req.params.jobId)
    .then ((resp) => {
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = router;