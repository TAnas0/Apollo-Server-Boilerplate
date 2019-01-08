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
async function getPostsFromDB(root: any, args: any, { prisma }: {prisma: any}, info: any) {
	console.log(prisma)
  const posts = await prisma.posts()
  return posts
}

export const postResolvers = {
  Query: {
    getPosts: () => posts,
    getPostsFromDB,
  },
}
