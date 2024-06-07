# base image
FROM node:18-alpine as build

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0  --poll 500
EXPOSE 4201:4200
