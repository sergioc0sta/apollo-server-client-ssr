const resolvers = {
  Query: {
    users: (root, context) => context().then((db) => db.collection('users').find().toArray()),
    user: (root, args, context) => context().then((db) => db.collection('users').findOne({_id: args.id})),
  },
};

module.exports = resolvers;
