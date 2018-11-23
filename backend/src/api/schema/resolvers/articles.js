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

export const articleResolvers = {
  Query: {
    getPosts: (obj, args, context, info) => posts,
    getContext: (obj, args, context, info) =>
      context.user.then(response => "SUCCESS").catch(error => error),
  },
}
