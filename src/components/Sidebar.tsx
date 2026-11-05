import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SECTIONS, type SectionId } from '../content/sections'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_OFFSET = -16

interface SidebarProps {
  activeSection: string
}

export function Sidebar({ activeSection }: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 860px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.sidebar-star',
          { rotation: 0 },
          {
            rotation: 90,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          },
        )
      })
    },
    { scope: sidebarRef },
  )

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const activeChev = sidebarRef.current?.querySelector<HTMLElement>(
          `[data-section-chev="${activeSection}"]`,
        )
        if (activeChev) {
          gsap.fromTo(
            activeChev,
            { x: -6, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          )
        }
      })
    },
    { dependencies: [activeSection], scope: sidebarRef },
  )

  const handleNavClick = (sectionId: SectionId) => {
    smoothScrollTo(`#${sectionId}`, SCROLL_OFFSET)
  }

  return (
    <aside
      ref={sidebarRef}
      className="sticky top-0 z-10 -mx-pad-sm bg-panel border-b border-line px-pad-sm desk:static desk:mx-0 desk:border-b-0 desk:px-0"
    >
      <div className="desk:sticky desk:top-[max(1rem,calc(50vh-9.6rem))] desk:mt-[4.5rem]">
        {/* Star Image (Desktop Only) */}
        <div className="hidden desk:flex justify-center pb-6">
          <img
            src={SITE.sidebarStar.src}
            alt={SITE.sidebarStar.alt}
            onLoad={() => ScrollTrigger.refresh()}
            className="sidebar-star w-[140px] max-w-full h-auto block select-none will-change-transform"
          />
        </div>

        {/* Navigation Links */}
        <nav
          aria-label="Main"
          className="flex flex-row justify-center gap-8 desk:flex-col desk:gap-0"
        >
          {SECTIONS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                aria-current={isActive ? 'location' : undefined}
                className={`group flex justify-center py-[0.8rem] desk:py-[0.6rem] font-display font-medium no-underline transition-colors ${
                  isActive ? 'text-accent' : 'text-ink hover:text-accent focus-visible:text-accent'
                }`}
              >
                <span className="relative">
                  <span
                    data-section-chev={item.id}
                    aria-hidden="true"
                    className={`absolute right-full mr-[0.6rem] text-accent font-semibold transition-[transform,opacity] duration-300 will-change-transform ${
                      isActive
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-[6px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
                    }`}
                  >
                    &gt;
                  </span>
                  {item.label}
                </span>
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
