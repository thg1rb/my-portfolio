import { cn } from '@/src/lib/utils'
import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer'
}

export function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full max-w-3xl px-6 md:px-8',
        className
      )}
    >
      {children}
    </Tag>
  )
}
