FROM node:lts as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=prod --omit=dev
COPY . ./
CMD npm run build
FROM nginx:1.19.3
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

