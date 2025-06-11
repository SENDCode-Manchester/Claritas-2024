FROM node:20-slim AS base
RUN corepack enable
COPY . /app
WORKDIR /app
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:latest
COPY --from=base /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=base /app/dist /usr/share/nginx/html
RUN rm /usr/share/nginx/html/_redirects
RUN rm /usr/share/nginx/html/50x.html
EXPOSE 80
