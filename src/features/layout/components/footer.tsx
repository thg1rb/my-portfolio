'use client'

import { Container } from './container'
import { useI18n } from '@/src/features/i18n/context'
import { AtSign } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/src/components/icons'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { name: 'Email', href: 'mailto:hello@bright.dev', icon: AtSign },
]

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border/50 py-12 mt-24">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              bright.xyz
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.footer.built}
            </p>
          </div>

          <nav className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center rounded-full bg-muted/50 p-3 transition-all duration-200 hover:bg-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary-foreground" />
                </a>
              )
            })}
          </nav>

          <div className="text-center sm:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bright
            </p>
            <p className="text-xs text-muted-foreground/70">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
