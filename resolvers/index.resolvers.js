import MutationData from "./mutation/index.js";
import Query from "./query/index.js";
// All the resolvers
const { user } = Query;
const { createUser, deleteSingleUser, loginUser } = MutationData;
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
    register: async (_, { userNew }) => {
      const newUser = createUser(userNew);
      return newUser;
    },
    deleteUser: async (_, { id }) => {
      const deletedUser = await deleteSingleUser(id);
      return deletedUser;
    },
    login: async (_, loginData) => {
      const token = await loginUser(loginData.loginUser);
      return token;
    },
  },
};

export default resolvers;
