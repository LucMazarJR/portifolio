# Estágio 1: Instalar dependências
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

# Estágio 2: Fazer o build do projeto
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# O Next.js precisa desativar a coleta de dados durante o build
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Estágio 3: Runner (Imagem final super leve)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Criar um usuário do sistema para não rodar como root (segurança)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# ... (parte anterior do arquivo igual)

USER nextjs

EXPOSE 3000

# O Next.js usa essa variável para aceitar conexões externas
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]
