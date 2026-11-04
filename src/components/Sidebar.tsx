import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SECTIONS, type SectionId } from '../content/sections'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'

gsap.registerPlugin(ScrollTrigger)

interface SidebarProps {
  activeSection: string
}

export function Sidebar({ activeSection }: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 860px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.to('.sidebar-star', {
          rotation: 45,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      })
    },
    { scope: sidebarRef }
  )

  const handleNavClick = (sectionId: SectionId) => {
    smoothScrollTo(`#${sectionId}`, -16)
  }

  return (
    <aside
      ref={sidebarRef}
      className="sticky top-0 z-20 -mx-6 bg-paper border-b border-line px-6 desk:static desk:mx-0 desk:border-b-0 desk:px-0"
    >
      <div className="desk:sticky desk:top-8 desk:mt-[4.5rem]">
        {/* Star Emblem on Top (55% of column width, no frame, no border, centered) */}
        <img
          src={SITE.sidebarStar.src}
          alt={SITE.sidebarStar.alt}
          onLoad={() => ScrollTrigger.refresh()}
          className="sidebar-star hidden desk:block w-[55%] mx-auto h-auto select-none will-change-transform"
        />

        {/* Centered Navigation Links (no divider lines) */}
        <nav
          aria-label="Main"
          className="flex flex-row justify-center gap-8 desk:flex-col desk:items-center desk:gap-0 desk:mt-4"
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
                className={`group py-3 desk:py-1.5 font-display font-medium text-base transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-ink hover:text-accent focus-visible:text-accent'
                }`}
              >
                <span className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className={`absolute right-full mr-1.5 transition-opacity ${
                      isActive
                        ? 'opacity-100 text-accent'
                        : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
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
