import type { Metadata, Viewport } from 'next'
import { siteConfig } from '@/lib/site-config'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1E293B',
}

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — 株式投資を、AIと共に学ぶ`,
  description:
    'AI搭載の株式教育プラットフォーム。日本株の基礎から実践まで、アダプティブラーニングで身につける。リスクゼロのシミュレーション付き。',
  openGraph: {
    title: `${siteConfig.brandName} — 株式投資を、AIと共に学ぶ`,
    description:
      'AI搭載の株式教育プラットフォーム。日本株の基礎から実践まで、アダプティブラーニングで身につける。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function LpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-finance-navy text-white">
      {children}
    </div>
  )
}
