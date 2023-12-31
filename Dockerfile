# Stage 2: Build Node.js Server
FROM node:20.9.0 as node-server-builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the Node.js server code
COPY . .

# Expose the port on which the server will run
EXPOSE 5050

# Start the server
CMD ["npm", "start"]
