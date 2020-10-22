# -- BASE STAGE --------------------------------

FROM node:14-alpine AS base

ARG NPM_TOKEN
ARG FONTAWESOME_TOKEN

WORKDIR /src

COPY package.json ./
COPY yarn.lock ./
COPY .npmrc ./
RUN yarn install --frozen-lockfile

# -- CHECK STAGE --------------------------------

FROM base AS check

ARG CI
ENV CI $CI

COPY . .
RUN yarn lint
# RUN npm test

# -- BUILD STAGE --------------------------------

FROM base AS build

# Define build arguments & map them to environment variables
ARG NPM_TOKEN
ARG FONTAWESOME_TOKEN

# Build the project and then dispose files not necessary to run the project
# This will make the runtime image as small as possible
COPY . .
RUN yarn compile

# -- RUNTIME STAGE --------------------------------

FROM ghcr.io/bratteng/nginx:mainline

WORKDIR /var/www/html

COPY --chown=nonroot --from=build /src/public /var/www/html/public
COPY --chown=nonroot nginx.conf /etc/nginx/conf.d/default.conf
