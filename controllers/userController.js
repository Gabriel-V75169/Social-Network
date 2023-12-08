const { User } = require('../models');

module.exports = {
    
    async createUser(req, res) {
        try {
        const user = await User.create(req.body);
        res.json(user);
        } catch (err) {
        res.status(500).json(err);
        }
  },
    async getUsers(req, res) {
        try {
        const users = await User.find();
        res.json(users);
        } catch (err) {
        res.status(500).json(err);
        }
  },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id }).select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            res.json(user);
        } catch (err) {
        res.status(500).json(err);
        }
    },
  async deleteUser(req, res) {
        try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
        }
        res.json(user);
        } catch (err) {
        res.status(500).json(err);
    } 
    },
    async addFriend(req, res) {
        try {
            const friend = await User.findByIdAndUpdate({ _id: req.params.id }, { $addToSet: { User: req.body } }, { new: true })

            if (!friend) {
                return res.status(404).json({ message: 'No friend with that ID' });
                }
                res.json(friend);
        } catch (err) {
                res.status(500).json(err); 
            }
    },
    async removeFriend(req, res) {
        try {
            const friend = await User.findByIdAndUpdate({ _id: req.params.id }, { $pull: { User: { id: req.params.id } } }, { new: true })

            if (!friend) {
                return res.status(404).json({ message: 'No friend with that ID' });
                }
                res.json(friend);
        } catch (err) {
                res.status(500).json(err); 
            }
    },
};

