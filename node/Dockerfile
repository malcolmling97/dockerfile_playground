FROM node:20-bookworm-slim

WORKDIR /app
COPY package*.json ./

# Only prod deps in the final image
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm","start"]
