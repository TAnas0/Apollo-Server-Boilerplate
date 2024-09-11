import { GraphQLArgs } from "graphql"

/**
 * Exchange a token for a User object
 * todo Use auth0
 * @param {*} token
 */
export function tradeTokenForUser(token: string): object {
  return {
    username: "conan",
  }
}

// eslint-disable-next-line
export const authenticated =
  () => (next: Function) => async (root: any, args: any, context: any, info: any) => {
    if (!context.currentUser) {
      throw new Error("You are not authenticated!")
    }
    return next(root, args, context, info)
  }

/**
 * validateRole guard
 */
// eslint-disable-next-line
export const validateRole = function (next: Function) {
  return function (root: any, args: any, context: any, info: any) {
    if (context.currentUser.role !== "EDITOR") {
      throw new Error("Unauthorized")
    }
    return next(root, args, context, info)
  }
}

// import jwt from "express-jwt"
// import { expressJwtSecret } from "jwks-rsa"

// Auth middleware
// const authMiddleware = jwt({
//   secret: expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `${CONFIG.AUTH0_ISSUER}.well-known/jwks.json`,
//   }),
//   audience: CONFIG.auth0.AUTH0_AUDIENCE,
//   issuer: CONFIG.auth0.AUTH0_ISSUER,
//   algorithms: ["RS256"],
// })
