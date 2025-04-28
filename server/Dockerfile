# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app/server

# Copy package.json and package-lock.json (if available) from the server directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend application code
COPY . .

# Copy the root .env file for environment variables
# Note: This assumes the .env file exists in the build context root (where docker-compose is run)
COPY ../.env ./.env

# Expose the port the app runs on (using the default from server.js if not set in .env)
# Defaulting to 5001 as per server.js
EXPOSE 5001

# Command to run the application
CMD ["npm", "start"]