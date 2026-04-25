'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  TrendingUp,
  BarChart3,
  Shield,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Zap,
  Check,
  LineChart,
  Brain,
} from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

/* ─── Data ──────────────────────────────────────────────── */

const ctaUrl = siteConfig.lpCtaUrl

const valueProps = [
  {
    icon: Brain,
    title: 'AIが記憶する投資チューター',
    body: 'セッションを越えてすべての質問と学習履歴を記憶。あなた専属のチューターが日本株の基礎から実践まで寄り添います。',
  },
  {
    icon: LineChart,
    title: 'リアルタイム市場シミュレーション',
    body: '実際の相場データに基づくシミュレーションで、リスクゼロで売買体験を積める。デモトレードで自信を養います。',
  },
  {
    icon: BookOpen,
    title: '7つの学習モダリティ',
    body: 'テキスト・ビデオ・オーディオ・マインドマップ・フラッシュカード・ショートフィード・ゲーム。あなたに最適な形式で学べます。',
  },
]

const stats = [
  { value: '10,000+', label: '作成されたコース' },
  { value: '50,000+', label: 'アクティブ学習者' },
  { value: '500+', label: '導入組織' },
]

const benefits = [
  '投資の専門知識がなくてもAIがサポート',
  'オープンソース — セルフホスト $0',
  'SCORMエクスポートで既存LMSと互換',
  'リアルタイム分析とスキルギャップ検出',
  'デジタル学習ツインが全員に最適化',
  'モバイルファースト — いつでもどこでも学習',
]

const stockTopics = [
  { name: '日本株基礎', tag: '入門' },
  { name: 'テクニカル分析', tag: '中級' },
  { name: 'ファンダメンタルズ', tag: '中級' },
  { name: 'ポートフォリオ構築', tag: '実践' },
  { name: 'リスク管理', tag: '必須' },
  { name: 'IPO・新規公開', tag: '応用' },
  { name: '配当・株主優待', tag: '入門' },
  { name: 'デリバティブ', tag: '上級' },
]

/* ─── Component ─────────────────────────────────────────── */

