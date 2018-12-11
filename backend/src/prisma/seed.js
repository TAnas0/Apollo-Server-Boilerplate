const { prisma } = require("./generated/prisma-client")

const seedFunction = async () => {
  const posts = [
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: {
        create: {
          name: "J.K. Rowling",
        },
      },
    },
    {
      title: "Jurassic Park",
      author: {
        create: {
          name: "Michael Crichton",
        },
      },
    },
  ]
  for (var i = 0; i < posts.length; i++) {
    const response = await prisma.createPost(posts[i])
    console.log("\nCreated post")
    console.log(response)
  }

  return "Database populated"
}

seedFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err.toString()))
