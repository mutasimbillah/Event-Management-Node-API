const ErrorResponse = require('../utils/error_response');
const asyncHandler = require('../middleware/async_middleware');
const User = require('../models/user');

const { addTotalUser } = require('./total');

// @desc      Confirm Registration By Admin
// @route     Post /api/v1/user
// @access    Private
exports.confirmRegistration = asyncHandler(async (req, res, next) => {
    // Check for already registered
    const alreadyRegister = await User.findOne({ userId: req.body.userId });
    if (alreadyRegister === null) {
        const user = await User.create(req.body);
        await addTotalUser();
        res.status(201).json({
            success: true,
            data: req.body,
        });
    } else {
        next(new ErrorResponse(`User ${req.body.userId} already added`, 400));
    }
});

// @desc      Confirm Registration By Admin
// @route     Post /api/v1/user
// @access    Private
exports.busUsed = asyncHandler(async (req, res, next) => {
    // Check for already registered
    const alreadyRegister = await User.findOne({ userId: req.body.userId });

    if (alreadyRegister === null) {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: req.body,
        });
    } else {
        next(new ErrorResponse(`User ${req.body.userId} already added`, 400));
    }
});
