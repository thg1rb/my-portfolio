'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ProjectFrontmatter } from '@/src/features/projects/types'
import { TechStack } from './tech-stack'

interface ProjectCardProps {
  project: ProjectFrontmatter
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="h-full"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/20"
        aria-label={`View project: ${project.title}`}
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-muted">
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-sm font-semibold leading-snug text-foreground">
                {project.title}
              </h2>
              <span className="text-xs text-muted-foreground">
                {project.startDate} - {project.endDate}
              </span>
            </div>
            <ArrowUpRight
              className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          <div className="mt-auto pt-4">
            <TechStack stack={project.techStack.slice(0, 4)} />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
