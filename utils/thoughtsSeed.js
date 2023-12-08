const { Thought } = require('../models');
const { User } = require('../models');

const seedThoughts = async () => {
  const users = await User.find({});

  const thoughtData = [
    {
      thought: 'wow thats crazy',
      userName: users[0].userName
    },
    {
      thought: 'I never really thought of that',
      userName: users[1].userName
    },
    {
        thought: 'Im running out of things to say',
        userName: users[2].userName
    }
  ];

  const thoughts = await Thought.insertMany(thoughtData);

  await User.findByIdAndUpdate(users[0]._id, { $push: { thoughts: thoughts[0]._id } });
  await User.findByIdAndUpdate(users[1]._id, { $push: { thoughts: thoughts[1]._id } });
  await User.findByIdAndUpdate(users[2]._id, { $push: { thoughts: thoughts[2]._id } });

  return thoughts;
};


module.exports = seedThoughts;