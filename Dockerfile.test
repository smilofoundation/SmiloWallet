FROM node:8.14.0-alpine

RUN apk add --update --no-cache git python g++ make cairo-dev jpeg-dev giflib-dev bash nasm autoconf automake libtool build-base

WORKDIR /app

COPY . ./
RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]