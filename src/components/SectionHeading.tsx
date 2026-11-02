import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  action?: ReactNode
}

export function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="border-line flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-ink text-2xl font-bold sm:text-3xl">{title}</h2>
      {action && <div className="flex items-center">{action}</div>}
    </div>
  )
}