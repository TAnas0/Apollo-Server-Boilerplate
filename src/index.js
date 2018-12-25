import { ApolloServer, gql } from "apollo-server"
import { appModule } from "@/api/modules"

console.log(CONFIG)

const port = process.env.PORT || 4000
const { schema, context } = appModule

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
})

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
