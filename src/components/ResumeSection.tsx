import { useRef } from 'react'
import { SITE } from '../content/site'
import { useMagnetic } from '../hooks/useMagnetic'

export function ResumeSection() {
  const openBtnRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(openBtnRef, 0.25)

  return (
    <section id="resume" className="pt-[4.5rem] pb-4 scroll-mt-4">
      <h2 className="reveal text-[2.1rem] mb-4">Resume</h2>
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
            <p className="mx-auto mb-3">
              Inline PDF preview is not available in this browser.
            </p>
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
        <a
          ref={openBtnRef}
          href={SITE.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[0.6rem] py-[0.65rem] px-5 border border-accent rounded-btn font-display font-medium text-[0.95rem] bg-accent text-panel hover:bg-accent-hover hover:border-accent-hover transition-colors no-underline will-change-transform"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="w-[18px] h-[18px]"
          >
            <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
          <span>Open in new tab</span>
        </a>

        <a
          href={SITE.resumeUrl}
          download={SITE.resumeFileName}
          className="inline-flex items-center gap-[0.6rem] py-[0.65rem] px-5 border border-line rounded-btn font-display font-medium text-[0.95rem] bg-panel text-ink hover:border-ink transition-colors no-underline"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="w-[18px] h-[18px]"
          >
            <path d="M12 3v12M7 11l5 5 5-5M5 20h14" />
          </svg>
          <span>Download</span>
        </a>
      </div>
    </section>
  )
}
