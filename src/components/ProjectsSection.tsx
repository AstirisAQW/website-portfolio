import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { PROJECTS } from '../content/projects'
import { ProjectCard } from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const frames = gsap.utils.toArray<HTMLElement>('.project-image-frame')
        frames.forEach((frame) => {
          gsap.fromTo(
            frame,
            { clipPath: 'inset(12% 0% 12% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: frame,
                start: 'top 85%',
              },
            }
          )
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-[4.5rem] border-b border-line scroll-mt-4"
    >
      <h2 className="reveal text-[2.2rem] mb-6">Projects</h2>

      <div>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
