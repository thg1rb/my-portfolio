
import type { Metadata } from 'next'
import { Ubuntu, Kanit, Geist_Mono } from 'next/font/google'
import { Providers } from '@/src/features/theme/providers'
import './globals.css'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const kanit = Kanit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'thai'],
  variable: '--font-kanit',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bright\'s Portfolio',
  description:
    'Portfolio of Bright, a Computer Science student at Kasetsart University specializing in software development.',
  generator: 'v0.app',
  openGraph: {
    title: 'Bright\'s Portfolio',
    description:
      'Portfolio of Bright, a Computer Science student at Kasetsart University.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${kanit.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
