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
import { useActiveSection } from './hooks/useActiveSection'
import { initSmoothScroll } from './utils/lenis'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)
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
              start: 'top 85%',
            },
          })
        })
      })
    },
    { scope: appRef }
  )

  useEffect(() => {
    const lenis = initSmoothScroll()

    const handleLoad = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('load', handleLoad)
    document.fonts?.ready.then(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      window.removeEventListener('load', handleLoad)
      lenis?.destroy()
    }
  }, [])

  return (
    <div
      ref={appRef}
      className="bg-paper text-body selection:bg-accent selection:text-paper min-h-screen font-body antialiased"
    >
      {/* HERO */}
      <Hero />

      {/* BODY: sticky sidebar (star + nav) on the left, content on the right */}
      <div className="mx-auto w-full max-w-[calc(1040px+3rem)] px-6 grid grid-cols-1 desk:grid-cols-[260px_1fr] gap-0 desk:gap-16">
        <Sidebar activeSection={activeSection} />

        <main className="max-w-[680px] w-full">
          <AboutSection />
          <ProjectsSection />
          <ResumeSection />
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
