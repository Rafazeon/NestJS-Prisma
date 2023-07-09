FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

COPY .docker/entrypoint.sh /home/node/app/.docker/entrypoint.sh

RUN ["chmod", "+x", "/home/node/app/.docker/entrypoint.sh"]

USER node

WORKDIR /home/node/app
