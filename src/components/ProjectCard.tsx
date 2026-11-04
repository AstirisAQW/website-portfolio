import { useRef } from 'react'
import { Picture } from './Picture'
import type { Project } from '../types/project'
import { useMagnetic } from '../hooks/useMagnetic'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const btnRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(btnRef, 0.25)

  return (
    <article className="reveal mb-14 last:mb-0">
      {/* 16:10 Frame Showing Whole Image (object-contain, no zoom, no parallax) */}
      <div className="project-image-frame aspect-[16/10] w-full overflow-hidden border border-line bg-card flex items-center justify-center will-change-transform">
        <Picture
          {...project.image}
          className="h-full w-full object-contain"
          imgClassName="h-full w-full object-contain"
        />
      </div>

      {/* Title & One-Line Accent Subtitle */}
      <h3 className="mt-4 text-[1.7rem] text-ink">{project.title}</h3>
      {project.subtitle && (
        <p className="mt-1 mb-2 text-accent truncate">
          {project.subtitle}
        </p>
      )}

      {/* Description */}
      <p className="mb-4 max-w-[62ch] text-body">
        {project.description}
      </p>

      {/* Tag Chips */}
      <ul className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border border-line px-2.5 py-0.5 text-[0.9rem] text-soft"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Single "View source" Button (Tomorrow font-display) */}
      <p className="mb-0">
        <a
          ref={btnRef}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-accent bg-accent px-5 py-2.5 font-display text-paper hover:bg-accent-hover hover:border-accent-hover transition-colors will-change-transform"
        >
          View source
        </a>
      </p>
    </article>
  )
}
