import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleTags = project.tags.slice(0, 4)

  return (
    <article className="reveal group/project mb-14 last:mb-0">
      {/* Bordered Image Frame (shown whole at its own aspect ratio) */}
      <div className="project-image-frame overflow-hidden bg-card border border-line text-soft">        {project.image.src ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            onLoad={() => ScrollTrigger.refresh()}
            className="block w-full h-auto"
          />
        ) : (
          <div className="min-h-[260px] flex items-center justify-center p-4">
            {project.image.alt}
          </div>
        )}
      </div>

      <h3 className="mt-4 text-[1.6rem] text-ink">{project.title}</h3>
      {project.subtitle && (
        <p className="text-accent mb-2">{project.subtitle}</p>
      )}
      <p>{project.description}</p>

      <ul className="flex flex-wrap gap-2 mb-4">
        {visibleTags.map((tag) => (
          <li
            key={tag}
            className="border border-line py-[0.15rem] px-[0.6rem] text-[0.9rem] text-soft"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mb-0">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link font-display font-medium text-ink no-underline hover:underline hover:underline-offset-4"
        >
          <span
            aria-hidden="true"
            className="inline-block text-accent transition-transform duration-150 ease-out group-hover/link:translate-x-[4px]"
          >
            &gt;
          </span>{' '}
          View source
        </a>
      </p>
    </article>
  )
}
