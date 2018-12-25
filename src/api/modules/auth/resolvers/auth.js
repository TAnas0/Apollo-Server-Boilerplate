async function currentUser(root, args, context, info) {
  return context.currentUser
}

export const authResolvers = {
  Query: {
    currentUser,
  },
}
