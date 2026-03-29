'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import { type Locale, type Translations, translations } from './config'

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('portfolio-locale') as Locale
    if (stored === 'en' || stored === 'th') {
      setLocaleState(stored)
      applyLocale(stored)
    } else {
      // Default to 'en' and apply it
      applyLocale('en')
    }
  }, [])

  function applyLocale(newLocale: Locale) {
    // Set the lang attribute on html element
    document.documentElement.lang = newLocale
    document.documentElement.setAttribute('lang', newLocale)

    // Apply font class to body
    if (newLocale === 'th') {
      document.body.classList.add('font-thai-mode')
      document.body.style.fontFamily = 'var(--font-kanit), Kanit, ui-sans-serif, sans-serif'
    } else {
      document.body.classList.remove('font-thai-mode')
      document.body.style.fontFamily = 'var(--font-ubuntu), Ubuntu, ui-sans-serif, system-ui, sans-serif'
    }
  }

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale)
    localStorage.setItem('portfolio-locale', newLocale)
    applyLocale(newLocale)
  }

  if (!mounted) {
    return (
      <I18nContext.Provider
        value={{ locale: 'en', setLocale, t: translations['en'] }}
      >
        {children}
      </I18nContext.Provider>
    )
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
