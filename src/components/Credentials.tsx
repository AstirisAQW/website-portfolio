import type { ReactNode } from 'react'
import { Picture } from './Picture'
import { AwardIcon, CheckCircleIcon } from './Icons'
import { CERTIFICATIONS, EDUCATION, HONORS } from '../content/profile'

function CredentialBlock({
  title,
  subtitle,
  children,
  className = '',
}: {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="border-line/70 border-b pb-2 flex items-baseline justify-between">
        <h3 className="text-ink font-display text-xl sm:text-2xl font-bold tracking-tight">{title}</h3>
        {subtitle && <span className="text-muted font-mono text-xs">{subtitle}</span>}
      </div>
      <div>{children}</div>
    </div>
  )
}

export function EducationList() {
  return (
    <CredentialBlock title="Education & Academic Background" subtitle="Tertiary Studies">
      <div className="space-y-4">
        {EDUCATION.map((item) => (
          <div
            key={item.id}
            className="glass-card hover:border-[var(--accent-border)] relative rounded-2xl border border-line p-6 transition-all duration-300 shadow-sm"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <h4 className="text-ink font-display text-lg sm:text-xl font-bold">{item.degree}</h4>
                <p className="text-soft font-sans text-sm mt-0.5">
                  University of Science and Technology of Southern Philippines (USTP)
                </p>
              </div>
              <span className="glass-card text-[var(--accent-primary)] border border-[var(--accent-border)] rounded-md px-3 py-1 font-mono text-xs font-semibold shrink-0">
                Class of 2026
              </span>
            </div>
            <p className="text-body font-sans text-sm mt-3 leading-relaxed">
              Curriculum focused on algorithms, automata theory, computer architecture,
              database management systems, software engineering, and graph machine learning research.
            </p>
          </div>
        ))}
      </div>
    </CredentialBlock>
  )
}

export function HonorsList() {
  return (
    <CredentialBlock title="Academic Distinctions & Scholarships" subtitle="Merit & Recognition">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {HONORS.map((honor) => (
          <div
            key={honor.id}
            className="glass-card hover:border-[var(--accent-border)] group flex flex-col justify-between rounded-2xl border border-line p-5 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-line"
                  style={{ backgroundColor: 'var(--accent-subtle)' }}
                >
                  <AwardIcon className="h-4 w-4 text-[var(--accent-primary)]" />
                </span>
                <span className="text-ink font-display text-base sm:text-lg font-bold group-hover:text-white transition-colors">
                  {honor.title}
                </span>
              </div>
              <p className="text-soft font-sans text-xs leading-relaxed">{honor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </CredentialBlock>
  )
}

export function CertificationsList() {
  return (
    <CredentialBlock
      title="Verified Industry Certifications"
      subtitle="Industry Standard Protocols"
    >
      <div className="space-y-4">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="glass-card hover:border-[var(--accent-border)] flex flex-col items-start gap-5 rounded-2xl border border-line p-5 sm:flex-row sm:items-center sm:gap-6 transition-all duration-300 shadow-sm"
          >
            <div className="border-line bg-paper-subtle/80 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border p-2 shadow-inner">
              <Picture
                {...cert.image}
                className="h-full w-full object-contain"
                imgClassName="object-contain h-full w-full"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h4 className="text-ink font-display text-lg font-bold">{cert.title}</h4>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 font-mono text-[11px] font-semibold">
                  <CheckCircleIcon className="h-3 w-3" />
                  <span>Verified Credential</span>
                </span>
              </div>
              <p className="text-soft font-mono text-xs">
                Issued by <strong className="text-ink font-semibold">{cert.issuer}</strong> •{' '}
                <span className="text-muted">{cert.date}</span>
              </p>
              <p className="text-body font-sans text-xs leading-relaxed pt-1">
                Foundational proficiency in IPv4/IPv6 network addressing, packet delivery, subnet
                calculation, routing protocols, and endpoint device security configurations.
              </p>
            </div>
          </div>
        ))}
      </div>
    </CredentialBlock>
  )
}
