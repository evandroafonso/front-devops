# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM node:16-alpine as build
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# RUN npm run build
# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx
# COPY --from=build /app/build/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# # COPY --from=build /etc/nginx/conf.d/default.conf

# Fetching the latest node image on alpine linux
FROM node:alpine AS build

# Declaring env
ENV NODE_ENV build

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start

FROM nginx
COPY --from=build /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build /etc/nginx/conf.d/default.conf

# Fetching the latest node image on alpine linux
FROM node:alpine AS build