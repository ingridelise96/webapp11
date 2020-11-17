import {
    listPolls,
    createPoll,
    getPollById,
    submitAnswer,
    updatePollAnswer,
    findAnswer,
} from '../services/poll.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const listAllPolls = catchAsyncErrors(async (req, res, next) => {
    const polls = await listPolls();
    if (!polls) {
        return next(new ErrorHandler('Can not find polls', 404));
    }
    res.status(200).json(polls);
});

export const create = catchAsyncErrors(async (req, res, next) => {
    const poll = await createPoll(req.body);
    if (!poll) {
        return next(new ErrorHandler('Poll not created', 400));
    }
    res.status(201).json(poll);
});

export const submit = catchAsyncErrors(async (req, res, next) => {
    const pollId = await getPollById(req.params.id);
    if (!pollId) {
        return next(
            new ErrorHandler(`Can not find poll with id ${req.params.id}`, 404)
        );
    }
    res.status(200).json(pollId);

    const result = await submitAnswer(req.body[0]);
    if (!result) {
        return next(new ErrorHandler('Answer not submitted', 400));
    }
    res.status(201).json(result);

    const answerFromModel = await findAnswer(req.body[0]);
    if (!answerFromModel) {
        return next(
            new ErrorHandler(`Can not find answer with ${req.body}`, 404)
        );
    }
    res.status(200).json(result);

    const updatePoll = await updatePollAnswer(pollId, answerFromModel);
    if (!updatePoll) {
        return next(new ErrorHandler('Poll not updated', 400));
    }
    res.status(201).json(updatePoll);
});
