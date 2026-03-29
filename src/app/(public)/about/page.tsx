'use client'

import { motion, type Variants } from 'framer-motion'
import { Container } from '@/src/features/layout/components/container'
import { TechStack } from '@/src/features/projects/components/tech-stack'
import { useI18n } from '@/src/features/i18n/context'
import { Mail, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/src/components/icons'

const programmingLanguages = [
  'TypeScript',
  'JavaScript',
  'PHP',
  'Golang',
  'Dart',
  'Java',
  'Python',
  'C',
  'C++',
  'SQL',
  'Solidity',
  'Shell Script',
]

const frameworks = [
  'Next.js',
  'React',
  'Tailwind CSS',
  'ExpressJS',
  'Svelte',
  'Laravel',
  'Gin',
  'Go Fiber',
  'Spring Boot',
  'JavaFX',
  'Flutter',
]

const databases = [
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Firestore',
]

const tools = [
  'Docker',
  'Kubernetes',
  'Git',
  'GitHub',
  'Firebase',
  'Supabase',
  'Figma',
  'Jira',
  'ClickUp',
  'Notion',
]

const contactLinks = {
  github: 'https://github.com/thg1rb',
  linkedin: 'https://www.linkedin.com/in/bowornrat/',
  email: 'mailto:bowornrat.t@hotmail.com',
  resume: 'https://drive.google.com/file/d/1nclWeYKwdHbMCg3QrmgXKL0eeM4vapDt/view?usp=sharing',
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <Container className="py-20 md:py-28">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-16 border-b border-border pb-8"
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t.about.title}
        </h1>
        <p className="mt-2 text-muted-foreground">{t.about.subtitle}</p>
      </motion.div>

      {/* Bio */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
        className="prose-section mb-12"
      >
        <p className="text-base leading-relaxed text-foreground md:text-lg">
          {t.about.intro}
        </p>
      </motion.div>

      {/* Focus */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.2}
        className="mb-12"
      >
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {t.about.focus}
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          {t.about.focusText}
        </p>
      </motion.div>

      {/* Stack */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.3}
        className="mb-12"
      >
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {t.about.stack}
        </h2>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="mb-3 text-sm font-medium text-foreground">
            {t.about.languages}
          </h3>
          <TechStack stack={programmingLanguages} size="md" />
        </div>

        {/* Frameworks */}
        <div className="mb-8">
          <h3 className="mb-3 text-sm font-medium text-foreground">
            {t.about.frameworks}
          </h3>
          <TechStack stack={frameworks} size="md" />
        </div>

        {/* Databases */}
        <div className="mb-8">
          <h3 className="mb-3 text-sm font-medium text-foreground">
            {t.about.databases}
          </h3>
          <TechStack stack={databases} size="md" />
        </div>

        {/* Tools */}
        <div>
          <h3 className="mb-3 text-sm font-medium text-foreground">
            {t.about.tools}
          </h3>
          <TechStack stack={tools} size="md" />
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.4}
        className="rounded-lg border border-border bg-muted/40 p-8"
      >
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          {t.about.contact}
        </h2>
        <p className="mb-6 text-base text-muted-foreground leading-relaxed">
          {t.about.contactText}
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-md border border-border bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <GithubIcon className="h-6 w-6" />
            <span className="text-xs font-medium">{t.about.github}</span>
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-md border border-border bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <LinkedinIcon className="h-6 w-6" />
            <span className="text-xs font-medium">{t.about.linkedin}</span>
          </a>
          <a
            href={contactLinks.email}
            className="flex flex-col items-center gap-2 rounded-md border border-border bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Mail className="h-6 w-6" />
            <span className="text-xs font-medium">{t.about.email}</span>
          </a>
          <a
            href={contactLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-md border border-border bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <FileText className="h-6 w-6" />
            <span className="text-xs font-medium">{t.about.resume}</span>
          </a>
        </div>
      </motion.div>
    </Container>
  )
}
