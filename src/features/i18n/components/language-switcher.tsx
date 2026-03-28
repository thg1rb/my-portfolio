'use client'

import { useI18n } from '@/src/features/i18n/context'
import { cn } from '@/src/lib/utils'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      className={cn('flex items-center gap-1 text-xs font-medium', className)}
      role="group"
      aria-label="Language selection"
    >
      <button
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={cn(
          'rounded px-1.5 py-0.5 transition-colors',
          locale === 'en'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        {t.common.en}
      </button>
      <span className="text-border" aria-hidden>
        /
      </span>
      <button
        onClick={() => setLocale('th')}
        aria-pressed={locale === 'th'}
        className={cn(
          'rounded px-1.5 py-0.5 transition-colors font-thai',
          locale === 'th'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        {t.common.th}
      </button>
    </div>
  )
}
