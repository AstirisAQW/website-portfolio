import { useRef } from 'react'
import { DownloadIcon, ExternalLinkIcon, CheckCircleIcon } from './Icons'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { Picture } from './Picture'
import { SITE } from '../content/site'
import { CERTIFICATIONS, EDUCATION, HONORS } from '../content/profile'
import { useMagnetic } from '../hooks/useMagnetic'

export function CredentialsSection() {
  const topDownloadRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(topDownloadRef, 0.25)

  const downloadButton = (
    <a
      ref={topDownloadRef}
      href={SITE.resumeUrl}
      download
      className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent-hover transition-colors shadow-[0_1px_2px_rgba(24,26,29,0.08),0_8px_24px_rgba(200,62,43,0.16)] will-change-transform"
    >
      <DownloadIcon className="h-4 w-4" />
      <span>Download Resume PDF</span>
    </a>
  )

  return (
    <Section id="credentials" className="py-24 sm:py-36">
      <SectionHeading title="Credentials & Resume" action={downloadButton} />

      <div className="reveal mt-12 sm:mt-16 space-y-8">
        {/* Education & Academic Honors */}
        <div className="rounded-sm border border-line bg-card p-6 sm:p-10 space-y-6 shadow-[0_1px_2px_rgba(24,26,29,0.05),0_8px_24px_rgba(24,26,29,0.05)]">
          <div className="border-b border-line pb-4 flex items-baseline justify-between">
            <span className="text-accent font-medium text-sm">Education & Accolades</span>
            <span className="font-mono text-xs text-muted">2022 — 2026</span>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((item) => (
              <div key={item.id} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-ink font-display text-3xl sm:text-4xl leading-tight">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-soft">
                    USTP • Class of 2026
                  </span>
                </div>

                <p className="text-body text-sm sm:text-base leading-[1.65] max-w-[65ch]">
                  University of Science and Technology of Southern Philippines. Core focus in
                  algorithm design, automata theory, low-level computer architecture, and
                  temporal graph machine learning.
                </p>

                {/* Honors badges */}
                <div className="pt-2 flex flex-wrap gap-2.5">
                  {HONORS.map((h) => (
                    <span
                      key={h.id}
                      className="border border-edge bg-paper-subtle px-3.5 py-1.5 text-sm text-ink rounded-sm font-medium"
                    >
                      {h.title}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cisco Certification */}
        <div className="rounded-sm border border-line bg-card p-6 sm:p-10 space-y-6 shadow-[0_1px_2px_rgba(24,26,29,0.05),0_8px_24px_rgba(24,26,29,0.05)]">
          <div className="border-b border-line pb-4 flex items-baseline justify-between">
            <span className="text-accent font-medium text-sm">Industry Certification</span>
            <span className="font-mono text-xs text-muted">Cisco Networking Academy</span>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div className="rounded-sm border border-line bg-paper-subtle h-16 w-16 shrink-0 p-2 flex items-center justify-center">
                  <Picture
                    {...cert.image}
                    className="h-full w-full object-contain"
                    imgClassName="object-contain h-full w-full"
                  />
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-ink font-display text-2xl sm:text-3xl leading-tight">
                      {cert.title}
                    </h4>
                    <span className="font-mono border border-edge bg-paper-subtle text-ink text-xs px-2.5 py-0.5 rounded-sm inline-flex items-center gap-1.5 font-medium">
                      <CheckCircleIcon className="h-3.5 w-3.5 text-accent" />
                      <span>Verified Record</span>
                    </span>
                  </div>

                  <p className="font-mono text-xs text-muted">
                    {cert.issuer} • {cert.date}
                  </p>

                  <p className="text-body text-sm sm:text-base leading-[1.65] pt-1 max-w-[65ch]">
                    Validated foundational competence in network architecture, IP addressing,
                    routing protocols, packet switching, and security fundamentals.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Resume Document Link */}
        <div className="rounded-sm border border-line bg-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_1px_2px_rgba(24,26,29,0.05),0_8px_24px_rgba(24,26,29,0.05)]">
          <div className="space-y-1">
            <h4 className="text-ink font-display text-2xl">
              Official Curriculum Vitae
            </h4>
            <p className="text-body text-sm">
              Complete academic history, technical proficiencies, coursework, and research publications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm shrink-0">
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover hover:underline inline-flex items-center gap-1.5 font-medium"
            >
              <span>View PDF in new tab</span>
              <ExternalLinkIcon className="h-4 w-4" />
            </a>

            <a
              href={SITE.resumeUrl}
              download
              className="rounded-sm border border-edge bg-paper-subtle px-4 py-2.5 text-sm font-medium text-ink hover:border-ink hover:bg-card-hover transition-colors inline-flex items-center gap-2"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
