import typescriptEslint from "@typescript-eslint/eslint-plugin"
import prettier from "eslint-plugin-prettier"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ["**/node_modules", "dist/*.js", "**/todo.md", "**/generated/"],
  },
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "all",
          semi: false,
        },
      ],

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "arrow-parens": 0,
      "generator-star-spacing": 0,
      "no-debugger": 0,
      "no-multi-spaces": 0,
      curly: 0,
      "no-multiple-empty-lines": 0,
      "padded-blocks": 0,
      "key-spacing": 0,
      "object-property-newline": 0,
      "spaced-comment": 0,
      "no-useless-escape": 0,
      "brace-style": 0,
      semi: [2, "never"],
      "block-spacing": [2, "always"],
    },
  },
]
