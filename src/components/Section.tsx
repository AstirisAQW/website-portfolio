import type { ReactNode } from 'react'
import type { SectionId } from '../content/sections'

interface SectionProps {
  id: SectionId
  /** Vertical padding differs per section, so each one passes its own. */
  className?: string
  children: ReactNode
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-4xl px-4 font-serif sm:px-6 ${className}`}>
      {children}
    </section>
  )
}
