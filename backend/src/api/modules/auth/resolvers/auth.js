async function me(root, args, context, info) {
  return context.currentUser
}

async function token(root, args, context, info) {
  return context.authToken
}

export const authResolvers = {
  Query: {
    me,
    token,
  },
}
