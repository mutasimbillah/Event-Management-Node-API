const express = require('express');
// middlewire
const { protect } = require('../middleware/auth');
// controllers
const { addAdmin, adminLogin } = require('../controllers/admin');
// router
const router = express.Router();
// Url/api/v1/admin
router.route('/').post(protect, addAdmin);
router.route('/login').post(adminLogin);

module.exports = router;
