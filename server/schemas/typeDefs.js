const { gql } = require('apollo-server-express');
const typeDefs = gql `
    type Book {
        bookId: ID
        authors: [String]
        desription: String
        title: String
    }

    type Query {
        books: [Book]
    }
`;

module.exports = typeDefs;

//users: [User]

/*type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}*/
