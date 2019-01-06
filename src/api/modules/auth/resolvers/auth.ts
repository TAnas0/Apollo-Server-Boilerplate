async function currentUser(root: any, args: any, context: any, info: any) {
  return context.currentUser
}

export const authResolvers = {
  Query: {
    currentUser,
  },
}
