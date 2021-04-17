/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const asyncHandler = require('./async_middleware');
const ErrorResponse = require('../utils/error_response');
const Admin = require('../models/admin');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Set token from Bearer token in header
        // eslint-disable-next-line prefer-destructuring
        token = req.headers.authorization.split(' ')[1];

        // Set token from cookie
    }

    // Make sure token exists
    if (!token) {
        return next(new ErrorResponse('Need authorization to access this route', 401));
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await Admin.findById(decoded.id);

        next();
    } catch (err) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
});
