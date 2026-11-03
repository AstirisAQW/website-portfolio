import type { ReactNode } from 'react'
import type { SectionId } from '../content/sections'

interface SectionProps {
  id: SectionId
  className?: string
  wrapperClassName?: string
  children: ReactNode
}

export function Section({ id, className = '', wrapperClassName = '', children }: SectionProps) {
  return (
    <section id={id} className={`relative w-full ${wrapperClassName}`}>
      <div className={`relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 ${className}`}>
        {children}
      </div>
    </section>
  )
}
