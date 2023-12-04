FROM node:20 as builder

WORKDIR /build

COPY .yarn ./.yarn
COPY .yarnrc.yml ./.yarnrc.yml
COPY package.json yarn.lock ./

COPY . ./
RUN yarn install --immutable
RUN yarn build


FROM node:20-alpine

WORKDIR /app


COPY --from=builder /build/.next .next
COPY --from=builder /build/package.json .
COPY --from=builder /build/node_modules ./node_modules

ENTRYPOINT ["yarn", "start"]
