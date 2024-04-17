# Use the official Node.js runtime as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock  ./

# Install dependencies
RUN yarn install

# Copy the entire application code to the container
COPY . .
# Set environment variable to 'production'
ENV NODE_ENV=production

# Build the React app for production
RUN yarn run build 

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html
COPY .github/env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

COPY .github/nginx-custom.conf /etc/nginx/conf.d/default.conf
# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]