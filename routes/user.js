const express = require('express');
// middleware
const { protect } = require('../middleware/auth');
// controllers
const {
    confirmRegistration,
    useBus,
    returnBus,
    entry,
    launch,
    dinner,
} = require('../controllers/user');
const { getTotalUser } = require('../controllers/total');
// router
const router = express.Router();

router.route('/').post(protect, confirmRegistration);
router.route('/total').get(protect, getTotalUser);
router.route('/bus/:id').post(protect, useBus);
router.route('/returnBus/:id').post(protect, returnBus);
router.route('/entry/:id').post(protect, entry);
router.route('/launch/:id').post(protect, launch);
router.route('/dinner/:id').post(protect, dinner);

module.exports = router;
