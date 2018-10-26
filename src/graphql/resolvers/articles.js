const posts = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
]

export const articleResolvers = {
  Query: {
    getPosts: () => posts,
  },
}
