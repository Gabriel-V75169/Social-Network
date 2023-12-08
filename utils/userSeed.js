const { User } = require('../models');

const userData = [
  {
    userName: 'John',
    id: '1'
  },
  {
    userName: 'Sally',
    id: '2'
  },
  {
    userName: 'Gabe',
    id: '3'
  }
];

const seedUsers = () => User.insertMany(userData);

module.exports = seedUsers;