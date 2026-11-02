import type { ReactNode } from 'react'
import { Picture } from './Picture'
import { SubHeading } from './SubHeading'
import { CERTIFICATIONS, EDUCATION, HONORS } from '../content/profile'

function Block({ title, className, children }: { title: string; className: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <SubHeading>{title}</SubHeading>
      <div className={`border-ink border-l-2 pl-4 ${className}`}>{children}</div>
    </div>
  )
}

export function EducationList() {
  return (
    <Block title="Education" className="space-y-1 py-1">
      {EDUCATION.map((item) => (
        <div key={item.id} className="space-y-1">
          <h3 className="text-ink text-base font-bold">{item.degree}</h3>
          <p className="text-soft text-sm italic">{item.description}</p>
        </div>
      ))}
    </Block>
  )
}

export function HonorsList() {
  return (
    <Block title="Honors & Awards" className="space-y-4 py-3">
      {HONORS.map((honor) => (
        <div key={honor.id} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
          <span className="text-ink text-sm font-bold sm:text-base">{honor.title}</span>
          <span className="text-soft font-mono text-xs italic sm:text-sm">{honor.description}</span>
        </div>
      ))}
    </Block>
  )
}

export function CertificationsList() {
  return (
    <Block title="Certifications & Badges" className="space-y-4 py-2">
      {CERTIFICATIONS.map((cert) => (
        <div key={cert.id} className="flex items-center gap-4">
          <div className="bg-tint border-edge flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded border p-1">
            <Picture {...cert.image} className="h-full w-full rounded" imgClassName="object-cover" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-ink text-base font-bold">{cert.title}</h3>
            <p className="text-soft font-mono text-xs">{cert.issuer}</p>
            <p className="text-muted font-mono text-xs">{cert.date}</p>
          </div>
        </div>
      ))}
    </Block>
  )
}
