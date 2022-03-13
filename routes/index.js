const router = require('express').Router();

router.use('/user', require('./User.js'));

module.exports = router;