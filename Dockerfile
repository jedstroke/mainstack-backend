# Use the official Node.js image as the base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Copy .env file to the working directory
COPY .env ./

# Build TypeScript files (if needed)
# RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Set environment variables from .env file
CMD ["sh", "-c", "source .env && node dist/app.js"]
