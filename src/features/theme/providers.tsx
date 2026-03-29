'use client'

import { ThemeProvider } from 'next-themes'
import { I18nProvider } from '@/src/features/i18n/context'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  )
}
