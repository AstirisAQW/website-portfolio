import { DownloadIcon, ExternalLinkIcon, CheckCircleIcon } from './Icons'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { Picture } from './Picture'
import { SITE } from '../content/site'
import { CERTIFICATIONS, EDUCATION, HONORS } from '../content/profile'

export function CredentialsSection() {
  const downloadButton = (
    <a
      href={SITE.resumeUrl}
      download
      className="inline-flex items-center gap-2 rounded-sm bg-white px-4 py-2 text-xs font-medium text-black hover:bg-neutral-200 transition-colors"
    >
      <DownloadIcon className="h-3.5 w-3.5" />
      <span>Download Resume PDF</span>
    </a>
  )

  return (
    <Section id="credentials" className="py-24 sm:py-32">
      <SectionHeading
        number="04"
        title="Credentials & Resume"
        subtitle="Verified academic background from the University of Science and Technology of Southern Philippines, collegiate distinctions, and industry certifications."
        action={downloadButton}
      />

      <div className="reveal mt-12 space-y-8">
        {/* Education & Academic Honors */}
        <div className="rounded-sm border border-white/10 bg-[#0f1118] p-6 sm:p-8 space-y-6">
          <div className="border-b border-white/10 pb-3 flex items-baseline justify-between text-xs">
            <span className="text-[var(--accent-primary)] font-medium">Education & Accolades</span>
            <span className="text-white/40">2022 — 2026</span>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((item) => (
              <div key={item.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-white font-display text-xl sm:text-2xl font-bold">
                    {item.degree}
                  </h3>
                  <span className="text-xs text-white/60">
                    USTP • Class of 2026
                  </span>
                </div>

                <p className="text-body text-sm leading-relaxed max-w-2xl">
                  University of Science and Technology of Southern Philippines. Core focus in
                  algorithm design, automata theory, low-level computer architecture, and
                  temporal graph machine learning.
                </p>

                {/* Honors badges */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  {HONORS.map((h) => (
                    <span
                      key={h.id}
                      className="border border-white/10 bg-white/[0.02] px-3 py-1 text-white/80 rounded-sm"
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
        <div className="rounded-sm border border-white/10 bg-[#0f1118] p-6 sm:p-8 space-y-6">
          <div className="border-b border-white/10 pb-3 flex items-baseline justify-between text-xs">
            <span className="text-[var(--accent-primary)] font-medium">Industry Certification</span>
            <span className="text-white/40">Cisco Networking Academy</span>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div className="rounded-sm border border-white/10 bg-black/40 h-16 w-16 shrink-0 p-2 flex items-center justify-center">
                  <Picture
                    {...cert.image}
                    className="h-full w-full object-contain"
                    imgClassName="object-contain h-full w-full"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-white font-display text-lg font-bold">{cert.title}</h4>
                    <span className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] px-2 py-0.5 rounded-sm inline-flex items-center gap-1">
                      <CheckCircleIcon className="h-3 w-3" />
                      <span>Verified Record</span>
                    </span>
                  </div>

                  <p className="text-xs text-soft">
                    {cert.issuer} • {cert.date}
                  </p>

                  <p className="text-body text-xs leading-relaxed pt-1 max-w-2xl">
                    Validated foundational competence in network architecture, IP addressing,
                    routing protocols, packet switching, and security fundamentals.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Resume Document Link */}
        <div className="rounded-sm border border-white/10 bg-[#0f1118] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-white font-medium text-sm">
              Official Curriculum Vitae
            </h4>
            <p className="text-body text-xs">
              Complete academic history, technical proficiencies, coursework, and research publications.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs shrink-0">
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>View PDF in new tab</span>
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>

            <a
              href={SITE.resumeUrl}
              download
              className="rounded-sm border border-white/20 bg-white/[0.04] px-4 py-2 font-medium text-white hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
