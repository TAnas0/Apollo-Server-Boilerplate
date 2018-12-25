// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// import articleType from "@/api/modules/article/types/article.graphql"
import userType from "@/api/modules/user/types/user.graphql"
import { userResolvers } from "@/api/modules/user/resolvers/users"

const typeDefs = mergeTypes([userType])

const resolvers = mergeResolvers([userResolvers])

// This should now export a schema using modules

export const UserModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
