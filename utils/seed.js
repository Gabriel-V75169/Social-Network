const { User, Thought } = require('../models');
const userSeed = require('./userSeed');
const thoughtsSeed = require('./thoughtsSeed');
const db = require('../config/connection');


db.once('open', async () => {

  await User.deleteMany({});
  await Thought.deleteMany({});

  await userSeed();
  await thoughtsSeed();

  console.log('seeded the database');
  process.exit(0);
});