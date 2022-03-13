const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.js');

router.post('/getUserInfo',
[

], function(req, res) {
  UserController.getRecords(req, res);
});

module.exports = router;