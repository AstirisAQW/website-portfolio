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
  { id: 'all', label: 'All Projects' },
  { id: 'ml', label: 'Graph ML & Research' },
  { id: 'systems', label: 'Systems & Architecture' },
  { id: 'web', label: 'Full-Stack Web' },
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

    const cards = containerRef.current?.querySelectorAll('.project-card')
    if (!cards || cards.length === 0) return

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [filteredProjects])

  return (
    <Section id="projects" className="py-24">
      <SectionHeading
        number="03"
        title="Featured Engineering Projects"
        subtitle="Post-hoc graph kinematic anomaly detection, MIPS bare-metal assembly games, finite automata visualizers, and production web platforms."
      />

      {/* Filter Tabs */}
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
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'text-white shadow-lg'
                  : 'glass-card hover:border-[var(--accent-border)] text-soft hover:text-ink'
              }`}
              style={{
                background: isSelected ? 'var(--accent-gradient)' : undefined,
                boxShadow: isSelected ? '0 0 14px var(--accent-glow)' : undefined,
              }}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] rounded-full px-2 py-0.5 ${
                  isSelected ? 'bg-black/30 text-white' : 'bg-sand text-muted'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Projects List */}
      <div ref={containerRef} className="mt-10 space-y-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onInspect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Project Screenshot Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  )
}
