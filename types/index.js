import { gql } from "apollo-server-core";
// The GraphQL schema
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
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
    register(UserInput: UserInput!): User
  }
  input UserInput {
    name: String
    email: String
    password: String
  }
`;

export default typeDefs;
