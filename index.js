import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import connect from "./config/db.js";

await connect();

// Import Models
import "./models/User.js";

// Import typeDefs and resolvers from types/index.js and resolvers/index.js
import resolvers from "./resolvers/index.resolvers.js";
import typeDefs from "./types/index.js";

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    return { token };
  },
});

server.listen().then((res) => {
  console.log(`Server running at ${res.url}`);
});
