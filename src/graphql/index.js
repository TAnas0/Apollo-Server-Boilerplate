// Type imports
import articleType from "./types/article.graphql"

// Resolvers imports
import { articleResolvers } from "./resolvers/articles"

import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// Resolvers imports

export const typeDefs = mergeTypes([articleType])

export const resolvers = mergeResolvers([articleResolvers])
