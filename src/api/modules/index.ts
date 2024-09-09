import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"
import { createApplication } from "graphql-modules"
// import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient()

// Importing the GraphQL modules
import { CommentModule } from "@/api/modules/comment"
import { PostModule } from "@/api/modules/post"
import { AuthModule } from "@/api/modules/auth"

import { postResolvers } from "@/api/modules/post/resolvers/posts"
import { commentResolvers } from "@/api/modules/comment/resolvers/comments"
import { authResolvers } from "@/api/modules/auth/resolvers/auth"
// Importing guards
// import { authenticated } from "@/api/modules/auth/utils"


// eslint-disable-next-line
const postType = require("@/api/modules/post/types/post.graphql")
// eslint-disable-next-line
const commentType = require("@/api/modules/comment/types/comment.graphql")
// eslint-disable-next-line
const authType = require("@/api/modules/auth/types/auth.graphql")

export const application = createApplication({
  modules: [CommentModule, PostModule, AuthModule],
})


export const typeDefs = mergeTypeDefs([postType, commentType, authType])
export const resolvers = mergeResolvers([postResolvers, commentResolvers, authResolvers])
