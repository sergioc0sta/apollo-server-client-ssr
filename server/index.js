const express = require('express');
const server = require('./src/config/server');

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});
