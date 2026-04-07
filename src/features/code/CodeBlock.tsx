'use client'

import { useEffect, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/src/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = 'text', className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState('')
  const { theme, systemTheme } = useTheme()

  // Debug: log props
  console.log('CodeBlock received:', {
    codeLength: code?.length || 0,
    language,
    codePreview: code?.substring(0, 50)
  })

  // Get the actual theme (resolving 'system' to actual value)
  const resolvedTheme = theme === 'system' ? systemTheme : theme
  const isDark = resolvedTheme === 'dark'

  // Initialize Shiki and highlight code
  useEffect(() => {
    setMounted(true)
    console.log('CodeBlock: Initializing Shiki for language:', language)
    import('shiki').then(({ createHighlighter }) => {
      createHighlighter({
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
        console.log('CodeBlock: Shiki loaded successfully')
        const html = highlighter.codeToHtml(code, {
          lang: language === 'text' ? 'plaintext' : language,
          theme: isDark ? 'github-dark' : 'github-light',
        })

        console.log('CodeBlock: Generated HTML length:', html.length)

        // Extract the inner HTML from shiki's output
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        const preElement = doc.querySelector('pre')

        if (preElement) {
          setHighlightedCode(preElement.innerHTML)
          console.log('CodeBlock: Set highlighted code')
        } else {
          console.error('CodeBlock: Could not find pre element in Shiki output')
        }
      }).catch((err) => {
        console.error('CodeBlock: Failed to load Shiki:', err)
      })
    })
  }, [code, language, isDark])

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
        {highlightedCode ? (
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
  // Debug: log what props we're receiving
  console.log('PreComponent received:', {
    hasCode: !!code,
    codeLength: code?.length || 0,
    hasLanguage: !!language,
    language,
    hasChildren: !!children,
    codePreview: code?.substring(0, 50)
  })

  // If code and language are provided (server-side extraction), use CodeBlock component
  if (code && language) {
    return <CodeBlock code={code} language={language} {...props} />
  }

  // Fallback to default pre element (for inline code or when extraction failed)
  console.log('PreComponent falling back to default pre element')
  return (
    <pre
      className="mb-4 overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-sm"
      {...props}
    >
      {children}
    </pre>
  )
}
