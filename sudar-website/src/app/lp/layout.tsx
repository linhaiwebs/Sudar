import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#6366F1',
}

export const metadata: Metadata = {
  title: '知恵塾 — あなたと共に、あなたのために学びます',
  description:
    'AIネイティブな学習OS。数分で研修を作成、アダプティブに配信し、すべての学習者に記憶するチューターを提供します。',
  openGraph: {
    title: '知恵塾 — あなたと共に、あなたのために学びます',
    description:
      'AIネイティブな学習OS。数分で研修を作成、アダプティブに配信し、すべての学習者に記憶するチューターを提供します。',
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
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-finance-navy text-white`}>
        {children}
      </body>
    </html>
  )
}
