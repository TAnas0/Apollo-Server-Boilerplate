// NPM
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"
const commentType = require("@/api/modules/comment/types/comment.graphql")
import { commentResolvers } from "@/api/modules/comment/resolvers/comments"

const typeDefs = mergeTypes([commentType])
const resolvers = mergeResolvers([commentResolvers])

// GraphQLModule instance
export const CommentModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
