const express = require('express');
// middlewire
const { protect } = require('../middleware/auth');
// controllers
const { addAdmin, login } = require('../controllers/admin');
// router
const router = express.Router();

router.route('/').post(protect, addAdmin);
router.route('/login').post(login);

module.exports = router;
