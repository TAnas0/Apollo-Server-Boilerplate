// NPM
import { GraphQLModule } from "@graphql-modules/core"

// Importing the GraphQL modules
import { UserModule } from "@/api/modules/user"
import { PostModule } from "@/api/modules/post"
import { AuthModule } from "@/api/modules/auth"

// Importing guards
import { authenticated } from "@/api/modules/auth/utils"
// import validateRole from "@/api/modules/auth/utils"

export const appModule = new GraphQLModule({
  imports: () => [UserModule, PostModule, AuthModule],
  resolversComposition: {
    "Query.me": [authenticated()],
  },
})
