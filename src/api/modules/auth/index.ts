import { createModule } from "graphql-modules"
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
// eslint-disable-next-line
const authType = require("@/api/modules/auth/types/auth.graphql")
import { authResolvers } from "@/api/modules/auth/resolvers/auth"
// import { tradeTokenForUser } from "./utils"

const typeDefs = mergeTypeDefs([authType])
const resolvers = mergeResolvers([authResolvers])


export const AuthModule = createModule({
  id: "auth",
  dirname: __dirname,
  typeDefs,
  resolvers,
})
