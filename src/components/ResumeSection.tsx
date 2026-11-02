import { useState } from 'react'
import { DownloadIcon, ExternalLinkIcon, FileTextIcon, LayersIcon } from './Icons'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { SITE } from '../content/site'
import { CERTIFICATIONS, EDUCATION, HONORS } from '../content/profile'
import { PROJECTS } from '../content/projects'

export function ResumeSection() {
  const [viewMode, setViewMode] = useState<'structured' | 'pdf'>('structured')

  const downloadButton = (
    <a
      href={SITE.resumeUrl}
      download
      className="hover:scale-105 active:scale-95 text-white inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md"
      style={{
        background: 'var(--accent-gradient)',
        boxShadow: '0 0 16px var(--accent-glow)',
      }}
    >
      <DownloadIcon className="h-3.5 w-3.5" />
      <span>Download Official PDF</span>
    </a>
  )

  return (
    <Section id="resume" className="py-24">
      <SectionHeading
        number="05"
        title="Curriculum Vitae & Resume"
        subtitle="Comprehensive record of academic coursework, engineering competencies, and official verifiable documents."
        action={downloadButton}
      />

      {/* Mode Switcher & Controls Bar */}
      <div className="glass-card mt-10 flex flex-col justify-between gap-4 rounded-2xl border border-line p-4 sm:flex-row sm:items-center">
        {/* Toggle between Structured and PDF */}
        <div className="bg-paper-subtle/80 inline-flex rounded-xl p-1 border border-line">
          <button
            type="button"
            onClick={() => setViewMode('structured')}
            className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 font-mono text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'structured'
                ? 'bg-card text-ink shadow-sm'
                : 'text-soft hover:text-ink'
            }`}
          >
            <LayersIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
            <span>Interactive Summary</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('pdf')}
            className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 font-mono text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'pdf'
                ? 'bg-card text-ink shadow-sm'
                : 'text-soft hover:text-ink'
            }`}
          >
            <FileTextIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
            <span>Embedded PDF View</span>
          </button>
        </div>

        {/* External Link */}
        <div className="flex items-center gap-3 text-xs">
          <span className="text-muted font-mono hidden sm:inline">Official Academic CV Artifact</span>
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1.5 font-mono font-medium"
          >
            <span>Open in Dedicated Tab</span>
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* View Content */}
      <div className="mt-8">
        {viewMode === 'structured' ? (
          /* Structured Interactive Resume */
          <div className="glass-card space-y-8 rounded-2xl border border-line p-6 sm:p-10 shadow-2xl">
            {/* Header Identity */}
            <div className="border-line flex flex-col justify-between gap-4 border-b pb-6 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="text-ink font-display text-2xl sm:text-3xl font-extrabold">{SITE.name}</h3>
                <p className="text-[var(--accent-primary)] font-mono text-sm mt-1">
                  Computer Science Graduate • Cum Laude • DOST-SEI JLSS Scholar
                </p>
                <p className="text-soft font-sans text-xs mt-0.5">
                  University of Science and Technology of Southern Philippines (USTP)
                </p>
              </div>
              <div className="font-mono text-xs text-soft sm:text-right space-y-1">
                <div>github.com/AstirisAQW</div>
                <div>linkedin.com/in/joseph-deysolong</div>
              </div>
            </div>

            {/* Technical Skills breakdown */}
            <div className="space-y-4">
              <h4 className="text-ink font-display text-lg font-bold border-line/60 border-b pb-1.5">
                Technical Proficiencies by Paradigm
              </h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs font-sans">
                <div className="glass-card rounded-xl border border-line p-4 space-y-1.5">
                  <span className="text-[var(--accent-primary)] font-mono font-semibold uppercase tracking-wider text-[11px] block">
                    Systems & Low-Level Architecture
                  </span>
                  <p className="text-body leading-relaxed">
                    {SITE.skills.systems.join(' • ')}
                  </p>
                </div>
                <div className="glass-card rounded-xl border border-line p-4 space-y-1.5">
                  <span className="text-[var(--accent-primary)] font-mono font-semibold uppercase tracking-wider text-[11px] block">
                    Graph Machine Learning & Kinematics
                  </span>
                  <p className="text-body leading-relaxed">
                    {SITE.skills.ml.join(' • ')}
                  </p>
                </div>
                <div className="glass-card rounded-xl border border-line p-4 space-y-1.5">
                  <span className="text-[var(--accent-primary)] font-mono font-semibold uppercase tracking-wider text-[11px] block">
                    Web & Distributed Systems
                  </span>
                  <p className="text-body leading-relaxed">
                    {SITE.skills.web.join(' • ')}
                  </p>
                </div>
                <div className="glass-card rounded-xl border border-line p-4 space-y-1.5">
                  <span className="text-[var(--accent-primary)] font-mono font-semibold uppercase tracking-wider text-[11px] block">
                    Tooling & Environments
                  </span>
                  <p className="text-body leading-relaxed">
                    {SITE.skills.tools.join(' • ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Education */}
            <div className="space-y-4">
              <h4 className="text-ink font-display text-lg font-bold border-line/60 border-b pb-1.5">
                Higher Education
              </h4>
              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-baseline">
                    <div>
                      <span className="text-ink font-display font-bold text-base">{edu.degree}</span>
                      <p className="text-soft font-sans text-xs">
                        University of Science and Technology of Southern Philippines (USTP)
                      </p>
                    </div>
                    <span className="text-[var(--accent-primary)] font-mono text-xs font-semibold shrink-0">
                      Graduated 2026
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Representative Projects in Resume */}
            <div className="space-y-4">
              <h4 className="text-ink font-display text-lg font-bold border-line/60 border-b pb-1.5">
                Key Engineering Highlights
              </h4>
              <div className="space-y-4 text-xs">
                {PROJECTS.slice(0, 4).map((p) => (
                  <div key={p.id} className="border-line/40 border-b pb-3.5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-ink font-display font-bold text-sm">
                        {p.title} — <span className="font-sans font-normal text-soft">{p.subtitle}</span>
                      </span>
                      <span className="text-muted font-mono text-[11px]">{p.year}</span>
                    </div>
                    <p className="text-body font-sans leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="bg-sand text-soft rounded px-2 py-0.5 font-mono text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors and Certifications Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="text-ink font-display text-base font-bold border-line/60 border-b pb-1.5">
                  Honors & Awards
                </h4>
                <ul className="space-y-2 text-xs font-sans">
                  {HONORS.map((h) => (
                    <li key={h.id} className="flex items-baseline justify-between">
                      <strong className="text-ink font-medium">{h.title}</strong>
                      <span className="text-muted font-mono text-[11px]">{h.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-ink font-display text-base font-bold border-line/60 border-b pb-1.5">
                  Certifications
                </h4>
                <ul className="space-y-2 text-xs font-sans">
                  {CERTIFICATIONS.map((c) => (
                    <li key={c.id} className="flex items-baseline justify-between">
                      <strong className="text-ink font-medium">{c.title} ({c.issuer})</strong>
                      <span className="text-muted font-mono text-[11px]">{c.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          /* Embedded PDF Viewer */
          <div className="space-y-4">
            <div className="border-line bg-paper-subtle overflow-hidden rounded-2xl border shadow-2xl">
              <iframe
                src={SITE.resumeUrl}
                title={`${SITE.name} Official Academic Resume`}
                className="h-[780px] w-full"
              />
            </div>
            <p className="text-soft font-mono text-xs text-center">
              Official PDF artifact rendered. If not displaying on your device,{' '}
              <a href={SITE.resumeUrl} download className="text-[var(--accent-primary)] underline font-semibold">
                download the PDF file directly
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </Section>
  )
}
