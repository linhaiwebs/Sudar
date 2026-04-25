import { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '利用規約',
  description: `${siteConfig.brandName}の利用規約 — サービスのご利用にあたっての条件。`,
}

export default function TermsPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            利用規約
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            最終更新日：2026年4月
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert max-w-none">
          <h2>1. 適用範囲</h2>
          <p>
            本利用規約は、{siteConfig.brandName}（以下「本サービス」）の利用に適用されます。
            本サービスを利用することにより、お客様は本規約に同意したものとみなされます。
          </p>

          <h2>2. 定義</h2>
          <ul>
            <li>「本サービス」— {siteConfig.brandName}プラットフォーム（{siteConfig.studioName}、{siteConfig.learnName}、{siteConfig.intelligenceName}）</li>
            <li>「ユーザー」— 本サービスに登録し、利用する個人または法人</li>
            <li>「コンテンツ」— ユーザーが作成・アップロードしたコース、メディア、データ</li>
          </ul>

          <h2>3. アカウント</h2>
          <p>
            本サービスの利用には、アカウントの作成が必要です。
            登録情報は正確かつ最新のものを保つ必要があります。
            アカウントの不正使用による損害について、当方は責任を負いません。
          </p>

          <h2>4. オープンソースライセンス</h2>
          <p>
            {siteConfig.brandName}はApache License 2.0の下で公開されています。
            セルフホストで利用する場合、ソースコードの改変・再配布が可能です。
            クラウドサービスを利用する場合、本規約が適用されます。
          </p>

          <h2>5. 禁止事項</h2>
          <ul>
            <li>他のユーザーのアカウントへの不正アクセス</li>
            <li>サービスの脆弱性の悪用</li>
            <li>スパム・マルウェアの配信</li>
            <li>著作権・知的財産権の侵害</li>
            <li>法令に違反するコンテンツの作成・配信</li>
          </ul>

          <h2>6. AI生成コンテンツ</h2>
          <p>
            本サービスのAI機能により生成されたコンテンツについて、ユーザーは自身の責任において
            精査・編集する義務を負います。AIの生成内容の正確性・妥当性について、当方は保証しません。
          </p>

          <h2>7. 免責事項</h2>
          <p>
            本サービスは「現状のまま」提供されます。商用性、特定目的への適合性、
            非侵害性についての暗黙の保証を含め、いかなる保証もいたしません。
            サービスの利用により生じた損害について、当方は責任を負いません。
          </p>

          <h2>8. サービスの変更・終了</h2>
          <p>
            当方は、事前の通知なくサービスの内容を変更・終了する場合があります。
            セルフホスト環境については、ユーザー自身が管理・運用を行います。
          </p>

          <h2>9. 準拠法・管轄</h2>
          <p>
            本規約は日本法に準拠し、本規約に関する紛争は日本の裁判所を専属的合意管轄とします。
          </p>

          <h2>10. お問い合わせ</h2>
          <p>
            利用規約に関するお問い合わせは、
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
