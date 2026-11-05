import { useRef } from 'react'
import { gsap } from './motion/gsap'
import { DURATION_DIVIDER, DURATION_SLOW, EASE_OUT } from './motion/constants'
import { useMotion } from './motion/useMotion'
import { useSmoothScroll } from './motion/smoothScroll'
import { BackgroundTexture } from './components/BackgroundTexture'
import { Hero } from './components/Hero'
import { Sidebar } from './components/Sidebar'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ResumeSection } from './components/ResumeSection'
import { Footer } from './components/Footer'
import { Card } from './components/ui/Card'
import { SECTION_IDS } from './content/sections'
import { useActiveSection } from './hooks/useActiveSection'

export default function App() {
  useSmoothScroll()
  const activeSection = useActiveSection(SECTION_IDS)
  const appRef = useRef<HTMLDivElement>(null)

  useMotion(appRef, () => {
    // Shared .reveal fade-up
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 24,
        opacity: 0,
        duration: DURATION_SLOW,
        ease: EASE_OUT,
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
          duration: DURATION_DIVIDER,
          ease: EASE_OUT,
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
          },
        },
      )
    })
  })

  return (
    <div ref={appRef} className="relative isolate min-h-screen font-body text-body antialiased">
      <BackgroundTexture />

      <div className="w-full max-w-[calc(1040px+3rem)] mx-auto px-6 pt-8">
        {/* HERO CARD */}
        <Hero />

        {/* BODY PANEL */}
        <Card>
          <div className="grid grid-cols-1 desk:grid-cols-[var(--spacing-side)_minmax(0,var(--spacing-content))] justify-center gap-0 desk:gap-gap">
            <Sidebar activeSection={activeSection} />

            <main className="min-w-0">
              <AboutSection />
              <ProjectsSection />
              <ResumeSection />
            </main>
          </div>
        </Card>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
