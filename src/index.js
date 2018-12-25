import { ApolloServer, gql } from "apollo-server"
import { appModule } from "@/api/modules"
import config from "config"

if (process.env.NODE_ENV === "production") {
  // require("dotenv").load()
  console.log(process.env.NODE_ENV)
}

if (process.env.NODE_ENV === "development") {
  console.log(process.env.NODE_ENV)
  console.log(CONFIG)
}

const port = process.env.PORT || 4000
const { schema, context } = appModule

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
