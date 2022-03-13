const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.js');
const { body, validationResult } = require('express-validator');

router.post('/getUserInfo',
  [
    body('startDate')
      .exists()
      .withMessage('startDate is required')
      .isISO8601()
      .withMessage('startDate is not valid'),
    body('endDate')
      .exists()
      .withMessage('endDate is required')
      .isISO8601()
      .withMessage('endDate is not valid'),
    body('minCount')
      .exists()
      .withMessage('minCount is required')
      .isInt()
      .withMessage('minCount is not valid'),
    body('maxCount')
      .exists()
      .withMessage('maxCount is required')
      .isInt()
      .withMessage('maxCount is not valid')
  ],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });

    UserController.getRecords(req, res);
  });

module.exports = router;