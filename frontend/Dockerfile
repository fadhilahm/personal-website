# Use Node.js LTS (Long Term Support) version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Set environment variables for hot reloading
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true

# Start the development server
CMD ["npm", "run", "dev"] 
