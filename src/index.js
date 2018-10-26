import { ApolloServer, gql } from "apollo-server"
import { typeDefs, resolvers } from "./graphql"

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
