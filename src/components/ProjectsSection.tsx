import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
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

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Clip-path entrance reveal for all non-reduced-motion screens
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const reveals = gsap.utils.toArray<HTMLElement>('.project-image-reveal')
        reveals.forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: 'inset(12% 0% 12% 0%)', opacity: 0 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              duration: 0.9,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
              },
            }
          )
        })
      })

      // Desktop-only: image parallax scrub (-8% to 8%) + sticky card depth stacking
      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const parallaxItems = gsap.utils.toArray<HTMLElement>('.project-parallax-inner')
        parallaxItems.forEach((inner) => {
          gsap.fromTo(
            inner,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: inner.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          )
        })

        const cards = gsap.utils.toArray<HTMLElement>('.project-stack-card')
        cards.forEach((card, index) => {
          if (index === cards.length - 1) return
          const nextCard = cards[index + 1]

          gsap.to(card, {
            scale: 0.95,
            opacity: 0.35,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 85%',
              end: 'top 24%',
              scrub: true,
            },
          })
        })
      })
    },
    { scope: containerRef }
  )

  return (
    <Section
      id="projects"
      wrapperClassName="bg-stage text-stage-ink border-b border-stage-line"
      className="py-24 sm:py-36"
    >
      <SectionHeading title="Projects" tone="dark" />

      {/* Stacking Case-Study Track */}
      <div ref={containerRef} className="mt-14 sm:mt-20 space-y-12 md:space-y-24">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="md:sticky md:top-24 lg:top-28 will-change-transform"
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
