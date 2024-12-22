import { Schema, model } from 'mongoose';
// Schema for User using IUser interface
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    toJSON: {
        virtuals: true
    }
});
// Virtual for friendCount
userSchema
    .virtual('friendCount')
    .get(function () {
    return this.friends.length;
});
// Create the User model using the UserSchema
const User = model('User', userSchema);
export default User;
