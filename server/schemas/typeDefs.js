const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    title: String
    author: String
    description: String
    image: String
    link: String
  }

  type Query {
    books: [Book]
  }
`;
module.exports = typeDefs;