import Poll from '../models/poll.js';
import Answer from '../models/answer.js';

export const listPolls = async () =>
    Poll.find(function (err, docs) {
        if (err) {
            return err;
        }
        return docs;
    });

export const createPoll = async (data) => Poll.create(data);

export const getPollById = async (id) =>
    Poll.findById(id, function (err, docs) {
        if (err) {
            return err;
        }
        return docs;
    });

export const submitAnswer = async (data) => Answer.create(data);

export const findAnswer = async (data) =>
    Answer.find(
        { answer_text: data.answer_text, user: data.user, poll: data.poll },
        { _id: 1 },
        function (err, docs) {
            if (err) {
                return err;
            }
            return docs;
        }
    );

export const updatePollAnswer = async (pollId, answerData) =>
    Poll.update(
        { _id: pollId },
        { $push: { answer: answerData } },
        {
            new: true,
            runValidators: true,
            useFindAndModify: true,
        }
    );
