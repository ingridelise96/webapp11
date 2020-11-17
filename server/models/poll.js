import mongoose from 'mongoose';

const { Schema } = mongoose;

const PollSchema = new Schema(
    {
        question_text: {
            type: String,
            required: true,
            trim: true,
            max: ['200', 'Question must be less than 200 characters'],
        },
        answer: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Answer',
                default: 'No Answer',
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Poll', PollSchema);
