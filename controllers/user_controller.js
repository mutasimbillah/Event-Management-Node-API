const ErrorResponse = require('../utils/error_response');
const asyncHandler = require('../middleware/async_middleware');
const UserSchema = require('../models/user_model');
// @desc      Create User
// @route     Post /api/v1/user
// @access    Private
exports.createUser = asyncHandler(async (req, res, next) => {
    // Check for published bootcamp
    const alreadyRegister = await UserSchema.findOne({ mobile: req.body.mobile });

    if (alreadyRegister === null) {
        const user = await UserSchema.create(req.body);
        res.status(201).json({
            success: true,
            data: req.body,
        });
    } else {
        next(new ErrorResponse(`Mobile number ${req.body.mobile} already registered`, 400));
    }
});
