import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, MessageSquare, Users, BookOpen, Cpu, Clock, Smartphone, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Learn — 機能詳細',
  description: `${siteConfig.brandName} Learnの機能詳細 — パーソナライズされたアダプティブラーニング体験。`,
}

const features = [
  {
    icon: MessageSquare,
    title: 'AIチューター「知恵塾」',
    description: 'セッションを越えてすべての会話を記憶するパーソナルチューター。質問に答え、説明を提供し、あなたの学習コンテキストを忘れません。',
    details: ['RAG搭載Q&A', '縦断的記憶', 'プロアクティブなナッジ', '多言語対応'],
  },
  {
    icon: Users,
    title: 'デジタル学習ツイン',
    description: 'あなたと共に進化する学習プロファイル。好み、行動パターン、スキルギャップを追跡し、全てのパーソナライズを駆動します。',
    details: ['モダリティスコア', 'スキルグラフ', '行動シグナル', 'ネクストベストアクション'],
  },
  {
    icon: BookOpen,
    title: '7つの学習モダリティ',
    description: 'テキスト、ビデオ、オーディオ、マインドマップ、フラッシュカード、ショートフィード、ゲーム。あなたに最適な形式で学習できます。',
    details: ['リーディング', 'ビデオ', 'オーディオ/ポッドキャスト', 'マインドマップ'],
  },
  {
    icon: Cpu,
    title: 'アダプティブラーニング',
    description: 'AIがパフォーマンスに基づいて難易度、ペース、コンテンツ推奨をリアルタイムに調整。',
    details: ['難易度キャリブレーション', 'ペース検出', 'つまずき検出', 'スマート推奨'],
  },
  {
    icon: Clock,
    title: '進捗追跡',
    description: '学習ストリーク、達成バッジ、スキル習熟度でモチベーションを維持。',
    details: ['学習ストリーク', '完了証明書', 'スキル習熟度', '時間追跡'],
  },
  {
    icon: Smartphone,
    title: 'モバイルファーストデザイン',
    description: 'どこでも、どんなデバイスでも学習。モバイルで美しく動作するレスポンシブデザイン。',
    details: ['PWAサポート', 'タッチジェスチャー', 'オフラインキャッシュ', '高速パフォーマンス'],
  },
]

export default function LearnFeaturesPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-white to-primary/5 dark:from-accent/10 dark:via-gray-900 dark:to-primary/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            機能一覧に戻る
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light text-sm font-medium">
              学習者向け
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            {siteConfig.brandName} Learn
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            各個人に適応するパーソナライズされた学習体験。AIチューターがすべてを記憶します。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-blue-500 mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            パーソナライズされた学習を始めましょう
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {siteConfig.brandName} Learnであなたに最適な学習体験を。
          </p>
          <a
            href={siteConfig.ctaUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-dark transition-colors"
          >
            無料で始める
          </a>
        </div>
      </section>
    </div>
  )
}
