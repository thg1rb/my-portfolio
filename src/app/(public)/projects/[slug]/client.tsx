'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Code, ExternalLink, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/src/features/layout/components/container'
import { TechStack } from '@/src/features/projects/components/tech-stack'
import { useI18n } from '@/src/features/i18n/context'
import type { ProjectFrontmatter } from '@/src/features/projects/types'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: 'easeOut' },
  }),
}

interface ProjectDetailClientProps {
  frontmatterEn: ProjectFrontmatter
  frontmatterTh: ProjectFrontmatter | null
  contentEn: ReactNode
  contentTh: ReactNode | null
}

export function ProjectDetailClient({
  frontmatterEn,
  frontmatterTh,
  contentEn,
  contentTh,
}: ProjectDetailClientProps) {
  const { locale, t } = useI18n()

  // Use locale-specific data or fallback to English
  const frontmatter =
    locale === 'th' && frontmatterTh ? frontmatterTh : frontmatterEn
  const content = locale === 'th' && contentTh ? contentTh : contentEn

  return (
    <Container className="py-20 md:py-28" as="article">
      {/* Back link */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-10"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          {t.projects.backToProjects}
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
        className="mb-10"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="mb-2 inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {frontmatter.year}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {frontmatter.title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {frontmatter.github && (
              <a
                href={frontmatter.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Code className="h-3.5 w-3.5" aria-hidden />
                {t.projects.viewSource}
              </a>
            )}
            {frontmatter.demo && (
              <a
                href={frontmatter.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-sm text-background transition-opacity hover:opacity-80"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                Demo
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {frontmatter.description}
        </p>
      </motion.header>

      {/* Thumbnail */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.2}
        className="mb-14 overflow-hidden rounded-lg border border-border"
      >
        <div className="relative aspect-[16/9] w-full bg-muted">
          <Image
            src={frontmatter.thumbnail}
            alt={`${frontmatter.title} interface`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </motion.div>

      {/* Content grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_220px]">
        {/* Main content - MDX (rendered on server) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="prose prose-neutral dark:prose-invert max-w-none"
        >
          {content}
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
        >
          <div className="sticky top-20">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t.projects.techStack}
            </h2>
            <TechStack stack={frontmatter.techStack} size="sm" />
          </div>
        </motion.aside>
      </div>
    </Container>
  )
}
