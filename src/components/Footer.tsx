import { ArrowUpIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import { SECTIONS, type SectionId } from '../content/sections'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'

export function Footer() {
  const handleNavClick = (sectionId: SectionId) => {
    smoothScrollTo(`#${sectionId}`, -72)
  }

  const handleScrollToTop = () => {
    smoothScrollTo('body', 0)
  }

  return (
    <footer id="contact" className="border-t border-line bg-paper-subtle text-body text-sm py-20 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Contact & Identity */}
          <div className="space-y-3 max-w-md">
            <span className="text-accent font-medium text-sm">
              Get in Touch
            </span>
            <h3 className="text-ink font-display text-4xl sm:text-5xl leading-none tracking-tight">
              {SITE.name}
            </h3>
            <p className="text-body text-sm sm:text-base leading-[1.6] max-w-[65ch]">
              Available for software engineering and systems research opportunities.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-line bg-card px-4 py-2.5 text-sm font-medium text-ink hover:border-edge hover:bg-card-hover transition-colors shadow-[0_1px_2px_rgba(24,26,29,0.05)]"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-line bg-card px-4 py-2.5 text-sm font-medium text-ink hover:border-edge hover:bg-card-hover transition-colors shadow-[0_1px_2px_rgba(24,26,29,0.05)]"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={SITE.email}
              className="inline-flex items-center gap-2 rounded-sm border border-line bg-card px-4 py-2.5 text-sm font-medium text-ink hover:border-edge hover:bg-card-hover transition-colors shadow-[0_1px_2px_rgba(24,26,29,0.05)]"
            >
              <MailIcon className="h-4 w-4" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={handleScrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-card px-4 py-2.5 text-sm font-medium text-soft hover:text-ink hover:border-edge hover:bg-card-hover transition-colors cursor-pointer shadow-[0_1px_2px_rgba(24,26,29,0.05)]"
            >
              <span>Back to top</span>
              <ArrowUpIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Nav & Copyright */}
        <div className="border-t border-line pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-sm text-soft">
          <div className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>

          <nav aria-label="Footer Nav" className="flex flex-wrap items-center gap-6">
            {SECTIONS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id as SectionId)
                }}
                className="hover:text-accent transition-colors hover:underline"
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
