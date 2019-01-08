// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

import { prisma } from "@/prisma/generated/prisma-client"

const postType = require("@/api/modules/post/types/post.graphql")
import { postResolvers } from "@/api/modules/post/resolvers/posts"

const typeDefs = mergeTypes([postType])

const resolvers = mergeResolvers([postResolvers])

// GraphQLModule instance
export const PostModule = new GraphQLModule({
  typeDefs,
  resolvers,
	// Adding prisma client to the context
	// context: (request, currentContext, moduleSessionInfo) => {
	// 	return {
	// 		prisma
	// 	}
	// }
})
