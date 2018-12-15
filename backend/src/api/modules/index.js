// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// Type imports
import articleType from "@/api/modules/article/types/article.graphql"
import commentType from "@/api/modules/comment/types/comment.graphql"
// Resolvers imports
import { articleResolvers } from "@/api/modules/article/resolvers/articles"

// Resolvers imports

const typeDefs = mergeTypes([articleType, commentType])

const resolvers = mergeResolvers([articleResolvers])

// This should now export a schema using modules

export const { schema, context } = new GraphQLModule({
  typeDefs,
  resolvers,
})
