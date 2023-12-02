FROM node:20 as builder

WORKDIR /build

COPY package.json .
COPY yarn.lock .
COPY .yarn .yarn
COPY .yarnrc.yml .
#COPY .pnp.cjs .
#COPY .pnp.loader.mjs .
RUN yarn install

COPY . ./
RUN yarn build


FROM node:20-alpine

WORKDIR /app
COPY --from=builder /build/.next .next

COPY --from=builder /build/package.json .
COPY --from=builder /build/yarn.lock .
COPY --from=builder /build/.yarn .yarn
COPY --from=builder /build/.yarnrc.yml .
#COPY --from=builder /build/.pnp.cjs .
#COPY --from=builder /build/.pnp.loader.mjs .


ENTRYPOINT ["yarn", "start"]
