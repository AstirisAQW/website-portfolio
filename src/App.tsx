import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SECTION_IDS } from './content/sections'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutSection } from './components/AboutSection'
import { SystemsSpectrum } from './components/SystemsSpectrum'
import { ProjectsSection } from './components/ProjectsSection'
import { CredentialsSection } from './components/CredentialsSection'
import { ResumeSection } from './components/ResumeSection'
import { ScrollRail } from './components/ScrollRail'
import { AnimatedBackground } from './components/AnimatedBackground'
import { ArrowUpIcon } from './components/Icons'
import { initSmoothScroll, smoothScrollTo } from './utils/lenis'

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Initialize Lenis smooth scroll and synchronize with GSAP ScrollTrigger
    const lenis = initSmoothScroll()

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      lenis?.destroy()
    }
  }, [])

  return (
    <div className="bg-[#080a11] text-ink selection:bg-[var(--accent-primary)] selection:text-white relative min-h-screen font-sans antialiased">
      {/* High-Performance Animated Ambient Grid & Glowing Orbs */}
      <AnimatedBackground />

      {/* Floating HUD Section Navigation Rail (Desktop) */}
      <ScrollRail activeSection={activeSection} />

      {/* Header Navigation with Live Palette Switcher */}
      <Navbar activeSection={activeSection} />

      {/* Main Section-by-Section Scroll Experience */}
      <main className="relative z-10 pb-20">
        <AboutSection />
        <SystemsSpectrum />
        <ProjectsSection />
        <CredentialsSection />
        <ResumeSection />
      </main>

      {/* Terminal Outro Footer */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => smoothScrollTo('body', 0)}
          aria-label="Scroll back to top"
          className="glass-card hover:border-[var(--accent-border)] hover:scale-110 fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border shadow-xl transition-all duration-200 cursor-pointer"
        >
          <ArrowUpIcon className="h-4 w-4 text-[var(--accent-primary)]" />
        </button>
      )}
    </div>
  )
}
