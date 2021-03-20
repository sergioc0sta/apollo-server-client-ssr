const { ApolloServer } = require('apollo-server');
const typeDefs = require('../schemas/index');
const resolvers = require('../resolvers/index');

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
