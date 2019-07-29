FROM node:12-buster
LABEL maintainer="ivan.corrales.solera@gmail.com"
LABEL version="1.0"

WORKDIR /opt/app
EXPOSE 8080

RUN mkdir -p /opt/app
COPY package.json .
RUN npm install --quiet; \
    npm install nodemon -g --quiet
