'use client'

import { Container } from './container'
import { useI18n } from '@/src/features/i18n/context'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border py-10 mt-24">
      <Container>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">bright.dev</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {t.footer.built}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Bright. {t.footer.rights}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
