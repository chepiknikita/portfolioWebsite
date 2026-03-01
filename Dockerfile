FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build

FROM node:20-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /app/node_modules/.prisma       ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client
COPY --from=builder /app/node_modules/prisma        ./node_modules/prisma
COPY --from=builder /app/node_modules/tsx           ./node_modules/tsx
COPY --from=builder /app/node_modules/.bin/tsx      ./node_modules/.bin/tsx

COPY --from=builder /app/prisma ./prisma

COPY --from=builder /app/.output ./.output

RUN mkdir -p ./storage

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

RUN chown -R appuser:appgroup /app
USER appuser

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
