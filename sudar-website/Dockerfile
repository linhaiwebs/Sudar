# Sudar Website - Production Dockerfile
# Multi-stage build for optimized production image

# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build arguments for environment variables (embedded at build time)
ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_SITE_URL=https://rhgj.jp
ARG NEXT_PUBLIC_BRAND_NAME=知恵塾
ARG NEXT_PUBLIC_STUDIO_NAME=Studio
ARG NEXT_PUBLIC_LEARN_NAME=Learn
ARG NEXT_PUBLIC_INTELLIGENCE_NAME=Intelligence
ARG NEXT_PUBLIC_TUTOR_NAME=知恵塾
ARG NEXT_PUBLIC_CTA_URL=https://learn.rhgj.jp
ARG NEXT_PUBLIC_STUDIO_URL=https://learn.rhgj.jp
ARG NEXT_PUBLIC_LP_CTA_URL
ARG NEXT_PUBLIC_LP_TAGLINE=株式投資を、AIと共に学ぶ
ARG NEXT_PUBLIC_LP_SUBTITLE=日本株の基礎から実践まで、AIチューターがあなたのレベルに合わせてアダプティブに指導。
ARG NEXT_PUBLIC_LP_CTA_LABEL=無料で投資学習を始める
ARG NEXT_PUBLIC_LP_CTA_TRUST=クレジットカード不要 • 実際の資金は不要 • 今すぐ始められます
ARG NEXT_PUBLIC_LP_FOOTER_COPY=株式投資を、AIと共に学ぶ
ARG NEXT_PUBLIC_CONTACT_EMAIL=connect@dhanikeshkarunanithi.com
ARG NEXT_PUBLIC_TWITTER_URL=https://twitter.com/sudar
ARG NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/sudar
ARG NEXT_PUBLIC_GITHUB_URL=https://github.com/Dhanikesh-Karunanithi/Sudar
ARG NEXT_PUBLIC_GA_MEASUREMENT_ID

ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_BRAND_NAME=$NEXT_PUBLIC_BRAND_NAME
ENV NEXT_PUBLIC_STUDIO_NAME=$NEXT_PUBLIC_STUDIO_NAME
ENV NEXT_PUBLIC_LEARN_NAME=$NEXT_PUBLIC_LEARN_NAME
ENV NEXT_PUBLIC_INTELLIGENCE_NAME=$NEXT_PUBLIC_INTELLIGENCE_NAME
ENV NEXT_PUBLIC_TUTOR_NAME=$NEXT_PUBLIC_TUTOR_NAME
ENV NEXT_PUBLIC_CTA_URL=$NEXT_PUBLIC_CTA_URL
ENV NEXT_PUBLIC_STUDIO_URL=$NEXT_PUBLIC_STUDIO_URL
ENV NEXT_PUBLIC_LP_CTA_URL=$NEXT_PUBLIC_LP_CTA_URL
ENV NEXT_PUBLIC_LP_TAGLINE=$NEXT_PUBLIC_LP_TAGLINE
ENV NEXT_PUBLIC_LP_SUBTITLE=$NEXT_PUBLIC_LP_SUBTITLE
ENV NEXT_PUBLIC_LP_CTA_LABEL=$NEXT_PUBLIC_LP_CTA_LABEL
ENV NEXT_PUBLIC_LP_CTA_TRUST=$NEXT_PUBLIC_LP_CTA_TRUST
ENV NEXT_PUBLIC_LP_FOOTER_COPY=$NEXT_PUBLIC_LP_FOOTER_COPY
ENV NEXT_PUBLIC_CONTACT_EMAIL=$NEXT_PUBLIC_CONTACT_EMAIL
ENV NEXT_PUBLIC_TWITTER_URL=$NEXT_PUBLIC_TWITTER_URL
ENV NEXT_PUBLIC_LINKEDIN_URL=$NEXT_PUBLIC_LINKEDIN_URL
ENV NEXT_PUBLIC_GITHUB_URL=$NEXT_PUBLIC_GITHUB_URL
ENV NEXT_PUBLIC_GA_MEASUREMENT_ID=$NEXT_PUBLIC_GA_MEASUREMENT_ID

# Build the application
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3002

# Set port
ENV PORT=3002
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3002/ || exit 1

# Start the application using Next.js server
CMD ["npx", "next", "start"]
