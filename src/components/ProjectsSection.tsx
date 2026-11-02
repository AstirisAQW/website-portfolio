import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { PROJECTS } from '../content/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  return (
    <Section id="projects" className="py-20">
      <SectionHeading title="Projects" />
      <div className="mt-10 space-y-20">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}