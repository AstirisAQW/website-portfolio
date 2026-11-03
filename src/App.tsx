import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SECTION_IDS } from './content/sections'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { CredentialsSection } from './components/CredentialsSection'
import { ArrowUpIcon } from './components/Icons'
import { initSmoothScroll, smoothScrollTo } from './utils/lenis'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const appRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
            },
          })
        })
      })
    },
    { scope: appRef }
  )

  useEffect(() => {
    const lenis = initSmoothScroll()

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    const handleLoad = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('load', handleLoad)
    document.fonts?.ready.then(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', handleLoad)
      lenis?.destroy()
    }
  }, [])

  return (
    <div
      ref={appRef}
      className="bg-paper text-ink selection:bg-accent selection:text-paper relative min-h-screen font-sans antialiased"
    >
      {/* Fixed Solid Dark Editorial Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Progression: Hero → Projects (Dark Inverted) → Skills → Credentials+Resume */}
      <main className="relative z-10">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CredentialsSection />
      </main>

      {/* Footer & Contact */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => smoothScrollTo('body', 0)}
          aria-label="Scroll back to top"
          className="fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-sm border border-edge bg-card text-ink hover:text-accent hover:border-accent transition-colors cursor-pointer shadow-[0_4px_16px_rgba(24,26,29,0.12)] hover:bg-card-hover"
        >
          <ArrowUpIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
