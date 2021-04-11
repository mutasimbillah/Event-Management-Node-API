const express = require('express');
// controllers
const { confirmRegistration } = require('../controllers/user');
const { getTotalUser } = require('../controllers/total');
// router
const router = express.Router();

router.route('/').post(confirmRegistration);
router.route('/total').get(getTotalUser);

module.exports = router;
