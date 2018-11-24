import { ApolloServer, gql, AuthenticationError } from "apollo-server"
import { typeDefs, resolvers } from "./api/schema"
const jwt = require("jsonwebtoken")
const jwksClient = require("jwks-rsa")

if (process.env.NODE_ENV === "production") {
  // require("dotenv").load()
  require("dotenv").config()
  console.log("PROD")
  console.log(process.env.NODE_ENV)
}

if (process.env.NODE_ENV === "development") {
  // require("dotenv").load()
  require("dotenv").config({
    path: ".env.dev",
  })
  console.log("DEV")
  console.log(process.env.NODE_ENV)
}

const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
})

function getKey(header, cb) {
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey
    cb(null, signingKey)
  })
}

const options = {
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ["RS256"],
}

const port = process.env.PORT || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || ""
    if (token == "") {
      console.log("Anonymous user")
      const user = "Anonymous"
      return { user }
    } else {
      const user = new Promise((resolve, reject) => {
        jwt.verify(token, getKey, options, (err, decoded) => {
          if (err) {
            return reject(err)
          }
          // resolve(decoded)
          console.log(decoded)
          resolve(decoded.email)
        })
      })

      return { user }
    }
    // !: the getUser method need to be implemented (retrieve user from auth0?)
    // const user = getUser(token)
    // return { user }
  },
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
