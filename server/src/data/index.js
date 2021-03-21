const { MongoClient } = require('mongodb');

const context = () => MongoClient.connect('mongodb://username:password@localhost:27017/graphql', { useNewUrlParser: true }).then((client) => client.db('graphql'));

module.exports = context;
