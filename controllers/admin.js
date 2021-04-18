const ErrorResponse = require('../utils/error_response');
const asyncHandler = require('../middleware/async_middleware');
const Admin = require('../models/admin');

// @desc      Add Admin by Admin
// @route     Post /api/v1/admin
// @access    Private
exports.addAdmin = asyncHandler(async (req, res, next) => {
    // Check for already registered
    const alreadyRegister = await Admin.findOne({ email: req.body.email });
    if (alreadyRegister === null) {
        const admin = await Admin.create(req.body);
        const token = await admin.getSignedJwtToken();
        res.status(201).json({
            success: true,
            token,
        });
    } else {
        next(new ErrorResponse(`User ${req.body.email} already Registered`, 400));
    }
});
// @desc      Login Admin
// @route     POST /api/v1/admin/login
// @access    Public
exports.adminLogin = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    // Validate emil & password
    if (!email || !password) {
        next(new ErrorResponse('Please provide an email and password', 400));
    }

    // Check for user
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
        next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matches
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
        next(new ErrorResponse('Invalid credentials', 401));
    }
    const token = await admin.getSignedJwtToken();
    res.status(201).json({
        success: true,
        token,
    });
});
