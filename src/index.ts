import { appModule } from "@/api/modules"
const { ApolloServer } = require("apollo-server")
// import { applyMiddleware } from "graphql-middleware"

const port = process.env.PORT || 4000
const { schema, context } = appModule

// const schemaWithMiddlewares = applyMiddleware(schema, authMiddleware)

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
})

server.listen(port).then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`)
})
