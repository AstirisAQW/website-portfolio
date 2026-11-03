import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { PROJECTS } from '../content/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import type { Project } from '../types/project'

gsap.registerPlugin(ScrollTrigger)

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
  }, [])

  return (
    <Section id="projects" className="py-24 sm:py-32">
      <SectionHeading title="Projects" />

      {/* Stacking Cards Track */}
      <div ref={containerRef} className="mt-12 space-y-12 lg:space-y-20">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="sticky top-24 sm:top-28 will-change-transform"
          >
            <ProjectCard
              project={project}
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
