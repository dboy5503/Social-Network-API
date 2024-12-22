import Thought from '../models/Thought.js';
// Get all thoughts
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Get a single thought by ID
export const getSingleThought = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        res.status(200).json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Create a new thought
export const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        res.status(201).json(newThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Update a thought by ID
export const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        res.status(200).json(updatedThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Delete a thought by ID
export const deleteThought = async (req, res) => {
    try {
        await Thought.findByIdAndDelete(req.params.thoughtId);
        res.status(200).json({ message: 'Thought deleted' });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Add a reaction to a thought
export const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true });
        res.status(200).json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Remove a reaction from a thought
export const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.body.reactionId } } }, { new: true });
        res.status(200).json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
