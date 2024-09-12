FROM node:22.8.0-alpine3.20 AS builder

WORKDIR /usr/app

COPY . .

RUN npm install
RUN npm run build

FROM node:22.8.0-alpine3.20

WORKDIR /app
COPY --from=builder /usr/app/dist /app/dist
COPY --from=builder /usr/app/package.json /app/package.json
COPY --from=builder /usr/app/src/prisma/schema.prisma /app/src/prisma/schema.prisma
RUN npm install


CMD ["node", "./dist/main.js"]
