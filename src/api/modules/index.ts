// NPM
import { GraphQLModule } from "@graphql-modules/core"

import { prisma } from "@/prisma/generated/prisma-client"

// Importing the GraphQL modules
import { CommentModule } from "@/api/modules/comment"
import { PostModule } from "@/api/modules/post"
import { AuthModule } from "@/api/modules/auth"

// Importing guards
import { authenticated } from "@/api/modules/auth/utils"
import { ModuleSessionInfo } from "@graphql-modules/core/dist/module-session-info";
// import validateRole from "@/api/modules/auth/utils"

export const appModule = new GraphQLModule({
  // imports: () => [PostModule, CommentModule, AuthModule],
  imports: () => [PostModule, CommentModule],
  resolversComposition: {
    "Query.me": [authenticated()],
  },
	context: (request, currentContext, ModuleSessionInfo) => {
		return {
			prisma
		}
	}
})
