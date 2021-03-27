const express = require('express');
// controllers
const { getEntryList } = require('../controllers/entry_controller');
// router
const router = express.Router();

router.route('/').get(getEntryList);

module.exports = router;
