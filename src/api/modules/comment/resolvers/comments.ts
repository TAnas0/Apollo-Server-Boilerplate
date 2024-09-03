import { PrismaClient } from "@prisma/client"

const comments = [
  {
    id: 1,
  },
]

async function getCommentsFromDB() {
  const prisma = new PrismaClient()
  // const comments = await prisma.comments.findMany()
  return [0]
}

export const commentResolvers = {
  Query: {
    getComments: () => comments,
    getCommentsFromDB,
  },
}
