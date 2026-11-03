import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  action?: ReactNode
}

export function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="reveal pb-10 sm:pb-12 border-b border-line flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="text-ink font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {action && <div className="shrink-0 pt-2 sm:pt-0">{action}</div>}
    </div>
  )
}
