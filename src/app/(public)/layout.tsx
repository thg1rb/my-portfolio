import { Navbar } from '@/src/features/layout/components/navbar'
import { Footer } from '@/src/features/layout/components/footer'
import type { ReactNode } from 'react'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
