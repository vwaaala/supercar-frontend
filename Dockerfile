FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY ./src ./src
COPY ./public ./public
COPY ./babel.config.js .
COPY ./vue.config.js .

ARG VUE_APP_BACKEND_API_HOST
ENV VUE_APP_BACKEND_API_HOST $VUE_APP_BACKEND_API_HOST

RUN yarn build
RUN cp dist/index.html dist/404.html


# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
COPY docker_files/default.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]