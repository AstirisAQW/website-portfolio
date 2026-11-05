import { useRef } from 'react'
import { gsap } from '../motion/gsap'
import { DURATION_DIVIDER, EASE_OUT } from '../motion/constants'
import { useMotion } from '../motion/useMotion'
import { PROJECTS } from '../content/projects'
import { getSectionLabel } from '../content/sections'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useMotion(sectionRef, () => {
    const frames = gsap.utils.toArray<HTMLElement>('.project-image-frame')
    frames.forEach((frame) => {
      gsap.fromTo(
        frame,
        { clipPath: 'inset(12% 0% 12% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: DURATION_DIVIDER,
          ease: EASE_OUT,
          scrollTrigger: {
            trigger: frame,
            start: 'top 85%',
          },
        },
      )
    })
  })

  return (
    <section ref={sectionRef} id="projects" className="pt-[4.5rem] pb-0 scroll-mt-4">
      <h2 className="reveal text-[2.1rem] mb-4">{getSectionLabel('projects')}</h2>

      <div>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Section Divider */}
      <div
        aria-hidden="true"
        className="section-divider mt-[4.5rem] h-[1px] w-full origin-left bg-line will-change-transform"
      />
    </section>
  )
}
