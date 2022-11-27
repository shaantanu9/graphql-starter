import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import connect from "./config/db.js";

// Import typeDefs and resolvers from types/index.js and resolvers/index.js
import resolvers from "./resolvers/index.js";
import typeDefs from "./types/index.js";

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then((res) => {
  connect()
    .then(() => {
      console.log(`🚀  Server ready at ${res.url}`);
    })
    .catch((err) => {
      console.log(err);
    });
});
