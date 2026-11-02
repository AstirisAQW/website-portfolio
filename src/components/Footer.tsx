import { ArrowUpIcon, GithubIcon, LinkedinIcon, TerminalIcon } from './Icons'
import { SECTIONS, type SectionId } from '../content/sections'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'

export function Footer() {
  const handleNavClick = (sectionId: SectionId) => {
    smoothScrollTo(`#${sectionId}`, -68)
  }

  const handleScrollToTop = () => {
    smoothScrollTo('body', 0)
  }

  return (
    <footer className="bg-[#05060a] text-soft border-line relative z-10 border-t px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          {/* Developer identity & Terminal line */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-primary)]">
              <TerminalIcon className="h-4 w-4" />
              <span>joseph@ustp:~$ echo "Thanks for visiting!"</span>
            </div>
            <h3 className="text-ink font-display text-2xl font-bold tracking-tight">
              {SITE.name}
            </h3>
            <p className="font-sans text-xs text-soft max-w-md leading-relaxed">
              Computer Science Graduate (Cum Laude, DOST Scholar) • University of Science and
              Technology of Southern Philippines. Open to Software Engineering, Graph ML, and Systems roles.
            </p>
          </div>

          {/* Social links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="glass-card hover:border-[var(--accent-border)] hover:text-ink text-soft rounded-xl p-2.5 transition-all"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="glass-card hover:border-[var(--accent-border)] hover:text-ink text-soft rounded-xl p-2.5 transition-all"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="glass-card hover:border-[var(--accent-border)] hover:text-ink text-soft inline-flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs transition-all cursor-pointer"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUpIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
            </button>
          </div>
        </div>

        {/* Divider & Technical colophon */}
        <div className="border-line flex flex-col justify-between gap-4 border-t pt-8 font-mono text-xs md:flex-row md:items-center text-muted">
          <div>
            {SITE.years} © {SITE.name} • Built with React 19, TypeScript, GSAP & Lenis
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6">
            {SECTIONS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id as SectionId)
                }}
                className="capitalize hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
