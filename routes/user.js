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

module.exports = router;
