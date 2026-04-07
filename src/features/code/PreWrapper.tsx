import React from 'react'
import { PreComponent } from './CodeBlock'
import { extractCodeFromPre } from './CodeBlockServer'

// Server component wrapper that extracts code and passes to client component
export function PreWrapper({ children, ...props }: any) {
  // Extract code and language on the server
  const { code, language } = extractCodeFromPre(children)

  // Pass to client component
  return <PreComponent code={code} language={language} {...props} />
}
