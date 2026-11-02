import type { ReactNode } from 'react'

interface SectionHeadingProps {
  number?: string
  title: string
  subtitle?: string
  action?: ReactNode
}

export function SectionHeading({ number, title, subtitle, action }: SectionHeadingProps) {
  return (
    <div className="section-heading border-b border-white/10 pb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-1.5">
        {number && (
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] font-bold block">
            [{number} // SPECIFICATION]
          </span>
        )}
        <h2 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed pt-1">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="flex items-center shrink-0 pt-2 sm:pt-0">{action}</div>}
    </div>
  )
}
