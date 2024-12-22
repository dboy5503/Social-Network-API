import User from '../models/User.js';
// Get all users from the database
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    }
    catch (err) {
        return res.status(400).json(err);
    }
};
// Get a single user by ID from the database
export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(400).json(err);
    }
};
// Create a new user in the database
export const createUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email
        });
        return res.status(201).json(user);
    }
    catch (err) {
        return res.status(400).json(err);
    }
};
// Update an existing user by ID in the database
export const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(400).json(err);
    }
};
// Delete a user by ID from the database
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(400).json(err);
    }
};
// Add a friend to a user's friend list
export const addFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } }, { new: true });
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
// Remove a friend from a user's friend list
export const deleteFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { new: true });
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
