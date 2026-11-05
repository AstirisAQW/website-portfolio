import { useRef } from 'react'
import { getSectionLabel } from '../content/sections'
import { SITE } from '../content/site'
import { useMagnetic } from '../hooks/useMagnetic'
import { DownloadIcon, ExternalLinkIcon } from './ui/Icons'
import { LinkButton } from './ui/LinkButton'

export function ResumeSection() {
  const openBtnRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(openBtnRef, 0.25)

  return (
    <section id="resume" className="pt-[4.5rem] pb-4 scroll-mt-4">
      <h2 className="reveal text-[2.1rem] mb-4">{getSectionLabel('resume')}</h2>
      <p className="reveal">{SITE.resumeSummary}</p>

      {/* Inline PDF Preview (shown only from 860px up) */}
      <div
        data-lenis-prevent
        className="reveal hidden desk:block my-5 overflow-hidden rounded-strip border border-line bg-card"
      >
        <object
          data={`${SITE.resumeUrl}#view=FitH`}
          type="application/pdf"
          className="block w-full h-[70vh]"
        >
          <div className="p-6 text-center text-soft">
            <p className="mx-auto mb-3">Inline PDF preview is not available in this browser.</p>
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-medium text-accent underline underline-offset-4"
            >
              Open resume PDF
            </a>
          </div>
        </object>
      </div>

      {/* Action Buttons */}
      <div className="reveal flex flex-wrap items-center gap-3 mt-4">
        <LinkButton ref={openBtnRef} variant="primary" href={SITE.resumeUrl} external>
          <ExternalLinkIcon />
          <span>Open in new tab</span>
        </LinkButton>

        <LinkButton variant="outline" href={SITE.resumeUrl} download={SITE.resumeFileName}>
          <DownloadIcon />
          <span>Download</span>
        </LinkButton>
      </div>
    </section>
  )
}
