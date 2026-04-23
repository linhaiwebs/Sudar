import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageSquare, Building2, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: `${siteConfig.brandName}へのお問い合わせ — エンタープライズ、パートナーシップ、一般のご質問。`,
}

const contactOptions = [
  {
    icon: Mail,
    title: 'メールでお問い合わせ',
    description: '一般的なご質問やフィードバックはメールでお気軽にご連絡ください。',
    action: siteConfig.contactEmail,
    actionLabel: 'メールを送る',
    href: `mailto:${siteConfig.contactEmail}`,
  },
  {
    icon: MessageSquare,
    title: 'GitHub Issues',
    description: 'バグ報告や機能リクエストはGitHubからお願いします。オープンソースコミュニティで対応します。',
    action: 'GitHubリポジトリ',
    actionLabel: 'Issuesを見る',
    href: `${siteConfig.githubUrl}/issues`,
  },
  {
    icon: Building2,
    title: 'エンタープライズ',
    description: '大規模導入、カスタム連携、SLA契約についてのご相談はこちらから。',
    action: siteConfig.contactEmail,
    actionLabel: '営業に連絡',
    href: `mailto:${siteConfig.contactEmail}?subject=Enterprise%20Inquiry`,
  },
]

export default function ContactPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ご質問・ご要望・パートナーシップのご相談など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-6">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{option.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{option.description}</p>
                <div className="flex items-center text-primary dark:text-primary-light font-medium group-hover:gap-2 transition-all">
                  {option.actionLabel}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            よくある質問
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            お問い合わせの前に、<Link href="/pricing" className="text-primary hover:underline">料金ページのFAQ</Link>もご覧ください。
          </p>
        </div>
      </section>
    </div>
  )
}
