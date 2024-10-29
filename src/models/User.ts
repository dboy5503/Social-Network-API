import { Schema, Types, model, type Document } from 'mongoose';

// User Interface
interface IUser extends Document {
  _id: Types.ObjectId;
  username: { type: string; unique: true; required: true; trimmed: true };
  email: { type: string; unique: true; required: true; };
  thoughts: Types.ObjectId[];
  friends: Types.ObjectId[];
}

// Schema for User using IUser interface
const userSchema = new Schema<IUser>({
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
        ]},
        {
            toJSON: {
                virtuals: true
            }
        }
    );

// Virtual for friendCount
userSchema
    .virtual('friendCount')
    .get(function (this: any) {
        return this.friends.length;
    });

// Create the User model using the UserSchema
const User = model<IUser>('User', userSchema);

export default User;