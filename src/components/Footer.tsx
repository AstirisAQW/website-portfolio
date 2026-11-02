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
    <footer id="contact" className="border-t border-white/10 bg-[#07080b] text-body text-xs py-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Contact & Identity */}
          <div className="space-y-3 max-w-md">
            <span className="text-[var(--accent-primary)] font-medium text-xs">
              Get in Touch
            </span>
            <h3 className="text-white font-display text-2xl font-bold tracking-tight">
              {SITE.name}
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Available for software engineering and systems research opportunities.
            </p>
          </div>

          {/* Social Links (Moved from hero) */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white/80 hover:text-white hover:border-white transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white/80 hover:text-white hover:border-white transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={SITE.email}
              className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white/80 hover:text-white hover:border-white transition-colors"
            >
              <MailIcon className="h-4 w-4" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={handleScrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 rounded-sm border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs text-white/60 hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUpIcon className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Bottom Nav & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-soft">
          <div>
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
                className="hover:text-white transition-colors"
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
