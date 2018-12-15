import { ApolloServer, gql } from "apollo-server"
import { schema, context } from "@/api/modules"

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

const port = process.env.PORT || 4000

const server = new ApolloServer({
  schema,
  context,
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
