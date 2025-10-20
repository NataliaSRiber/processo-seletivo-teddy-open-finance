FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml* ./
COPY pnpm-workspace.yaml* ./

COPY apps/web/package*.json ./apps/web/
COPY packages/ui/package*.json ./packages/ui/

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "--filter", "web", "dev", "--host", "0.0.0.0", "--port", "5173"]