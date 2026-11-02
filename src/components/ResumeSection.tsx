import { DownloadIcon, ExternalLinkIcon } from './Icons'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { SITE } from '../content/site'

export function ResumeSection() {
  const downloadButton = (
    <a
      href={SITE.resumeUrl}
      download
      className="bg-accent hover:bg-accent-strong inline-flex items-center gap-1.5 rounded px-3 py-1.5 font-serif text-xs text-white shadow-2xs transition-colors"
    >
      <DownloadIcon className="h-3.5 w-3.5" />
      <span>Download PDF</span>
    </a>
  )

  return (
    <Section id="resume" className="py-16">
      <SectionHeading title="Resume" action={downloadButton} />

      <div className="mt-6 space-y-3">
        <div className="bg-tint border-edge text-soft flex items-center justify-between rounded border p-2.5 font-mono text-xs">
          <span>📄 Embedded Academic Resume (PDF)</span>
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink flex items-center gap-1 underline"
          >
            <span>Open in new tab</span>
            <ExternalLinkIcon className="h-3 w-3" />
          </a>
        </div>

        {/* Phones render embedded PDFs poorly, so the preview is for larger screens only. */}
        <div className="border-edge hidden h-[700px] overflow-hidden rounded-md border bg-white shadow-inner md:block">
          <iframe src={SITE.resumeUrl} title={`${SITE.name} resume`} className="h-full w-full" />
        </div>
        <p className="text-soft text-center font-mono text-xs md:hidden">
          The preview is available on larger screens. Use “Download PDF” above.
        </p>
      </div>
    </Section>
  )
}