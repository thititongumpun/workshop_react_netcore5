FROM node:12.16.1-alpine as build
WORKDIR /app

COPY package.json ./

RUN yarn install
COPY ./ ./
CMD ["yarn", "start"]
