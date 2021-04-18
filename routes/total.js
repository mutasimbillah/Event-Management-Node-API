const express = require('express');
// middleware
const { protect } = require('../middleware/auth');
// controllers
const {
    getTotalUser,
    busUsed,
    returnBusUsed,
    entryUsed,
    launchUsed,
    dinnerUsed,
} = require('../controllers/total');
// router
const router = express.Router();
// Url/api/v1/total
router.route('/').get(protect, getTotalUser);
router.route('/bus').get(protect, busUsed);
router.route('/returnbus').get(protect, returnBusUsed);
router.route('/entry').get(protect, entryUsed);
router.route('/launch').get(protect, launchUsed);
router.route('/dinner').get(protect, dinnerUsed);

module.exports = router;
