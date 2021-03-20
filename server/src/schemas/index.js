const { gql } = require('apollo-server');

const typeDefs = gql`
  type Person {
    name: String
    age: Int
  }

  type Query {
    persons: [Person]
  }
`;

module.exports = typeDefs;
