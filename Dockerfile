# Use the official Node.js image as the base image
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Use NGINX as the web server to serve the built Angular app
FROM nginx:alpine

# Copy the built Angular app from the builder stage to the NGINX directory
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Expose port 80 to the host machine
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]

