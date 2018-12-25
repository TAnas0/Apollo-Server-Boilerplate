const { prisma } = require("./generated/prisma-client")

const seedFunction = async () => {
  const users = [
    {
      username: "JKRowling",
      email: "jkrowling@harry.potter",
    },
    {
      username: "billgates",
      email: "billgates@microsoft.com",
    },
  ]
  const posts = [
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: {
        connect: {
          email: "jkrowling@harry.potter",
        },
      },
      comments: {
        create: [
          {
            content: "Harry Potter is dead.",
            author: {
              connect: {
                email: "billgates@microsoft.com",
              },
            },
          },
        ],
      },
    },
    {
      title: "About Windows Vista",
      author: {
        connect: {
          email: "billgates@microsoft.com",
        },
      },
    },
  ]
  for (var i = 0; i < posts.length; i++) {
    const response = await prisma.createUser(users[i])
    console.log("Created User")
    console.log(response)
  }
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
