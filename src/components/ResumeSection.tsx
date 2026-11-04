import { useRef } from 'react'
import { SITE } from '../content/site'
import { useMagnetic } from '../hooks/useMagnetic'

export function ResumeSection() {
  const btnRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(btnRef, 0.25)

  return (
    <section id="resume" className="py-[4.5rem] scroll-mt-4">
      <h2 className="reveal text-[2.2rem] mb-4">Resume</h2>
      <p className="reveal mb-5 max-w-[62ch] text-body">
        {SITE.resumeSummary}
      </p>
      <p className="reveal mb-0">
        <a
          ref={btnRef}
          href={SITE.resumeUrl}
          download
          className="inline-block border border-accent bg-accent px-5 py-2.5 font-display text-paper hover:bg-accent-hover hover:border-accent-hover transition-colors will-change-transform"
        >
          Download resume (PDF)
        </a>
      </p>
    </section>
  )
}
