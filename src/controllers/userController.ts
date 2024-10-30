import { Request, Response } from 'express';
import User from '../models/User';

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email
        });
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id },
            req.body, { new: true })
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const addFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );

        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const deleteFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};
