FROM node:22-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
RUN pnpm install

# Copy application files
COPY . .

# Expose port 3000 for Next.js
EXPOSE 3000

# Start Next.js development server
CMD ["pnpm", "dev"]
