var express = require('express');
var router = express.Router();
const Topic = require('../models/topic');
/* GET home page. */
router.get("/", async (req, res, next) => {
    try {
    const topic = await Topic.find({});
    res.json(topic);
    } catch (error) {
    next(error);
    }
    });

module.exports = router;