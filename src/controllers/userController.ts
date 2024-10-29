import { Request, Response } from 'express';
import User from '../models/User';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
    };

export const getUserbyId = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
    };

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
    };

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id });
