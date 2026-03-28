'use client'

import { motion } from 'framer-motion'
import { Container } from '@/src/features/layout/components/container'
import { ProjectList } from '@/src/features/projects/components/project-list'
import { useI18n } from '@/src/features/i18n/context'
import type { ProjectFrontmatter } from '@/src/features/projects/types'

interface ProjectsPageClientProps {
  projectsEn: ProjectFrontmatter[]
  projectsTh: ProjectFrontmatter[]
}

export function ProjectsPageClient({
  projectsEn,
  projectsTh,
}: ProjectsPageClientProps) {
  const { locale, t } = useI18n()

  // Select projects based on current locale
  const projects = locale === 'th' ? projectsTh : projectsEn

  return (
    <Container className="py-20 md:py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mb-14 border-b border-border pb-8"
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t.projects.title}
        </h1>
        <p className="mt-2 text-muted-foreground">{t.projects.subtitle}</p>
      </motion.div>

      {/* Project grid */}
      <ProjectList projects={projects} />
    </Container>
  )
}
