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
      className="group relative inline-flex items-center gap-2 border border-white bg-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold text-black transition-all hover:bg-transparent hover:text-white cursor-pointer"
    >
      <DownloadIcon className="h-3.5 w-3.5" />
      <span>[ DOWNLOAD OFFICIAL PDF ]</span>
    </a>
  )

  return (
    <Section id="resume" className="py-28">
      <SectionHeading
        number="05"
        title="Official Dossier & Resume"
        subtitle="Verifiable record of engineering competencies, coursework, academic scholarship, and official PDF documents."
        action={downloadButton}
      />

      {/* Mode Switcher & Artifact Metadata */}
      <div className="card-architectural mt-10 p-4 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        {/* Architectural Tab Switcher */}
        <div className="inline-flex border border-white/15 bg-black/50 p-1">
          <button
            type="button"
            onClick={() => setViewMode('structured')}
            className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              viewMode === 'structured'
                ? 'bg-white text-black font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <LayersIcon className="h-3.5 w-3.5" />
            <span>[01 // DOSSIER]</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('pdf')}
            className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              viewMode === 'pdf'
                ? 'bg-white text-black font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <FileTextIcon className="h-3.5 w-3.5" />
            <span>[02 // PDF VIEWER]</span>
          </button>
        </div>

        {/* Direct Open in New Tab */}
        <div className="flex items-center gap-4 text-xs">
          <span className="text-white/40 hidden sm:inline">ARTIFACT: RESUME_V3.1.PDF</span>
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1.5 font-medium"
          >
            <span>[ OPEN IN TAB ]</span>
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* View Content */}
      <div className="mt-6">
        {viewMode === 'structured' ? (
          /* Structured Technical Dossier */
          <div className="card-architectural border border-white/10 p-6 sm:p-10 space-y-10">
            {/* Dossier Header */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[var(--accent-primary)] font-bold">
                  DOSSIER RECORD // J. DEYSOLONG
                </span>
                <h3 className="text-ink font-display text-3xl sm:text-4xl font-black">
                  {SITE.name}
                </h3>
                <p className="font-mono text-xs text-white/70">
                  B.S. in Computer Science • Cum Laude • DOST-SEI JLSS Scholar • USTP
                </p>
              </div>

              <div className="font-mono text-xs text-white/50 space-y-1 sm:text-right">
                <div>REPO: github.com/AstirisAQW</div>
                <div>CONTACT: linkedin.com/in/joseph-deysolong</div>
              </div>
            </div>

            {/* Technical Competencies Ledger */}
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-2 font-mono text-xs text-white/40 uppercase tracking-widest">
                [SECTION 01: TECHNICAL PROFICIENCIES BY DOMAIN]
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="border border-white/10 bg-white/[0.02] p-4 space-y-2">
                  <span className="text-[var(--accent-primary)] font-bold block uppercase">
                    SYSTEMS & BARE-METAL
                  </span>
                  <p className="text-white/80 leading-relaxed font-sans text-xs">
                    {SITE.skills.systems.join(' • ')}
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] p-4 space-y-2">
                  <span className="text-[var(--accent-primary)] font-bold block uppercase">
                    MACHINE LEARNING & GRAPH KINEMATICS
                  </span>
                  <p className="text-white/80 leading-relaxed font-sans text-xs">
                    {SITE.skills.ml.join(' • ')}
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] p-4 space-y-2">
                  <span className="text-[var(--accent-primary)] font-bold block uppercase">
                    DISTRIBUTED RUNTIMES & WEB
                  </span>
                  <p className="text-white/80 leading-relaxed font-sans text-xs">
                    {SITE.skills.web.join(' • ')}
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] p-4 space-y-2">
                  <span className="text-[var(--accent-primary)] font-bold block uppercase">
                    TOOLING & PROTOCOLS
                  </span>
                  <p className="text-white/80 leading-relaxed font-sans text-xs">
                    {SITE.skills.tools.join(' • ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Pedigree */}
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-2 font-mono text-xs text-white/40 uppercase tracking-widest">
                [SECTION 02: ACADEMIC CREDENTIALS]
              </div>
              <div className="space-y-3 font-mono text-xs">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border border-white/10 p-4 bg-white/[0.01]"
                  >
                    <div>
                      <span className="font-display font-bold text-base text-white">
                        {edu.degree}
                      </span>
                      <p className="text-soft font-sans text-xs mt-0.5">
                        University of Science and Technology of Southern Philippines (USTP)
                      </p>
                    </div>
                    <span className="text-[var(--accent-primary)] font-semibold shrink-0">
                      GRADUATED 2026
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Representative Works Summary */}
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-2 font-mono text-xs text-white/40 uppercase tracking-widest">
                [SECTION 03: KEY ENGINEERING ARTIFACTS]
              </div>
              <div className="space-y-3 font-mono text-xs">
                {PROJECTS.slice(0, 4).map((p) => (
                  <div key={p.id} className="border border-white/10 p-4 bg-white/[0.01] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-white">
                        {p.title} — <span className="font-sans font-normal text-soft">{p.subtitle}</span>
                      </span>
                      <span className="text-white/40 text-[11px]">{p.year}</span>
                    </div>
                    <p className="font-sans text-xs text-white/70 leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="border border-white/10 px-1.5 py-0.5 text-[10px] text-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accolades & Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 font-mono text-xs">
              <div className="space-y-3">
                <div className="border-b border-white/10 pb-1.5 text-white/40 uppercase tracking-widest">
                  [HONORS ARCHIVE]
                </div>
                <div className="space-y-2">
                  {HONORS.map((h) => (
                    <div key={h.id} className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-white font-medium">{h.title}</span>
                      <span className="text-white/40">{h.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-b border-white/10 pb-1.5 text-white/40 uppercase tracking-widest">
                  [INDUSTRY CERTIFICATION]
                </div>
                <div className="space-y-2">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.id} className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-white font-medium">{c.title} ({c.issuer})</span>
                      <span className="text-white/40">{c.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Official PDF Viewer Frame */
          <div className="card-architectural border border-white/10 p-2 space-y-3">
            <div className="border border-white/15 bg-black overflow-hidden">
              <iframe
                src={SITE.resumeUrl}
                title={`${SITE.name} Official Academic Resume`}
                className="h-[800px] w-full bg-white"
              />
            </div>
            <p className="font-mono text-xs text-soft text-center py-1">
              Official PDF document. If not rendered,{' '}
              <a href={SITE.resumeUrl} download className="text-white underline font-semibold">
                [DOWNLOAD FILE DIRECTLY]
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </Section>
  )
}
