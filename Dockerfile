FROM node:14-alpine as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
# Run command npm install to install packages
RUN npm install
# copy all the folder contents from local to container
COPY . ./
RUN npm run build


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

