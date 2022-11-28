import MutationData from "./mutation/index.js";
import Query from "./query/index.js";
// All the resolvers
const { user } = Query;
const { createUser } = MutationData;
// Single resolvers
const { getAllUsers, getSingleUser, getUsers } = user;

// Resolvers define the technique for fetching the types in the schema.
const resolvers = {
  Query: {
    users: () => getAllUsers(),
    user: (_, { id }) => getSingleUser(id),
    singleUser: async () => {
      const users = await getUsers();
      return users;
    },
  },
  Mutation: {
    register: (_, { UserInput }) => {
      console.log(UserInput);
      createUser(UserInput);
    },
  },
};

export default resolvers;
