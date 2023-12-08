const { Thoughts } = require('../models');

module.exports = {
    async createThought(req, res) {
        try{
            const thought = await Thoughts.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thoughts = await Thoughts.findOne({ _id: req.params.id }).select('-__v');

            if (!thoughts) {
                return res.status(404).json({ message: 'No thoughts with that ID' });
            }
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thoughts.findOneAndDelete({ _id: req.params.id });

            if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        } catch (err) {
        res.status(500).json(err);
    }
    },
    async addReaction(req, res) {
        try {
            const thought = await Thoughts.findByIdAndUpdate({ _id: req.params.id }, { $addToSet: { reactions: req.body } }, { new: true })

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
                }
                res.json(thought);
        } catch (err) {
                res.status(500).json(err); 
            }
    },
    async removeReaction(req, res) {
        try {
            const thought = await Thoughts.findByIdAndUpdate({ _id: req.params.id }, { $pull: { reaction: { id: req.params.id } } }, { new: true })

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
                }
                res.json(thought);
        } catch (err) {
                res.status(500).json(err); 
            }
    },
};