import { createModule } from "graphql-modules"
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
// eslint-disable-next-line
const commentType = require("@/api/modules/comment/types/comment.graphql")
import { commentResolvers } from "@/api/modules/comment/resolvers/comments"

const typeDefs = mergeTypeDefs([commentType])
const resolvers = mergeResolvers([commentResolvers])

// GraphQLModule instance
export const CommentModule = createModule({
  id: "2",
  typeDefs,
  resolvers,
})
