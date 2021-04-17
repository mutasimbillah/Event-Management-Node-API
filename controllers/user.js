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
// @route     Post /api/v1/user/bus/:id
// @access    Private
exports.useBus = asyncHandler(async (req, res, next) => {
    // Check for already used ticket
    const user = await User.findOne({ userId: req.params.id });
    if (user != null) {
        if (user.bus === true) {
            user.bus = false;
            user.save();
            res.status(201).json({
                success: true,
                data: { Bus: user.bus },
            });
        } else {
            next(new ErrorResponse('Bus Ticket already used', 400));
        }
    } else {
        next(new ErrorResponse(`User ${req.body.userId} not found`, 404));
    }
});

exports.returnBus = asyncHandler(async (req, res, next) => {
    // Check for already used ticket
    const user = await User.findOne({ userId: req.params.id });
    if (user != null) {
        if (user.returnBus === true) {
            user.returnBus = false;
            user.save();
            res.status(201).json({
                success: true,
                data: { RetrunBus: user.returnBus },
            });
        } else {
            next(new ErrorResponse('Ticket already used', 400));
        }
    } else {
        next(new ErrorResponse(`User ${req.body.userId} not found`, 404));
    }
});

exports.entry = asyncHandler(async (req, res, next) => {
    // Check for already used ticket
    const user = await User.findOne({ userId: req.params.id });
    if (user != null) {
        if (user.entry === true) {
            user.entry = false;
            user.save();
            res.status(201).json({
                success: true,
                data: { Entry: user.entry },
            });
        } else {
            next(new ErrorResponse('Ticket already used', 400));
        }
    } else {
        next(new ErrorResponse(`User ${req.body.userId} not found`, 404));
    }
});

exports.launch = asyncHandler(async (req, res, next) => {
    // Check for already used ticket
    const user = await User.findOne({ userId: req.params.id });
    if (user != null) {
        if (user.launch === true) {
            user.launch = false;
            user.save();
            res.status(201).json({
                success: true,
                data: { Launch: user.launch },
            });
        } else {
            next(new ErrorResponse('Ticket already used', 400));
        }
    } else {
        next(new ErrorResponse(`User ${req.body.userId} not found`, 404));
    }
});

exports.dinner = asyncHandler(async (req, res, next) => {
    // Check for already used ticket
    const user = await User.findOne({ userId: req.params.id });
    if (user != null) {
        if (user.dinner === true) {
            user.dinner = false;
            user.save();
            res.status(201).json({
                success: true,
                data: { Dinner: user.dinner },
            });
        } else {
            next(new ErrorResponse('Ticket already used', 400));
        }
    } else {
        next(new ErrorResponse(`User ${req.body.userId} not found`, 404));
    }
});
