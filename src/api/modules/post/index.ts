// NPM
import { createModule } from "graphql-modules"
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
// eslint-disable-next-line
const postType = require("@/api/modules/post/types/post.graphql")
import { postResolvers } from "@/api/modules/post/resolvers/posts"

const typeDefs = mergeTypeDefs([postType])
const resolvers = mergeResolvers([postResolvers])

// GraphQLModule instance
export const PostModule = createModule({
  id: "1",
  typeDefs,
  resolvers,
})
