import { Schema, Types, model, type Document } from 'mongoose';

interface IReaction extends Document {
    reactionId: { type: Schema.Types.ObjectId };
    reactionBody: { type: string; required: true; maxLength: 280 },
    username: { type: string; required: true },
    createdAt: { type: Date }
};

interface IThought extends Document {
    _id: Types.ObjectId;
    thoughtText: { type: string; required: true; maxLength: 280 };
    createdAt: { type: Date };
    username: { type: string; required: true };
    reactions: Types.ObjectId[];
};

const reactionSchema = new Schema<IReaction>({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const thoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
});

const Thought = model<IThought>('Thought', thoughtSchema);

export default Thought;