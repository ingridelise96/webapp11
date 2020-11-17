import { createUser, findUser } from '../services/user.js';
import ErrorHandler from '../utils/errorHandler.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
    const user = await createUser(req.body);
    if (!user) {
        return next(new ErrorHandler('User not created', 400));
    }
    res.status(201).json(user);
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const user = await findUser(req.params.userEmail);
    if (!user) {
        return next(new ErrorHandler('User not found', 404));
    }
    res.status(200).json(user);
});
