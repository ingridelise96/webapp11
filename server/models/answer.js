import mongoose from 'mongoose';

const { Schema } = mongoose;

const AnswerSchema = new Schema(
    {
        answer_text: {
            type: String,
            required: true,
            trim: true,
            max: ['100', 'Answer must be less than 100 characters'],
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
        poll: {
            type: mongoose.Schema.ObjectId,
            ref: 'Poll',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

AnswerSchema.virtual('polls', {
    ref: 'Poll',
    localField: '_id',
    foreignField: 'answer',
    justOne: false,
});

export default mongoose.model('Answer', AnswerSchema);
