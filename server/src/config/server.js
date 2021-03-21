const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../schemas/index');
const resolvers = require('../resolvers/index');
const context = require('../data/index');

const server = new ApolloServer({ typeDefs, rootValue: resolvers, context });

module.exports = server;
