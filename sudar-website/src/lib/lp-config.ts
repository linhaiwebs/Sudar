/**
 * Landing page configuration.
 *
 * Conversion URL resolution order:
 *   1. `?cta=<url>` search param  (highest priority — per-campaign override)
 *   2. `NEXT_PUBLIC_LP_CTA_URL` env variable  (deployment-level default)
 *   3. Hard-coded fallback  (https://learn.rhgj.jp)
 */

export const LP_DEFAULT_CTA_URL = 'https://learn.rhgj.jp'

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

  // 2. Environment variable
  const envUrl = process.env.NEXT_PUBLIC_LP_CTA_URL
  if (envUrl) {
    try {
      new URL(envUrl)
      return envUrl
    } catch {
      // Invalid URL — fall through
    }
  }

  // 3. Default
  return LP_DEFAULT_CTA_URL
}
