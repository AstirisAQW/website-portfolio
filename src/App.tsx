import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Hero } from './components/Hero'
import { Sidebar } from './components/Sidebar'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ResumeSection } from './components/ResumeSection'
import { Footer } from './components/Footer'
import { SECTION_IDS } from './content/sections'
import { SITE } from './content/site'
import { useActiveSection } from './hooks/useActiveSection'
import { destroySmoothScroll, initSmoothScroll } from './utils/lenis'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)
  const appRef = useRef<HTMLDivElement>(null)
  const bgTextureRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Shared .reveal fade-up
        gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          })
        })

        // 1px section dividers scale in from left
        gsap.utils.toArray<HTMLElement>('.section-divider').forEach((line) => {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: line,
                start: 'top 90%',
              },
            }
          )
        })

        // Texture layer parallax: scrub yPercent 0 to -6 across the whole page
        if (bgTextureRef.current) {
          gsap.fromTo(
            bgTextureRef.current,
            { yPercent: 0 },
            {
              yPercent: -6,
              ease: 'none',
              scrollTrigger: {
                trigger: document.documentElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
              },
            }
          )
        }
      })
    },
    { scope: appRef }
  )

  useEffect(() => {
    initSmoothScroll()

    const handleLoad = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('load', handleLoad)
    document.fonts?.ready.then(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      window.removeEventListener('load', handleLoad)
      destroySmoothScroll()
    }
  }, [])

  return (
    <div ref={appRef} className="relative isolate min-h-screen font-body text-body antialiased">
      {/* Page Texture Layer (fixed, moves slightly while scrolling) */}
      <div
        ref={bgTextureRef}
        aria-hidden="true"
        style={{ backgroundImage: `url("${SITE.textureUrl}")` }}
        className="pointer-events-none fixed inset-x-0 -inset-y-[10vh] -z-10 bg-ground bg-cover bg-top bg-no-repeat will-change-transform"
      />

      <div className="w-full max-w-[calc(1040px+3rem)] mx-auto px-6 pt-8">
        {/* HERO CARD */}
        <Hero />

        {/* BODY PANEL */}
        <div className="p-pad-sm desk:p-pad bg-panel border border-line rounded-panel-sm desk:rounded-panel">
          <div className="grid grid-cols-1 desk:grid-cols-[var(--spacing-side)_minmax(0,var(--spacing-content))] justify-center gap-0 desk:gap-gap">
            <Sidebar activeSection={activeSection} />

            <main className="min-w-0">
              <AboutSection />
              <ProjectsSection />
              <ResumeSection />
            </main>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
