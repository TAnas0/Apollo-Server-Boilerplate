import { prisma } from "@/prisma/generated/prisma-client"

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

const comments = [
  {
    id: 1,
  },
]
async function getPostsFromDB() {
  const posts = await prisma.posts()
  return posts
}

async function getCommentsFromDB() {
  const comments = await prisma.comments()
  return comments
}

export const postResolvers = {
  Query: {
    getPosts: () => posts,
    getPostsFromDB,
    getComments: () => comments,
    getCommentsFromDB,
  },
}
