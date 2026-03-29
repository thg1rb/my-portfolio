import { getAllProjectsStatic } from '@/src/features/projects/data/projects'
import { ProjectsPageClient } from './client'

export default function ProjectsPage() {
  // Fetch all projects for all locales at build time
  const projectsEn = getAllProjectsStatic('en')
  const projectsTh = getAllProjectsStatic('th')

  return <ProjectsPageClient projectsEn={projectsEn} projectsTh={projectsTh} />
}
