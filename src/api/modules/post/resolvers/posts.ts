import { PrismaClient } from "@prisma/client"

const posts = [
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    id: 2,
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
]

// async function getPostsFromDB(root: any, args: any, context: any, info: any) {
async function getPostsFromDB(root: any, args: any, ctx: any, info: any) {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()

  return posts
}

export const postResolvers = {
  Query: {
    getPosts: () => posts,
    getPostsFromDB,
  },
}
