import React from 'react'

// Helper function to extract code and language from MDX pre/code elements (server-side)
export function extractCodeFromPre(children: React.ReactNode): {
  code: string
  language: string
} {
  let code = ''
  let language = 'text'

  // Helper function to get text content from any React node
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node
    if (typeof node === 'number') return String(node)
    if (Array.isArray(node)) return node.map(getTextContent).join('')
    if (React.isValidElement(node)) {
      const props = node.props as { children?: React.ReactNode }
      return getTextContent(props?.children)
    }
    return ''
  }

  // Helper function to find code element and extract info
  const findCodeElement = (node: React.ReactNode): { code: string; language: string } => {
    if (React.isValidElement(node)) {
      const props = node.props as { children?: React.ReactNode; className?: string }
      const className = props.className || ''

      // Check if this is a code element
      if (node.type === 'code' || (typeof node.type !== 'string' && (node.type as any).name === 'code')) {
        const langMatch = className.match(/language-(\w+)/)
        const lang = langMatch ? langMatch[1] : 'text'
        const codeText = getTextContent(props?.children)
        return { code: codeText, language: lang }
      }

      // Recursively search in children
      if (props?.children) {
        const result = findCodeElement(props.children)
        if (result.code) return result
      }
    }

    if (Array.isArray(node)) {
      for (const item of node) {
        const result = findCodeElement(item)
        if (result.code) return result
      }
    }

    return { code: '', language: 'text' }
  }

  // Try to find code element in children
  const result = findCodeElement(children)

  if (result.code) {
    code = result.code
    language = result.language
  } else {
    // Fallback: try to get text content directly from children
    code = getTextContent(children)
  }

  return { code, language }
}
