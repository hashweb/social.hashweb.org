# -- BUILD STAGE --------------------------------
FROM node:16.10.0 AS build

WORKDIR /src

# Define build arguments & map them to environment variables
ARG NPM_TOKEN
ARG FONTAWESOME_TOKEN
ENV NEXT_TELEMETRY_DISABLED=1

# Build the project and then dispose files not necessary to run the project
# This will make the runtime image as small as possible
COPY package.json ./
COPY yarn.lock ./
COPY .npmrc ./
RUN yarn install --frozen-lockfile

COPY next-env.d.ts ./
COPY next.config.js ./

RUN npx next telemetry disable > /dev/null

COPY tsconfig.json ./
COPY babel.config.js ./
COPY src ./src/
COPY public ./public/

RUN yarn build
RUN yarn install --production
RUN rm -rf .next/cache

# -- RUNTIME STAGE --------------------------------

FROM gcr.io/distroless/nodejs:16

WORKDIR /app

# copy in our healthcheck binary
COPY --from=ghcr.io/bratteng/healthcheck:latest --chown=nonroot /healthcheck /healthcheck

COPY --from=build /src/package.json /app/package.json
COPY --from=build /src/node_modules /app/node_modules
COPY --from=build /src/.next /app/.next
COPY --from=build /src/public /app/public
COPY --from=build /src/next.config.js /app/next.config.js

# default next.js port
EXPOSE 3000

# healthcheck to report the container status
HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD [ "/healthcheck", "-port", "3000" ]

CMD ["/app/node_modules/.bin/next", "start", "-p", "3000"]
