'use client'

import { useEffect, useState, useMemo } from 'react'
import { Copy, Check } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/src/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

// Singleton pattern for Shiki highlighter
let highlighterInstance: any = null
let highlighterPromise: Promise<any> | null = null
let isInitializing = false

function getHighlighter(): Promise<any> {
  if (highlighterInstance) {
    return Promise.resolve(highlighterInstance)
  }

  if (highlighterPromise) {
    return highlighterPromise
  }

  if (!isInitializing) {
    isInitializing = true
    highlighterPromise = import('shiki').then(({ createHighlighter }) => {
      return createHighlighter({
        themes: ['github-light', 'github-dark'],
        langs: [
          'javascript',
          'typescript',
          'jsx',
          'tsx',
          'python',
          'java',
          'go',
          'rust',
          'cpp',
          'c',
          'csharp',
          'php',
          'ruby',
          'swift',
          'kotlin',
          'scala',
          'html',
          'css',
          'scss',
          'json',
          'yaml',
          'toml',
          'markdown',
          'bash',
          'sh',
          'shell',
          'zsh',
          'powershell',
          'sql',
          'graphql',
          'dockerfile',
          'vue',
          'svelte',
          'xml',
        ],
      }).then((highlighter) => {
        highlighterInstance = highlighter
        isInitializing = false
        return highlighter
      })
    })
  }

  return highlighterPromise!
}

export function CodeBlock({ code, language = 'text', className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { theme, systemTheme } = useTheme()

  // Get the actual theme (resolving 'system' to actual value)
  const resolvedTheme = theme === 'system' ? systemTheme : theme
  const isDark = resolvedTheme === 'dark'

  // Cache key for the highlighted code
  const cacheKey = useMemo(() => `${code}-${language}-${isDark ? 'dark' : 'light'}`, [code, language, isDark])

  // Initialize Shiki and highlight code
  useEffect(() => {
    setMounted(true)

    // If we already have the highlighted code for this cache key, skip
    if (highlightedCode && cacheKey) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    getHighlighter().then((highlighter) => {
      if (!highlighter) {
        setIsLoading(false)
        return
      }
      try {
        const html = highlighter.codeToHtml(code, {
          lang: language === 'text' ? 'plaintext' : language,
          theme: isDark ? 'github-dark' : 'github-light',
        })

        // Extract the inner HTML from shiki's output
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        const preElement = doc.querySelector('pre')

        if (preElement) {
          setHighlightedCode(preElement.innerHTML)
        }
      } catch (err) {
        console.error('Failed to highlight code:', err)
        // Fallback to plain code if highlighting fails
        setHighlightedCode('')
      } finally {
        setIsLoading(false)
      }
    })
  }, [code, language, isDark, cacheKey])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={cn(
        'mb-4 overflow-hidden rounded-lg border border-border bg-card',
        className
      )}>
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <span className="text-xs font-medium text-muted-foreground uppercase">
            {language}
          </span>
        </div>
        <pre className="overflow-x-auto p-4">
          <code className="font-mono text-sm text-foreground">{code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className={cn(
      'mb-4 overflow-hidden rounded-lg border border-border bg-card',
      'transition-colors duration-200',
      className
    )}>
      {/* Header with language label and copy button */}
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
        <span className="text-xs font-medium text-muted-foreground uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            'flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium',
            'transition-colors',
            copied
              ? 'bg-green-500/10 text-green-600 dark:text-green-400'
              : 'hover:bg-accent hover:text-accent-foreground text-muted-foreground'
          )}
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre
        className={cn(
          'overflow-x-auto p-4',
          isDark
            ? '[&_.shiki]:bg-transparent [&_.shiki]:text-foreground/90'
            : '[&_.shiki]:bg-transparent [&_.shiki]:text-foreground/90'
        )}
      >
        {isLoading ? (
          <code className="font-mono text-sm text-foreground">{code}</code>
        ) : highlightedCode ? (
          <code
            className="font-mono text-sm"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        ) : (
          <code className="font-mono text-sm text-foreground">{code}</code>
        )}
      </pre>
    </div>
  )
}

// Pre component wrapper for MDX (client component)
export function PreComponent({ code, language, children, ...props }: any) {
  // If code and language are provided (server-side extraction), use CodeBlock component
  if (code && language) {
    return <CodeBlock code={code} language={language} {...props} />
  }

  // Fallback to default pre element (for inline code or when extraction failed)
  return (
    <pre
      className="mb-4 overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-sm"
      {...props}
    >
      {children}
    </pre>
  )
}
