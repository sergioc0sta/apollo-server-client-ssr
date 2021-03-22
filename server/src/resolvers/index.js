/* eslint-disable no-underscore-dangle */
const User = require('../modules/user');

const resolvers = {
  Query: {
    users: () => User.find({}),
    user: (root, args) => User.findOne({ _id: args._id }),
  },
};

module.exports = resolvers;
