[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## Quick start

1. Install dependencies: `npm install`
2. Launch the Postgres database and Prisma server: `docker-compose up -d`
3. Deploy your models to Prisma and generate the client: `prisma deploy && prisma generate`
4. Run the API for development: `npm run dev`
5. Access your Graphql API at http://localhost:4000

## Features to document

Prisma:

- as ORM
- point to its documentation, video
- state principle of it and use
- seeding the database

Apollo:

- Data sources:
example use case from a public API of REST
example of graphql API

## About modules

The backend is organized into [GraphQL modules](https://graphql-modules.com/)
More information in this [Medium post](https://medium.com/the-guild/graphql-modules-feature-based-graphql-modules-at-scale-2d7b2b0da6da)

Each modules merges its types and resolvers in order to export a `GraphQLModule` instance. These modules are then imported and merged into a single `GraphQLModule` module in the file `src/api/modules/index.js`. This object holds, among others, the `schema` and `context` which are fed to the `ApolloServer` instance in `src/api/index.js`

GraphQL modules offers extensibility of your code base and forces/helps you organize your SDL types by domain/feature rather than by type.

## Branches

This project contains two more branches with additional features compared to the backend:

- `graphql-shield`: authentication implemented using the [GraphQL shield]() package
- `nuxt-frontend`: minimal frontend built using Nuxt with Auth0 authentication configured. Its purpose is to give a working example of the front side of authentication

## Contributing

In order to keep the `graphql-shield` and `nuxt-frontend` branches in sync with the `master` branch, all modifications related to the backend must be implemented first in the `master` branch then merged into the branch in question. Only then can additional modifications of the backend, specific to that branch, be added.

## Todos and roadmap

- NodeJS best practices checklist
- Clean datasources
- Documentation and references