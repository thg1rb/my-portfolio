'use client'

import { ProjectCard } from './project-card'
import type { ProjectFrontmatter } from '@/src/features/projects/types'

interface ProjectListProps {
  projects: ProjectFrontmatter[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      role="list"
      aria-label="Project list"
    >
      {projects.map((project, index) => (
        <div key={project.slug} role="listitem" className='h-full'>
          <ProjectCard project={project} index={index} />
        </div>
      ))}
    </div>
  )
}
