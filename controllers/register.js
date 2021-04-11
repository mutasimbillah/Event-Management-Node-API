const ErrorResponse = require('../utils/error_response');
const asyncHandler = require('../middleware/async_middleware');
const RegisterUser = require('../models/register');
// @desc      Register User
// @route     Post /api/v1/register
// @access    Public
exports.registerUser = asyncHandler(async (req, res, next) => {
    // Check for published bootcamp
    const alreadyRegister = await RegisterUser.findOne({ mobile: req.body.mobile });

    if (alreadyRegister === null) {
        const user = await RegisterUser.create(req.body);
        res.status(201).json({
            success: true,
            data: req.body,
        });
    } else {
        next(new ErrorResponse(`Mobile number ${req.body.mobile} already registered`, 400));
    }
});
