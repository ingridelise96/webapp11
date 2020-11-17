import User from '../models/user.js';

export const findUser = async (userEmail) =>
    User.find({ email: userEmail }, function (err, docs) {
        if (err) {
            return err;
        }
        return docs;
    });

export const createUser = async (data) => User.create(data);
