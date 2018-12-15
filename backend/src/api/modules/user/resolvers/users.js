import { prisma } from "@/prisma/generated/prisma-client"

const users = [
  {
    id: 1,
  },
  {
    id: 2,
  },
]

async function getUsersFromDB() {
  const users = await prisma.users()
  return users
}

export const userResolvers = {
  Query: {
    getCurrentUser: () => [users[0]],
    getUsersFromDB,
  },
}
