import { useRef } from 'react'
import { useSmoothScroll } from './motion/smoothScroll'
import { useScrollReveals } from './motion/useScrollReveals'
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
  const activeSection = useActiveSection(SECTION_IDS)
  const appRef = useRef<HTMLDivElement>(null)

  useSmoothScroll()
  useScrollReveals(appRef)

  return (
    <div ref={appRef} className="relative isolate min-h-screen font-body text-body antialiased">
      <BackgroundTexture />
      <div className="w-full max-w-[calc(1040px+3rem)] mx-auto px-6 pt-8">
        <Hero />
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
      <Footer />
    </div>
  )
}
