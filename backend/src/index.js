import { ApolloServer, gql } from "apollo-server"
import { typeDefs, resolvers } from "./api/schema"

if (process.env.NODE_ENV === "production") {
  // require("dotenv").load()
  require("dotenv").config()
  console.log("PROD")
  console.log(process.env.NODE_ENV)
}

if (process.env.NODE_ENV === "development") {
  // require("dotenv").load()
  require("dotenv").config({
    path: ".env.dev",
  })
  console.log("DEV")
  console.log(process.env.NODE_ENV)
}

console.log(process.env.BRO)
console.log(process.env.YO)

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
