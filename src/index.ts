import { typeDefs, resolvers } from "@/api/modules"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { tradeTokenForUser } from "@/api/modules/auth/utils"

const PORT = process.env.PORT || 4000
const HEADER_NAME = "authorization"

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// TODO add context
// TODO resolvers composition for auth guard, OR just implement authentication
// @ts-expect-error abcde
const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
  context: async ({ req, res }) => {
    let authToken = null
    let currentUser = null

    try {
      authToken = req.headers[HEADER_NAME]
      if (authToken) {
        currentUser = tradeTokenForUser(authToken)
        console.log("currentUser")
        console.log(currentUser)
      }
    } catch (e) {
      console.warn(`Unable to authenticate using ${authToken}`)
    }

    return {
      authToken,
      currentUser,
    }
  },
})

console.log(`🚀  Server ready at: ${url}`)