export default function LpPage() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.97])

  return (
    <div className="relative min-h-screen bg-finance-navy text-white overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────── */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative px-5 pt-12 pb-8"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-72 h-72 rounded-full bg-finance-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-finance-bull/8 blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-lg mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-finance-gold/15 px-3.5 py-1.5 text-xs font-semibold text-finance-gold-light mb-5"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            AI搭載 • 株式教育プラットフォーム
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl font-bold tracking-tight font-serif mb-2"
          >
            {siteConfig.brandName}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xl text-finance-gold-light font-semibold mb-3"
          >
            {siteConfig.lpTagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-sm text-gray-400 leading-relaxed mb-7"
          >
            {siteConfig.lpSubtitle}
            <br />
            <span className="text-finance-gold-light font-medium">
              リスクゼロのシミュレーションで、自信を持って投資を始めよう。
            </span>
          </motion.p>

          {/* Primary CTA */}
          <motion.a
            href={ctaUrl}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-finance-gold to-finance-gold-light px-6 py-4 text-base font-bold text-finance-navy shadow-lg shadow-finance-gold/30 active:scale-[0.98] transition-transform"
          >
            {siteConfig.lpCtaLabel}
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-3 text-[11px] text-gray-500"
          >
            {siteConfig.lpCtaTrust}
          </motion.p>
        </div>
      </motion.section>

      {/* ── Stats ─────────────────────────────────────── */}
      <section className="px-5 py-6">
        <div className="max-w-lg mx-auto grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-finance-gold-light">{s.value}</div>
              <div className="text-[11px] text-gray-500 mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────── */}
      <div className="mx-5">
        <div className="max-w-lg mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* ── Stock Topic Chips ─────────────────────────── */}
      <section className="px-5 py-8">
        <div className="max-w-lg mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-center mb-4 font-serif"
          >
            学べる投資テーマ
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-2">
            {stockTopics.map((t, i) => (
              <motion.span
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-gray-800/60 px-3 py-1.5 text-xs"
              >
                {t.name}
                <span className="text-[10px] font-semibold text-finance-gold">{t.tag}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Props ───────────────────────────────── */}
      <section className="px-5 py-8">
        <div className="max-w-lg mx-auto space-y-4">
          {valueProps.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 rounded-2xl border border-gray-700/50 bg-gray-800/40 p-5"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-finance-gold to-finance-bull flex items-center justify-center">
                <v.icon className="w-5 h-5 text-finance-navy" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────── */}
      <section className="px-5 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-center mb-5 font-serif">
            投資教育に{siteConfig.brandName}を選ぶ理由
          </h2>
          <div className="space-y-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-2.5"
              >
                <Check className="w-4 h-4 text-finance-bull mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────── */}
      <section className="px-5 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-center mb-5 font-serif">
            3ステップで投資を学ぶ
          </h2>
          <div className="space-y-4">
            {[
              {
                step: '01',
                icon: BookOpen,
                title: 'レベル診断',
                desc: 'AIがあなたの投資知識を診断し最適コースを提案',
              },
              {
                step: '02',
                icon: LineChart,
                title: 'シミュレーション実践',
                desc: 'リアルな市場データでリスクゼロの売買体験',
              },
              {
                step: '03',
                icon: Shield,
                title: 'リスク管理を習得',
                desc: 'ポートフォリオ構築・損切りルールを実践的に学ぶ',
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-finance-gold/15 flex items-center justify-center text-sm font-bold text-finance-gold">
                  {s.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="text-xs text-gray-500">{s.desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Indicator Marquee ──────────────────── */}
      <section className="py-6 overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[
            { name: '日経平均', val: '38,721.43', change: '+1.24%', up: true },
            { name: 'TOPIX', val: '2,736.58', change: '+0.87%', up: true },
            { name: 'JASDAQ', val: '3,124.91', change: '-0.31%', up: false },
            { name: '東証REIT', val: '1,893.22', change: '+0.52%', up: true },
            { name: '日経平均', val: '38,721.43', change: '+1.24%', up: true },
            { name: 'TOPIX', val: '2,736.58', change: '+0.87%', up: true },
          ].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs">
              <span className="text-gray-500">{m.name}</span>
              <span className="font-mono font-semibold">{m.val}</span>
              <span className={m.up ? 'text-finance-bull' : 'text-finance-bear'}>
                {m.change}
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────── */}
      <section className="px-5 pt-4 pb-28">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif mb-2">
            投資の学びを、今日から始めよう
          </h2>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            数千の学習者が{siteConfig.brandName}で日本株の投資スキルを身につけています。
          </p>
          <a
            href={ctaUrl}
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-finance-gold to-finance-gold-light px-6 py-4 text-base font-bold text-finance-navy shadow-lg shadow-finance-gold/30 active:scale-[0.98] transition-transform"
          >
            {siteConfig.lpCtaLabel}
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-3 text-[11px] text-gray-500">
            実際の資金は不要 • AIチューターが24時間サポート
          </p>
        </div>
      </section>

      {/* ── Minimal Footer ────────────────────────────── */}
      <footer className="border-t border-gray-800 px-5 py-6">
        <div className="max-w-lg mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-finance-gold to-finance-bull flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-finance-navy" />
            </div>
            <span className="text-sm font-bold font-serif">{siteConfig.brandName}</span>
          </div>
          <p className="text-[11px] text-gray-500 text-center">
            © {new Date().getFullYear()} {siteConfig.brandName} — {siteConfig.lpFooterCopy}
          </p>
        </div>
      </footer>

      {/* ── Sticky Bottom CTA Bar (Mobile) ────────────── */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-finance-navy/90 backdrop-blur-lg border-t border-gray-700/50 px-4 py-3 safe-area-bottom">
        <a
          href={ctaUrl}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-finance-gold to-finance-gold-light px-5 py-3.5 text-sm font-bold text-finance-navy shadow-lg shadow-finance-gold/25 active:scale-[0.98] transition-transform"
        >
          {siteConfig.lpCtaLabel}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
