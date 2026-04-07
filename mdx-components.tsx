import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { PreWrapper } from '@/src/features/code/PreWrapper'
import { cn } from '@/src/lib/utils'

// Custom MDX components for project detail pages
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-xl font-semibold tracking-tight text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-lg font-medium text-foreground">
        {children}
      </h3>
    ),
    // Paragraphs
    p: ({ children }) => (
      <p className="mb-4 text-base leading-relaxed text-foreground/90">
        {children}
      </p>
    ),
    // Lists
    ul: ({ children }) => (
      <ul className="mb-4 list-disc space-y-2 pl-6 marker:text-highlight" role="list">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-6">
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li {...props} className="ml-2 text-foreground text-base leading-relaxed">
        {children}
      </li>
    ),
    // Links
    a: ({ href, children }) => (
      <Link
        href={href || '#'}
        className="text-highlight underline underline-offset-2 transition-opacity hover:opacity-80"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    ),
    // Inline Code
    code: ({ className, children, ...props }: any) => {
      // Check if this is a code block (has language className)
      const isCodeBlock = className?.includes('language-')

      if (isCodeBlock) {
        return <code className={className} {...props}>{children}</code>
      }

      return (
        <code
          className={cn(
            'rounded-md px-1.5 py-0.5 font-mono text-sm',
            'bg-muted/50 text-foreground',
            'border border-border/50',
            'dark:bg-muted/30 dark:border-border/30',
            'shadow-sm'
          )}
          {...props}
        >
          {children}
        </code>
      )
    },
    pre: PreWrapper,
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-l-2 border-highlight pl-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    // Horizontal rule
    hr: () => <hr className="my-8 border-t border-border" />,
    // Images (custom)
    img: ({ src, alt }) => (
      <span className="my-6 block overflow-hidden rounded-lg border border-border">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={450}
          className="w-full object-cover"
        />
      </span>
    ),
    // Strong/Bold
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    // Emphasis/Italic
    em: ({ children }) => (
      <em className="italic text-foreground/90">{children}</em>
    ),
    // Tables
    table: ({ children }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="min-w-full divide-y divide-border">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-muted/50">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-border">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-muted/30 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-sm text-foreground/90">{children}</td>
    ),
    ...components,
  }
}
