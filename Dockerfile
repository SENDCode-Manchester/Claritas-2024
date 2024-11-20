FROM node:20-slim AS base
RUN corepack enable
COPY . /app
WORKDIR /app
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:latest
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
