'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useI18n } from '@/src/features/i18n/context'

const techStack = ['Svelte', 'Laravel', 'Spring Boot', 'Blockchain']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

export function Hero() {
  const { t } = useI18n()

  return (
    <section
      className="py-24 md:py-32 lg:py-40"
      aria-label="Introduction"
    >
      {/* Availability badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1"
      >
        <span
          className="h-2 w-2 rounded-full bg-green-500"
          aria-hidden
        />
        <span className="text-xs text-muted-foreground">
          Open to internships &amp; opportunities
        </span>
      </motion.div>

      {/* Greeting */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
        className="mb-2 text-sm text-muted-foreground"
      >
        {t.hero.greeting}
      </motion.p>

      {/* Name */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.15}
        className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance"
      >
        {t.hero.name}
        <span className="text-highlight">.</span>
      </motion.h1>

      {/* Role + University */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.25}
        className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1"
      >
        <span className="text-lg font-medium text-foreground md:text-xl">
          {t.hero.role}
        </span>
        <span className="text-muted-foreground" aria-hidden>
          —
        </span>
        <span className="text-lg text-muted-foreground md:text-xl">
          {t.hero.university}
        </span>
      </motion.div>

      {/* Intro */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.35}
        className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
      >
        {t.hero.intro}
      </motion.p>

      {/* Tech highlights */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.45}
        className="mt-8"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {t.hero.specializesIn}
        </p>
        <ul className="flex flex-wrap gap-2" role="list">
          {techStack.map((tech) => (
            <li key={tech}>
              <span className="inline-flex items-center rounded border border-border bg-muted px-3 py-1 font-mono text-sm text-foreground">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.55}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          {t.hero.viewProjects}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
        <a
          href="mailto:bright@example.com"
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          {t.hero.contactMe}
        </a>
      </motion.div>
    </section>
  )
}
