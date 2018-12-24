/**
 * Exchange a token for a User object
 * todo Use auth0
 * @param {*} token
 */
export function tradeTokenForUser(token) {
  return {
    username: "conan",
  }
}

export const authenticated = () => next => async (
  root,
  args,
  context,
  info,
) => {
  if (!context.currentUser) {
    throw new Error("You are not authenticated!")
  }
  return next(root, args, context, info)
}

/**
 * validateRole guard
 */

export const validateRole = function(next) {
  return function(root, args, context, info) {
    if (context.currentUser.role !== "EDITOR") {
      throw new Error("Unauthorized")
    }
    return next(root, args, context, info)
  }
}
