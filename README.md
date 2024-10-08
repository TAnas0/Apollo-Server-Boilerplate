[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> Please note that this is **Work In Progress**. Feel free to open issues, contribute or give feedback.

## Requirements:

- Docker
- Docker Compose
- [Prisma CLI](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/) version 1 (`npm install -g prisma1`)
- Node version 16 and NPM version 8

## Quick start

1. Install dependencies: `npm install`
2. Launch the Postgres database and Prisma server: `docker-compose up -d`
3. Deploy your models to Prisma and generate the client: `cd src/prisma && prisma generate && prisma deploy`
4. Run the API for development: `npm run dev`
5. Access the playground of your Graphql API at http://localhost:4000

## Features

- Prisma as an ORM
- GraphQL Modules
- Authentication: using GraphQL Shield or as a GraphQL module

## GraphQL Modules

The backend is organized into [GraphQL modules](https://graphql-modules.com/).

More information in this [Medium post](https://medium.com/the-guild/graphql-modules-feature-based-graphql-modules-at-scale-2d7b2b0da6da)

Each module merges its types and resolvers in order to export a `GraphQLModule` instance. These modules are then imported and merged into a single `GraphQLModule` module in the file `src/api/modules/index.js`. This object holds, among others, the `schema` and `context` which are fed to the `ApolloServer` instance in `src/api/index.js`

GraphQL modules offers extensibility of your code base and forces/helps you organize your SDL types by domain/feature rather than by type.

## Prisma

Make sure the environment variable `DATABASE_URL` is well defined in `.env`, then generate and apply migrations on the database: `npx prisma migrate dev --name init`.

Generate Prisma client from the Schema: `npx prisma generate`. The Prisma client will be available as an NPM package under `node_modules/@prisma/client`.

To seed the database, run `npx prisma db seed`. If you have the environment variable `NODE_ENV` set to `development`, it will fill the database with test data.

## Branches

This project contains two more branches with additional features compared to the backend:

- `graphql-shield`: authentication implemented using the [GraphQL shield]() package
- `nuxt-frontend`: minimal frontend built using Nuxt with Auth0 authentication configured. Its purpose is to give a working example of the front side of authentication

## Contributing

In order to keep the `graphql-shield` and `nuxt-frontend` branches in sync with the `master` branch, all modifications related to the backend must be implemented first in the `master` branch then merged into the branch in question. Only then can additional modifications of the backend, specific to that branch, be added.

Please use the alias `npm run commit` for Commitizen friendly commits.

## Todos and roadmap

[NodeJS best practices checklist](https://github.com/i0natan/nodebestpractices):

- 1.5 Use environment aware, secure and hierarchical config

Using the [node-config] package with Webpack. See [](https://github.com/lorenwest/node-config/wiki/Webpack-Usage)

- Clean datasources
- Documentation and references
- GrahQL CLI scaffolding support
