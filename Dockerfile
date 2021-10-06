FROM node:12.16.1-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
CMD ng serve --host 0.0.0.0 --port $PORT


### STAGE 1: Build ###
# We label our stage as ‘builder’
FROM node as builder
COPY package.json package-lock.json ./
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .
## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run ng build -- --prod --output-path=dist
### STAGE 2: Setup ###
FROM nginx
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]