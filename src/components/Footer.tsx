import { ArrowUpIcon, GithubIcon, LinkedinIcon } from './Icons'
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
    <footer className="bg-[#050608] text-white/60 border-t border-white/10 relative z-10 px-4 py-20 sm:px-6 lg:px-8 font-mono text-xs">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Identity & Technical Footprint */}
          <div className="space-y-3 max-w-lg">
            <div className="flex items-center gap-2 text-[var(--accent-primary)] font-bold">
              <span>// COLOPHON & RECORD SPECIFICATION</span>
            </div>
            <h3 className="text-white font-display text-2xl font-black uppercase tracking-tight">
              {SITE.name}
            </h3>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              B.S. in Computer Science (Cum Laude, DOST-SEI JLSS Scholar) • University of
              Science and Technology of Southern Philippines. Specializing in bare-metal MIPS
              architecture, graph kinematic anomaly detection, and production distributed systems.
            </p>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group flex items-center gap-2 border border-white/15 bg-white/[0.02] px-3.5 py-2 text-white/70 hover:border-white hover:text-white transition-all"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>[GITHUB]</span>
            </a>

            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group flex items-center gap-2 border border-white/15 bg-white/[0.02] px-3.5 py-2 text-white/70 hover:border-white hover:text-white transition-all"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              <span>[LINKEDIN]</span>
            </a>

            <button
              type="button"
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 border border-white/20 bg-white/[0.04] px-4 py-2 uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              <span>[TOP]</span>
              <ArrowUpIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Lower Divider & Navigation Links */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-[11px] text-white/40">
          <div>
            {SITE.years} © {SITE.name} • ENGINEERED WITH REACT 19, TS, GSAP & LENIS
          </div>

          <nav aria-label="Footer Nav" className="flex flex-wrap items-center gap-5 uppercase tracking-wider">
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
                [{item.label}]
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
