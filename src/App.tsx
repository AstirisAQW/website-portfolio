import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SECTION_IDS } from './content/sections'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutSection } from './components/AboutSection'
import { KineticTicker } from './components/KineticTicker'
import { ProjectsSection } from './components/ProjectsSection'
import { SystemsSpectrum } from './components/SystemsSpectrum'
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
    <div className="bg-[#08090c] text-[#e2e4e9] selection:bg-white selection:text-black relative min-h-screen font-sans antialiased">
      {/* High-Performance Architectural Grid & Focal Ambient Lights */}
      <AnimatedBackground />

      {/* Floating HUD Section Index Rail (Desktop) */}
      <ScrollRail activeSection={activeSection} />

      {/* Fixed Architectural Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Restructured Scroll-Based Progression */}
      <main className="relative z-10 pb-24">
        {/* 01: Hero / Manifesto */}
        <AboutSection />

        {/* Kinetic Scroll-Scrubbed Text Marquee */}
        <KineticTicker />

        {/* 02: Selected Works // GSAP Stacking Cards Showcase */}
        <ProjectsSection />

        {/* 03: Architecture Matrix & Deep-Dive */}
        <SystemsSpectrum />

        {/* 04: Institutional Records & Accolades */}
        <CredentialsSection />

        {/* 05: Official Dossier & Curriculum Vitae */}
        <ResumeSection />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => smoothScrollTo('body', 0)}
          aria-label="Scroll back to top"
          className="group fixed right-6 bottom-6 z-40 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#0c0e14] text-white hover:border-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer shadow-2xl"
        >
          <ArrowUpIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  )
}
