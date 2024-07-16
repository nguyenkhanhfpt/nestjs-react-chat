# Use the official Node.js image.
FROM node:20-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install dependencies.
COPY package*.json ./

RUN npm install

RUN npm install @rollup/rollup-linux-x64-gnu --save-optional

# Copy the source code.
COPY . .

# Expose the port the app runs on.
EXPOSE 5173

# Start the app.
CMD ["npm", "run", "dev"]
