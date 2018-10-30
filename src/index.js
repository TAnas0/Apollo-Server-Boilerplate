import { ApolloServer, gql } from "apollo-server"
import { typeDefs, resolvers } from "./api/schema"

if (process.env.NODE_ENV !== "production") {
  require("dotenv").load()
}

const port = process.env.PORT || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
