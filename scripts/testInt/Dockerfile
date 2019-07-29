FROM node:12-buster
LABEL maintainer="ivan.corrales.solera@gmail.com"
LABEL version="1.0"

WORKDIR /opt/app

RUN mkdir -p /opt/app
COPY package.json .
RUN npm install --quiet
