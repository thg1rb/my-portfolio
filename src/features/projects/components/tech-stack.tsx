import { cn } from '@/src/lib/utils'

interface TechStackProps {
  stack: string[]
  className?: string
  size?: 'sm' | 'md'
}

export function TechStack({ stack, className, size = 'sm' }: TechStackProps) {
  return (
    <ul
      className={cn('flex flex-wrap gap-1.5', className)}
      role="list"
      aria-label="Tech stack"
    >
      {stack.map((tech) => (
        <li key={tech}>
          <span
            className={cn(
              'inline-flex items-center rounded border border-border bg-muted font-mono text-muted-foreground',
              size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
            )}
          >
            {tech}
          </span>
        </li>
      ))}
    </ul>
  )
}
