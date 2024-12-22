import { Request, Response } from 'express';
import User from '../models/User.js';

// Get all users from the database
export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Get a single user by ID from the database
export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Create a new user in the database
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Update an existing user by ID in the database
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id },
            req.body, { new: true });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Delete a user by ID from the database
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(user);
    } catch (err) {
       res.status(400).json(err);
    }
};

// Add a friend to a user's friend list
export const addFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Remove a friend from a user's friend list
export const deleteFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};
