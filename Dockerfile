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

# ... (partes iniciais de deps e builder continuam iguais)

# Estágio 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# O segredo do standalone está nestas linhas:
COPY --from=builder /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copia o servidor otimizado e os arquivos estáticos
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# EM MODO STANDALONE, NÃO USAMOS NPM START. USAMOS NODE SERVER.JS
CMD ["node", "server.js"]


