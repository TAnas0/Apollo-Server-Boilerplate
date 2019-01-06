import { prisma } from "@/prisma/generated/prisma-client"

const comments = [
  {
    id: 1,
  },
]

async function getCommentsFromDB() {
  const comments = await prisma.comments()
  return comments
}

export const commentResolvers = {
  Query: {
    getComments: () => comments,
    getCommentsFromDB,
  },
}
