/**
 * Sudar Website — Centralized site configuration.
 *
 * All configurable values are read from NEXT_PUBLIC_* environment variables
 * with sensible defaults. This ensures zero hard-coded URLs and full
 * customisability per deployment.
 *
 * Priority: env variable → default
 */

export const siteConfig = {
  /** Base URL of this website (no trailing slash) */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rhgj.jp',

  /** Display name of the product */
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || '知恵塾',

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
} as const
