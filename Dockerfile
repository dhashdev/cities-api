# Use a minimal Node.js image as a parent image
FROM node:18.0.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the application files to the working directory
COPY . .
# Build the application
RUN npm run build

# Expose the port on which the application is running
EXPOSE 3001

# Define the command to run your application
CMD ["npm", "run", "start:prod"]
