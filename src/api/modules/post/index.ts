// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

const postType = require("@/api/modules/post/types/post.graphql")
import { postResolvers } from "@/api/modules/post/resolvers/posts"

const typeDefs = mergeTypes([postType])

const resolvers = mergeResolvers([postResolvers])

// GraphQLModule instance
export const PostModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
