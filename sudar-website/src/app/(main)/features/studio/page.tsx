import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, Cpu, Sparkles, Layers, BarChart3, Globe, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Studio — 機能詳細',
  description: `${siteConfig.brandName} Studioの機能詳細 — AI搭載コース作成ツール。`,
}

const features = [
  {
    icon: FileText,
    title: 'ドキュメントからコース',
    description: 'PDF、DOCX、PPTXをアップロードするか、URLを貼り付けるだけで、AIがコース構造・コンテンツ・評価問題を自動生成します。インストラクショナルデザインの専門知識は不要です。',
    details: ['PDF/DOCX/PPTXアップロード', 'URLからのインポート', 'テキストプロンプト生成', '複数ソースの組み合わせ'],
  },
  {
    icon: Sparkles,
    title: 'AIコース生成',
    description: '数分でプロフェッショナルなコースを構築。AIが学習目標、モジュール構成、コンテンツ、クイズを自動設計します。',
    details: ['学習目標の自動生成', 'モジュール構造設計', 'コンテンツ執筆', '評価問題の自動作成'],
  },
  {
    icon: Layers,
    title: '14のビジュアルテンプレート',
    description: 'あらゆる科目とスタイルに対応するテンプレート。コンテンツを失うことなくテンプレートを変更できます。',
    details: ['モダン＆ミニマル', 'コーポレート', 'アカデミック', 'ダークモード対応'],
  },
  {
    icon: Globe,
    title: 'マルチソースメディア',
    description: 'Google、Pexels、Unsplash、Giphyから直接画像・動画を検索してコースに統合。',
    details: ['Google画像検索', 'Pexels＆Unsplash', 'Giphy GIF', 'カスタムアップロード'],
  },
  {
    icon: CheckCircle,
    title: 'SCORMエクスポート',
    description: 'SCORM 1.2パッケージとしてエクスポート。Moodle、Canvas、Blackboardなど既存のLMSと互換性があります。',
    details: ['SCORM 1.2準拠', '進捗追跡', 'クイズ採点', 'オフライン対応'],
  },
  {
    icon: BarChart3,
    title: '分析ダッシュボード',
    description: '完了率、ドロップオフポイント、スキルギャップをリアルタイムで可視化。データドリブンな意思決定を支援。',
    details: ['完了率追跡', 'ドロップオフ分析', 'チーム進捗', 'スキルギャップヒートマップ'],
  },
]

export default function StudioFeaturesPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            機能一覧に戻る
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-sm font-medium">
              クリエイター向け
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            {siteConfig.brandName} Studio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            数週間ではなく数分でプロフェッショナルなコースを構築。L&DチームのためのAI搭載オーサリングプラットフォーム。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-6">
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
            今すぐコースを作成しましょう
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {siteConfig.brandName} Studioで数分でプロフェッショナルなコースを構築。
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
