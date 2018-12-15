// NPM
import { GraphQLModule } from "@graphql-modules/core"

// Importing the GraphQL modules
import { UserModule } from "@/api/modules/user"
import { PostModule } from "@/api/modules/post"

export const appModule = new GraphQLModule({
  imports: () => [UserModule, PostModule],
})
