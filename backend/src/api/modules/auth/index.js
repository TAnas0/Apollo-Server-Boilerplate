// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// Types and resolvers imports
import authType from "@/api/modules/auth/types/auth.graphql"
import { tradeTokenForUser } from "./utils"
import { authResolvers } from "@/api/modules/auth/resolvers/auth"

const typeDefs = mergeTypes([authType])
const resolvers = mergeResolvers([authResolvers])

const HEADER_NAME = "authorization"

export const AuthModule = new GraphQLModule({
  name: "auth",
  typeDefs,
  resolvers,
  context: ({ req }) => {
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
