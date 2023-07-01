FROM node:16.17.1 as builder
ENV NODE_ENV build
USER root
WORKDIR /usr/src/app
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY . .
RUN yarn
RUN npx @nestjs/cli build
EXPOSE 3000

# ---

FROM node:16-alpine
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --from=builder --chown=node:node /usr/src/app/package*.json ./
COPY --from=builder --chown=node:node /usr/src/app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /usr/src/app/dist/ ./dist/
CMD ["node", "dist/main.js"]
