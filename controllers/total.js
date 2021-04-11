const ErrorResponse = require('../utils/error_response');
const asyncHandler = require('../middleware/async_middleware');
const TotalUser = require('../models/total');

// @desc      Get Total User
// @route     Get /api/v1/total
// @access    Private
exports.getTotalUser = asyncHandler(async (req, res, next) => {
    const doc = await TotalUser.findOne();
    // add to total
    res.status(201).json({
        success: true,
        data: { totalUser: doc.totalUser },
    });
});

// @desc      Add User to total
// @route     Post /api/v1/total
// @access    Private
exports.addTotalUser = asyncHandler(async (req, res, next) => {
    const doc = await TotalUser.findOne();
    // add to total
    doc.totalUser += 1;
    doc.bus += 1;
    doc.returnBus += 1;
    doc.entry += 1;
    doc.launch += 1;
    doc.dinner += 1;
    await doc.save();
});
