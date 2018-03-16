FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /app

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN  npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run server when the container launches 
CMD ["npm", "run", "start-search"]

