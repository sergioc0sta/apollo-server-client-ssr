const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID,
    email: String,
    name: String,
    age: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

module.exports = typeDefs;
