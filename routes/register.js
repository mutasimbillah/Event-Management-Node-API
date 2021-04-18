const express = require('express');
// controllers
const { registerUser } = require('../controllers/register');
// router
const router = express.Router();
// Url/api/v1/register
router.route('/').post(registerUser);

module.exports = router;
