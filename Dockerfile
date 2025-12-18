FROM  node:20-alpine AS builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build
FROM nginx:1.25.4-alpine
COPY --from=builder /app/dist/pro-folio/browser /usr/share/nginx/html
EXPOSE 7836
CMD ["nginx", "-g", "daemon off;"]