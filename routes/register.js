const express = require('express');
// controllers
const { registerUser } = require('../controllers/register');
// router
const router = express.Router();

router.route('/').post(registerUser);

module.exports = router;
