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
  { id: 'all', label: 'All Works' },
  { id: 'systems', label: 'Systems & Architecture' },
  { id: 'ml', label: 'Graph ML & Research' },
  { id: 'web', label: 'Full-Stack Platforms' },
  { id: 'simulation', label: 'Automata & Simulation' },
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
          scale: 0.94,
          opacity: 0.35,
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

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [filteredProjects])

  return (
    <Section id="projects" className="py-24 sm:py-32">
      <SectionHeading
        number="02"
        title="Selected Projects"
        subtitle="A collection of systems-level architectures, dynamic graph machine learning models, and production web applications."
      />

      {/* Filter Tabs in Sentence Case */}
      <div className="reveal mt-8 flex flex-wrap items-center gap-2">
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
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.03] text-body hover:bg-white/[0.08] hover:text-white border border-white/10'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-sm ${
                  isSelected ? 'bg-black/10 text-black' : 'bg-white/10 text-white/60'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Stacking Cards Track */}
      <div ref={containerRef} className="mt-12 space-y-12 lg:space-y-20">
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

      {/* Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  )
}
