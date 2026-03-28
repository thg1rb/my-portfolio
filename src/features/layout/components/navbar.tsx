'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { github } from 'lucide-react/icons'
import { ThemeToggle } from '@/src/features/theme/components/theme-toggle'
import { LanguageSwitcher } from '@/src/features/i18n/components/language-switcher'
import { Container } from './container'
import { useI18n } from '@/src/features/i18n/context'
import { cn } from '@/src/lib/utils'

export function Navbar() {
  const { t } = useI18n()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/projects', label: t.nav.projects },
    { href: '/about', label: t.nav.about },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <nav
          className="flex h-14 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            bright.dev
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-6 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm transition-colors',
                    isActive(link.href)
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-1">
            <LanguageSwitcher className="hidden sm:flex" />
            <div className="mx-1 hidden h-4 w-px bg-border sm:block" aria-hidden />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.common.github}
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <github className="h-4 w-4" aria-hidden />
            </a>
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden />
              ) : (
                <Menu className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <Container>
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col py-4" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block py-2 text-sm transition-colors',
                        isActive(link.href)
                          ? 'text-foreground font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-3 pt-3 border-t border-border">
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
