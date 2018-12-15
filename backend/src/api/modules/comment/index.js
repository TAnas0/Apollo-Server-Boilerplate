// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// Type imports
// import articleType from "@/api/modules/article/types/article.graphql"
import commentType from "@/api/modules/comment/types/comment.graphql"
// Resolvers imports
import { commentResolvers } from "@/api/modules/comment/resolvers/comments"

// Resolvers imports

const typeDefs = mergeTypes([commentType])

const resolvers = mergeResolvers([commentResolvers])

// This should now export a schema using modules

export const CommentModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
