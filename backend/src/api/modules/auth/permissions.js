import { rule, shield, and, or, not } from "graphql-shield"

// Rules
const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  console.log("isAuthenticated")
  console.log(ctx.user)
  return ctx.user !== null
})

// Permissions
export const permissions = shield({
  Query: {
    me: isAuthenticated,
  },
})
