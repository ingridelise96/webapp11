import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Fill in your email'],
            unique: true,
            validate: [validator.isEmail, 'Email not valid'],
        },
        password: {
            type: String,
            required: [true, 'Create a password'],
            minlength: [8, 'Password must consist of at least 8 characters'],
            select: false,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

UserSchema.pre('save', async function (next) {
    this.password = await argon2.hash(this.password);
    next();
});

UserSchema.virtual('answers', {
    ref: 'Answer',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
});

export default mongoose.model('User', UserSchema);
