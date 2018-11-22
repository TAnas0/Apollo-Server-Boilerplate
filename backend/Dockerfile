FROM node:8.12.0-alpine as Builder

WORKDIR /usr/app

# See .dockerignore for copied files
COPY . .

RUN npm install --no-package-lock
RUN npm run build:production

FROM node:8.12.0-alpine
WORKDIR /app
COPY --from=Builder /usr/app/dist /app/dist
COPY --from=Builder /usr/app/package.json /app/package.json
RUN npm install --no-package-lock --production
# EXPOSE 4000

CMD ["node", "./dist/main.js"]



