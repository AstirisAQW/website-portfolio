import type { ReactNode } from 'react'

interface SectionHeadingProps {
  number?: string
  title: string
  subtitle?: string
  action?: ReactNode
}

export function SectionHeading({ number, title, subtitle, action }: SectionHeadingProps) {
  return (
    <div className="reveal pb-10 sm:pb-12 border-b border-white/10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-2">
        {number && (
          <span className="font-mono text-xs text-[var(--accent-primary)] tracking-wider">
            {number}
          </span>
        )}
        <h2 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-body text-sm sm:text-base max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 pt-2 sm:pt-0">{action}</div>}
    </div>
  )
}
