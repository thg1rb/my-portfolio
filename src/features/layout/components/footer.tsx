'use client'

import { github } from 'lucide-react/icons'
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
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.common.github}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <github className="h-4 w-4" aria-hidden />
            </a>
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Bright. {t.footer.rights}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
