# Stage 1 - do the build process
FROM node:15.12.0

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 - serve the production environment
FROM nginx:1.19.6-alpine
COPY --from=0 /dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]