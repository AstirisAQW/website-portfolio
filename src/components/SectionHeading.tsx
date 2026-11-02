import type { ReactNode } from 'react'

interface SectionHeadingProps {
  number?: string
  title: string
  subtitle?: string
  action?: ReactNode
}

export function SectionHeading({ number, title, subtitle, action }: SectionHeadingProps) {
  return (
    <div className="section-heading border-line flex flex-col gap-3 border-b pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-1">
        {number && (
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold block">
            {number} //
          </span>
        )}
        <h2 className="text-ink font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-body font-sans text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="flex items-center shrink-0 pt-2 sm:pt-0">{action}</div>}
    </div>
  )
}
