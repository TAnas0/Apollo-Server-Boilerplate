// NPM
import { GraphQLModule } from "@graphql-modules/core"
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas"

// Importing the GraphQL modules
import { CommentModule } from "@/api/modules/comment"
import { ArticleModule } from "@/api/modules/article"

export const appModule = new GraphQLModule({
  imports: () => [ArticleModule, CommentModule],
  // imports: () => [CommentModule, ArticleModule],
})
