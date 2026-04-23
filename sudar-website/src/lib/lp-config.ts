/**
 * Landing page configuration.
 *
 * Conversion URL resolution order:
 *   1. `?cta=<url>` search param  (highest priority — per-campaign override)
 *   2. `NEXT_PUBLIC_LP_CTA_URL` / `NEXT_PUBLIC_CTA_URL` env variables
 *   3. Centralized site config default
 */

import { siteConfig } from './site-config'

export function getLpCtaUrl(searchParams?: { get: (key: string) => string | null }): string {
  // 1. Per-campaign override via ?cta= query param
  if (searchParams) {
    const param = searchParams.get('cta')
    if (param) {
      try {
        new URL(param)
        return param
      } catch {
        // Invalid URL — fall through
      }
    }
  }

  // 2. Centralized site config (which reads env vars with defaults)
  return siteConfig.lpCtaUrl
}
