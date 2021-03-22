const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('./src/config/database');

const typeDefs = require('./src/types/index');
const resolvers = require('./src/resolvers/index');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});
