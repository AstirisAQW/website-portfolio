import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  action?: ReactNode
  tone?: 'light' | 'dark'
}

export function SectionHeading({ title, action, tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={`reveal pb-8 sm:pb-12 border-b flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${
        isDark ? 'border-stage-line' : 'border-line'
      }`}
    >
      <h2
        className={`font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight ${
          isDark ? 'text-stage-ink' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {action && <div className="shrink-0 pt-2 sm:pt-0">{action}</div>}
    </div>
  )
}
