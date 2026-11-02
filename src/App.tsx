import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SECTION_IDS } from './content/sections'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ResumeSection } from './components/ResumeSection'

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <div className="bg-paper text-ink selection:bg-accent relative min-h-screen font-serif antialiased selection:text-white">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 opacity-40" />

      <Navbar activeSection={activeSection} />

      <main className="relative z-10 space-y-12 pb-24">
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
      </main>

      <Footer />
    </div>
  )
}
