import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { PROJECTS } from '../content/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import type { Project, ProjectCategory } from '../types/project'

gsap.registerPlugin(ScrollTrigger)

const FILTER_CATEGORIES: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'ALL WORKS' },
  { id: 'systems', label: 'SYSTEMS & ARCH' },
  { id: 'ml', label: 'GRAPH ML & RESEARCH' },
  { id: 'web', label: 'FULL-STACK PLATFORMS' },
  { id: 'simulation', label: 'AUTOMATA & ENGINES' },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const cards = containerRef.current?.querySelectorAll<HTMLElement>('.project-stack-card')
    if (!cards || cards.length === 0) return

    const ctx = gsap.context(() => {
      // GSAP ScrollTrigger: Stacking card depth on scroll
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return
        const nextCard = cards[index + 1]

        gsap.to(card, {
          scale: 0.93,
          opacity: 0.35,
          filter: 'brightness(0.6)',
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top 85%',
            end: 'top 30%',
            scrub: true,
          },
        })
      })
    }, containerRef)

    // Refresh ScrollTrigger calculations after DOM layout settles
    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [filteredProjects])

  return (
    <Section id="projects" className="py-28">
      <SectionHeading
        number="02"
        title="Selected Works & Systems"
        subtitle="Scroll through key artifacts: from MIPS assembly to graph kinematic anomaly detection models."
      />

      {/* Filter Tabs in Architectural Sharp Monospace */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        {FILTER_CATEGORIES.map((tab) => {
          const isSelected = activeCategory === tab.id
          const count =
            tab.id === 'all'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === tab.id).length

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`inline-flex items-center gap-2 border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                isSelected
                  ? 'border-white bg-white text-black font-bold'
                  : 'border-white/10 bg-white/[0.02] text-soft hover:border-white/30 hover:text-white'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 ${
                  isSelected ? 'bg-black text-white' : 'bg-white/10 text-white/60'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* GSAP Stacking Cards Track */}
      <div ref={containerRef} className="mt-12 space-y-12 lg:space-y-24">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="sticky top-24 sm:top-28 will-change-transform"
          >
            <ProjectCard
              project={project}
              index={index}
              total={filteredProjects.length}
              onInspect={(proj) => setSelectedProject(proj)}
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  )
}
