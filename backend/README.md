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
	- Modules
	- Merging typedefs and resolvers? Happens at the module level in its `index.js` file
