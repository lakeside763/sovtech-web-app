FROM node:16.16-alpine as build

WORKDIR /www

COPY package.json package.json
COPY yarn.lock yarn.lock

# RUN npm ci --production
RUN yarn install

COPY . .

RUN yarn build

# NGINX Web Server
FROM nginx:1.12-alpine
COPY --from=build /www/build /usr/share/nginx/html

EXPOSE 80

# CMD ["yarn", "start"]
CMD [ "nginx", "-g", "daemon off;" ]


