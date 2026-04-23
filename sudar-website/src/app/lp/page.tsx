'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Brain,
  Sparkles,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Zap,
  Users,
  Clock,
  Check,
} from 'lucide-react'
import { getLpCtaUrl } from '@/lib/lp-config'

/* ─── Data ──────────────────────────────────────────────── */

const valueProps = [
  {
    icon: Brain,
    title: '記憶するAIチューター',
    body: 'セッションを越えてすべての会話を記憶。あなた専属のパーソナルチューター「知恵塾」が寄り添います。',
  },
  {
    icon: Sparkles,
    title: '数分で研修を作成',
    body: 'PDFをアップロードするだけ。AIがコース構造・コンテンツ・クイズを自動生成。専門知識は不要です。',
  },
  {
    icon: BookOpen,
    title: '7つの学習モダリティ',
    body: 'テキスト・ビデオ・オーディオ・マインドマップ・フラッシュカード・ショートフィード・ゲーム。一人ひとりに最適な形式で。',
  },
]

const stats = [
  { value: '10,000+', label: '作成されたコース' },
  { value: '50,000+', label: 'アクティブ学習者' },
  { value: '500+', label: '導入組織' },
]

const benefits = [
  'インストラクショナルデザインの専門知識不要',
  'オープンソース — セルフホスト $0',
  'SCORMエクスポートで既存LMSと互換',
  'リアルタイム分析とスキルギャップ検出',
  'デジタル学習ツインが全員に最適化',
  'モバイルファースト — いつでもどこでも',
]

/* ─── Component ─────────────────────────────────────────── */

export default function LpPage() {
  const [ctaUrl, setCtaUrl] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setCtaUrl(getLpCtaUrl(params))
  }, [])

  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.96])

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────── */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative px-5 pt-14 pb-10"
      >
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative max-w-lg mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 dark:bg-primary/20 px-3.5 py-1.5 text-xs font-semibold text-primary dark:text-primary-light mb-6"
          >
            <Zap className="w-3.5 h-3.5" />
            オープンソース • セルフホスト $0
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl font-bold tracking-tight font-serif mb-3"
          >
            知恵塾
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-gray-500 dark:text-gray-400 font-light italic mb-4"
          >
            学習のためのオペレーティングシステム
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
          >
            <span className="text-primary dark:text-primary-light font-semibold">
              あなたと共に、あなたのために学びます。
            </span>
            <br />
            数分で研修を作成、アダプティブに配信し、すべての学習者に記憶するチューターを。
          </motion.p>

          {/* Primary CTA */}
          <motion.a
            href={ctaUrl}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
          >
            無料で始める
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Subtle trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-3 text-xs text-gray-400 dark:text-gray-500"
          >
            クレジットカード不要 • 今すぐ始められます
          </motion.p>
        </div>
      </motion.section>

      {/* ── Stats ─────────────────────────────────────── */}
      <section className="px-5 py-8">
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
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {s.value}
              </div>
              <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────── */}
      <div className="mx-5">
        <div className="max-w-lg mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      </div>

      {/* ── Value Props ───────────────────────────────── */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto space-y-5">
          {valueProps.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60 p-5"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <v.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">{v.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {v.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────── */}
      <section className="px-5 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 font-serif">
            組織が知恵塾を選ぶ理由
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
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {b}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works (compact) ────────────────────── */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 font-serif">
            3ステップで始める
          </h2>
          <div className="space-y-4">
            {[
              {
                step: '01',
                icon: Clock,
                title: 'アップロード',
                desc: 'PDF・DOCX・URLを投入するだけ',
              },
              {
                step: '02',
                icon: Sparkles,
                title: 'AIが生成',
                desc: 'コース・クイズ・7モダリティを自動作成',
              },
              {
                step: '03',
                icon: Users,
                title: '配信開始',
                desc: 'ワンクリックで学習者にアダプティブ配信',
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-sm font-bold text-primary dark:text-primary-light">
                  {s.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {s.desc}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────── */}
      <section className="px-5 pt-4 pb-28">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">
            学習を変革する準備はできましたか？
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            数千の教育者や組織が知恵塾でパーソナライズされた学習を提供しています。
          </p>
          <a
            href={ctaUrl}
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
          >
            無料で始める
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── Minimal Footer ────────────────────────────── */}
      <footer className="border-t border-gray-100 dark:border-gray-800 px-5 py-6">
        <div className="max-w-lg mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-bold font-serif">知恵塾</span>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center">
            © {new Date().getFullYear()} 知恵塾 — あなたと共に、あなたのために学びます。
          </p>
        </div>
      </footer>

      {/* ── Sticky Bottom CTA Bar (Mobile) ────────────── */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-t border-gray-200/60 dark:border-gray-800/60 px-4 py-3 safe-area-bottom">
        <a
          href={ctaUrl}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform"
        >
          無料で始める
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
