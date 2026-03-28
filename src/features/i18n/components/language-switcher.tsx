'use client'

import { useI18n } from '@/src/features/i18n/context'
import { Languages } from 'lucide-react'
import { cn } from '@/src/lib/utils'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n()

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'th' : 'en')}
      aria-label="Switch language"
      className={cn(
        'flex h-8 w-12 items-center justify-center gap-1 rounded-md text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
        className
      )}
    >
      <Languages className="h-4 w-4" aria-hidden />
      <span>{t.common[locale as keyof typeof t.common]}</span>
    </button>
  )
}
