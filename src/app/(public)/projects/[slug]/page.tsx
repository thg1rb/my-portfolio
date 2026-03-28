import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import {
  getProjectBySlugStatic,
  getProjectSlugsStatic,
} from '@/src/features/projects/data/projects'
import { useMDXComponents } from '@/mdx-components'
import { ProjectDetailClient } from './client'
import { getMDXContent } from './mdx-loader'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const slugs = getProjectSlugsStatic()
  return slugs.map((slug) => ({ slug }))
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const components = useMDXComponents({})

  // Fetch project metadata from static data
  const frontmatterEn = getProjectBySlugStatic(slug, 'en')
  const frontmatterTh = getProjectBySlugStatic(slug, 'th')

  if (!frontmatterEn) {
    notFound()
  }

  // Load MDX content from files (server-only)
  const contentEnSource = getMDXContent(slug, 'en')
  const contentThSource = getMDXContent(slug, 'th')

  // Pre-render MDX content on the server
  const contentEn = contentEnSource ? (
    <MDXRemote source={contentEnSource} components={components} />
  ) : null
  const contentTh = contentThSource ? (
    <MDXRemote source={contentThSource} components={components} />
  ) : null

  return (
    <ProjectDetailClient
      frontmatterEn={frontmatterEn}
      frontmatterTh={frontmatterTh}
      contentEn={contentEn}
      contentTh={contentTh}
    />
  )
}
