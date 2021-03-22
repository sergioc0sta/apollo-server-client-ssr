const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    name: String
    age: Int
  }

  type Query {
    users: [User]
    user(_id: ID!): User
  }
`;

module.exports = typeDefs;
