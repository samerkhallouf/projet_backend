var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
    try {
    const user = await User.find({});
    res.json(user);
    } catch (error) {
    res.status(500).send(error.message);
    }
    });

module.exports = router;