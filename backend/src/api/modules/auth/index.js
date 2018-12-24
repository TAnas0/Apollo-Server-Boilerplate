// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// Types and resolvers imports
import authType from "@/api/modules/auth/types/auth.graphql"
import { authResolvers } from "@/api/modules/auth/resolvers/auth"

const typeDefs = mergeTypes([authType])
const resolvers = mergeResolvers([authResolvers])

// const HEADER_NAME = "authorization"
const users = {
  brucelee: {
    username: "brucelee",
  },
}

// GetUser
function getUser(req) {
  // console.log(req)
  const auth = req.headers["authorization"]
  console.log("getUser")
  console.log(auth)
  console.log(users[auth])
  if (users[auth]) {
    return users[auth]
  } else {
    return null
  }
}

export const AuthModule = new GraphQLModule({
  name: "auth",
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    user: getUser(req.req),
  }),
})
