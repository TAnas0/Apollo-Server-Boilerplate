FROM node:8.12.0-alpine as Builder
WORKDIR /usr/app
COPY package.json /usr/app
COPY ./src /usr/app/src
RUN npm install
# RUN npm install webpack-cli webpack
# COPY . .
RUN npm run build:production

FROM node:8.12.0-alpine
WORKDIR /app
COPY --from=Builder /usr/app/dist /app/dist
COPY --from=Builder /usr/app/package.json /app/package.json
RUN npm install --production
# EXPOSE 4000

CMD ["node", "./dist/main.js"]



