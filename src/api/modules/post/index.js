// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// Type imports
import postType from "@/api/modules/post/types/post.graphql"
// import commentType from "@/api/modules/comment/types/comment.graphql"
// Resolvers imports
import { postResolvers } from "@/api/modules/post/resolvers/posts"

// Resolvers imports

const typeDefs = mergeTypes([postType])

const resolvers = mergeResolvers([postResolvers])

// This should now export a schema using modules

export const PostModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
