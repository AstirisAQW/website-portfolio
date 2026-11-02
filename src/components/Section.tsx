import type { ReactNode } from 'react'
import type { SectionId } from '../content/sections'

interface SectionProps {
  id: SectionId
  className?: string
  children: ReactNode
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}
