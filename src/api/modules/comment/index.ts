// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// import articleType from "@/api/modules/article/types/article.graphql"
const commentType = require("@/api/modules/comment/types/comment.graphql")
import { commentResolvers } from "@/api/modules/comment/resolvers/comments"

const typeDefs = mergeTypes([commentType])

const resolvers = mergeResolvers([commentResolvers])

// GraphQLModule instance
export const CommentModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
