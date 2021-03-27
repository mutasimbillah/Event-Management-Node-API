// const ErrorResponse = require('../utils/error_response');
const asyncHandler = require('../middleware/async_middleware');
// @desc      Get all entry
// @route     GET /api/v1/entry
// @access    Public
// eslint-disable-next-line no-unused-vars
exports.getEntryList = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, msg: 'OK' });
});
