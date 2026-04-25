import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Brain, BarChart3, GraduationCap, Microscope, Lightbulb } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const B = siteConfig.brandName

export const metadata: Metadata = {
  title: '研究基盤',
  description: `${siteConfig.brandName}の研究基盤 — アダプティブラーニングとAIチュータリングの学術的基礎。`,
}

const pillars = [
  {
    icon: Brain,
    title: 'アダプティブラーニング',
    description: '個人の学習軌跡に基づいてコンテンツの順序、難易度、モダリティを動的に調整する技術。VygotskyのZPD（最近接発達帯）理論に基づき、学習者が最も成長できる領域に常に配置します。',
    references: [
      'Vygotsky, L.S. (1978). Mind in Society. Harvard University Press.',
      'Desmarais, M.C., & Baker, R.S.J.d. (2012). A Review of Recent Advances in Adaptive Assessment. Educational Research Review.',
    ],
  },
  {
    icon: GraduationCap,
    title: 'インテリジェントチュータリングシステム',
    description: `AIが学習者の理解度をリアルタイムに推定し、個別化されたフィードバックと指導を提供。${B}のチューターは「縦断的記憶」により、セッションを越えて学習者の文脈を維持します。`,
    references: [
      'Graesser, A.C. et al. (2018). Intelligent Tutoring Systems. Springer.',
      'VanLehn, K. (2011). The Relative Effectiveness of Human Tutoring, Intelligent Tutoring Systems, and Other Tutoring Systems. Educational Psychologist.',
    ],
  },
  {
    icon: BarChart3,
    title: '学習者モデリング',
    description: 'デジタル学習ツインは、行動シグナル（学習時間、リプレイ率、ドロップオフポイント）とパフォーマンスデータから、学習者のスキル状態・好み・最適モダリティを推定します。',
    references: [
      'Corbett, A.T., & Anderson, J.R. (1995). Knowledge Tracing. User Modeling and User-Adapted Interaction.',
      'Piech, C. et al. (2015). Deep Knowledge Tracing. NeurIPS.',
    ],
  },
  {
    icon: Microscope,
    title: '間隔反復と記憶の最適化',
    description: 'Ebbinghausの忘却曲線に基づき、フラッシュカードモダリティでは最適な復習タイミングを計算。記憶の定着率を最大化する間隔で出題します。',
    references: [
      'Ebbinghaus, H. (1885/1964). Memory: A Contribution to Experimental Psychology.',
      'Settles, B., & Meeder, B. (2016). A Trainable Spaced Repetition Model for Language Learning. ACL.',
    ],
  },
  {
    icon: Lightbulb,
    title: 'マルチモーダル学習',
    description: 'Mayerのマルチメディア学習理論に基づき、同一コンテンツを複数の感覚モダリティ（テキスト、映像、音声、インタラクティブ）で提供。学習者の認知スタイルに適応します。',
    references: [
      'Mayer, R.E. (2020). Multimedia Learning (3rd ed.). Cambridge University Press.',
      'Pashler, H. et al. (2008). Learning Styles: Concepts and Evidence. Psychological Science in the Public Interest.',
    ],
  },
  {
    icon: BookOpen,
    title: 'RAGとナレッジグラウンディング',
    description: 'AIチューターの応答は、コースコンテンツに基づくRAG（検索拡張生成）により生成。ハルシネーションを最小化し、学習コンテキストに根ざした正確な回答を提供します。',
    references: [
      'Lewis, P. et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. NeurIPS.',
      'Gao, Y. et al. (2024). Retrieval-Augmented Generation for Large Language Models: A Survey. arXiv.',
    ],
  },
]

export default function ResearchPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/about" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            概要に戻る
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            研究基盤
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {siteConfig.brandName}の設計は、学習科学・認知心理学・AI研究の確立された理論に基づいています。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="border-b border-gray-100 dark:border-gray-800 pb-12 last:border-0">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-serif">
                    {pillar.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      参考文献
                    </h3>
                    <ul className="space-y-1.5">
                      {pillar.references.map((ref, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 italic">
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
