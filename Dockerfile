FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

EXPOSE 80

COPY --from=builder /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]