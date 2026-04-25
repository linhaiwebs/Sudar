/**
 * Sudar Website — Centralized site configuration.
 *
 * All configurable values are read from NEXT_PUBLIC_* environment variables
 * with sensible defaults (Japanese). This ensures zero hard-coded strings
 * and full customisability per deployment.
 *
 * Priority: env variable → default
 */

export const siteConfig = {
  /* ── Core ─────────────────────────────────────────────── */

  /** Base URL of this website (no trailing slash) */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rhgj.jp',

  /** Display name of the product */
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || '知恵塾',

  /** Sub-brand names (Studio / Learn / Intelligence) */
  studioName: process.env.NEXT_PUBLIC_STUDIO_NAME || 'Studio',
  learnName: process.env.NEXT_PUBLIC_LEARN_NAME || 'Learn',
  intelligenceName: process.env.NEXT_PUBLIC_INTELLIGENCE_NAME || 'Intelligence',

  /** Primary CTA destination (e.g. sign-up / learn app) */
  ctaUrl: process.env.NEXT_PUBLIC_CTA_URL || 'https://learn.rhgj.jp',

  /** Studio URL (for feature pages) */
  studioUrl: process.env.NEXT_PUBLIC_STUDIO_URL || 'https://learn.rhgj.jp',

  /** Contact email */
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'connect@dhanikeshkarunanithi.com',

  /** Social links */
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/sudar',
  linkedInUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/sudar',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/Dhanikesh-Karunanithi/Sudar',

  /** Landing-page CTA URL (defaults to the same as ctaUrl) */
  lpCtaUrl: process.env.NEXT_PUBLIC_LP_CTA_URL || process.env.NEXT_PUBLIC_CTA_URL || 'https://learn.rhgj.jp',

  /** Google Analytics Measurement ID (e.g. G-XXXXXXXXXX) */
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',

  /* ── Japanese locale (default) ────────────────────────── */

  /** HTML lang attribute */
  lang: 'ja',

  /** Composed display names: "{brand} {sub}" */
  get studioFullName() { return `${this.brandName} ${this.studioName}` },
  get learnFullName() { return `${this.brandName} ${this.learnName}` },
  get intelligenceFullName() { return `${this.brandName} ${this.intelligenceName}` },

  /** AI Tutor display name */
  tutorName: process.env.NEXT_PUBLIC_TUTOR_NAME || '知恵塾',

  /** Landing page tagline */
  lpTagline: process.env.NEXT_PUBLIC_LP_TAGLINE || '株式投資を、AIと共に学ぶ',
  lpSubtitle: process.env.NEXT_PUBLIC_LP_SUBTITLE || '日本株の基礎から実践まで、AIチューターがあなたのレベルに合わせてアダプティブに指導。',
  lpCtaLabel: process.env.NEXT_PUBLIC_LP_CTA_LABEL || '無料で投資学習を始める',
  lpCtaTrust: process.env.NEXT_PUBLIC_LP_CTA_TRUST || 'クレジットカード不要 • 実際の資金は不要 • 今すぐ始められます',
  lpFooterCopy: process.env.NEXT_PUBLIC_LP_FOOTER_COPY || '株式投資を、AIと共に学ぶ',
} as const
