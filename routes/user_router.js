const express = require('express');
// controllers
const { createUser } = require('../controllers/user_controller');
// router
const router = express.Router();

router.route('/').post(createUser);

module.exports = router;
