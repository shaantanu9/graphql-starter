import { gql } from "apollo-server-core";
// The GraphQL schema
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    singleUser: [User]
    privateroute: [User]
  }
  type User {
    _id: String
    name: String
    email: String
    password: String
    phone: String
    createdAt: String
    updatedAt: String
  }
  type Mutation {
    register(userNew: UserInput!): User
    deleteUser(id: ID!): User
    login(loginUser: loginInput!): Token
  }
  input UserInput {
    name: String!
    email: String!
    password: String!
    phone: String
  }
  input loginInput {
    email: String!
    password: String!
  }
  type Token {
    token: String
  }
  type PrivateRoute {
    data : [User]
  }
`;

export default typeDefs;
