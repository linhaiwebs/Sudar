import { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: `${siteConfig.brandName}のプライバシーポリシー — お客様の個人情報の取り扱いについて。`,
}

export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            プライバシーポリシー
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            最終更新日：2026年4月
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert max-w-none">
          <h2>1. 情報の収集</h2>
          <p>
            {siteConfig.brandName}は、サービスの提供・改善のため、以下の情報を収集する場合があります。
          </p>
          <ul>
            <li>アカウント作成時の情報（氏名、メールアドレス、組織名）</li>
            <li>学習活動データ（コース進捗、クイズ結果、学習時間）</li>
            <li>AIチューターとの対話履歴（サービス向上のため）</li>
            <li>利用状況の自動収集データ（ブラウザ種別、IPアドレス、アクセスログ）</li>
          </ul>

          <h2>2. 情報の利用目的</h2>
          <p>収集した情報は以下の目的で利用します。</p>
          <ul>
            <li>サービスの提供・運営</li>
            <li>パーソナライズされた学習体験の提供（デジタル学習ツイン）</li>
            <li>AIチューターの応答品質の向上</li>
            <li>お問い合わせ・サポートへの対応</li>
            <li>サービスの改善・新機能の開発</li>
          </ul>

          <h2>3. 情報の第三者提供</h2>
          <p>
            以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
          </p>
          <ul>
            <li>法令に基づく場合</li>
            <li>人の生命・身体の保護に緊急の必要性がある場合</li>
            <li>サービス提供に必要な範囲での委託先への提供（適切な管理義務を課します）</li>
          </ul>

          <h2>4. AIプロバイダーとのデータ共有</h2>
          <p>
            AIチューター機能は、Together AI、OpenAI、Anthropic等のAIプロバイダーを利用しています。
            チューターへの質問内容はこれらのプロバイダーに送信され、応答の生成に利用されます。
            各プロバイダーは独立したプライバシーポリシーに従ってデータを取り扱います。
          </p>

          <h2>5. データの保存とセキュリティ</h2>
          <p>
            個人情報はSupabase（PostgreSQL）に暗号化して保存されます。
            通信はTLS暗号化により保護され、アクセス権限は最小権限の原則に基づいて管理されています。
          </p>

          <h2>6. Cookie の利用</h2>
          <p>
            認証セッションの維持とユーザー体験の向上のため、必須Cookieを使用します。
            分析目的のCookieは、ユーザーの同意がある場合のみ使用します。
          </p>

          <h2>7. お客様の権利</h2>
          <p>お客様は以下の権利を有します。</p>
          <ul>
            <li>保有する個人情報の開示請求</li>
            <li>個人情報の訂正・削除の請求</li>
            <li>データポータビリティの請求</li>
            <li>処理の制限・異議申し立て</li>
          </ul>

          <h2>8. お問い合わせ</h2>
          <p>
            プライバシーに関するお問い合わせは、
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
              {siteConfig.contactEmail}
            </a>
            までご連絡ください。
          </p>
        </div>
      </section>
    </div>
  )
}
