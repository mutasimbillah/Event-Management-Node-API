// @desc      Get all entry
// @route     GET /api/v1/entry
// @access    Public

// eslint-disable-next-line no-unused-vars
exports.getEntryList = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'OK' });
};
