FROM node:22.8.0-alpine3.20 AS builder

WORKDIR /usr/app

# See .dockerignore for copied files
COPY . .

RUN npm install --no-package-lock
RUN npm run build:production

FROM node:22.8.0-alpine3.20

WORKDIR /app
COPY --from=Builder /usr/app/dist /app/dist
COPY --from=Builder /usr/app/package.json /app/package.json
RUN npm install --no-package-lock --production
# EXPOSE 4000

CMD ["node", "./dist/main.js"]



