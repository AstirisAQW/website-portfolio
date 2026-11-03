import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

  useEffect(() => {
    // Initialize Lenis smooth scroll and synchronize with GSAP ScrollTrigger
    const lenis = initSmoothScroll()

    // Reusable, calm scroll-reveal pattern across sections
    let ctx: gsap.Context | undefined
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
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
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      ctx?.revert()
      lenis?.destroy()
    }
  }, [])

  return (
    <div className="bg-paper text-ink selection:bg-accent selection:text-paper relative min-h-screen font-sans antialiased">
      {/* Clean, Fixed Editorial Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Progression: Hero → Projects → Skills → Credentials+Resume */}
      <main className="relative z-10">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CredentialsSection />
      </main>

      {/* Footer & Contact */}
      <Footer />

      {/* Subtle Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => smoothScrollTo('body', 0)}
          aria-label="Scroll back to top"
          className="fixed right-6 bottom-6 z-40 flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-card text-soft hover:text-ink hover:border-edge transition-colors cursor-pointer shadow-[0_1px_2px_rgba(35,38,43,0.06),0_8px_24px_rgba(35,38,43,0.06)] hover:bg-card-hover"
        >
          <ArrowUpIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
