import { useRef } from 'react'
import { ArrowUpRightIcon, EyeIcon, GithubIcon } from './Icons'
import { Picture } from './Picture'
import type { Project } from '../types/project'
import { useMagnetic } from '../hooks/useMagnetic'

interface ProjectCardProps {
  project: Project
  onInspect: (project: Project) => void
}

export function ProjectCard({ project, onInspect }: ProjectCardProps) {
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(primaryBtnRef, 0.25)

  return (
    <article className="project-stack-card relative rounded-sm border border-stage-line bg-stage-card p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:border-stage-edge">
      {/* Full-Width Case-Study Row: ~60% (7/12) Large Visual, ~40% (5/12) Narrative */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* 60% Column: Large Case-Study Viewport with Clip Reveal & Parallax */}
        <figure
          onClick={() => onInspect(project)}
          className="group/img cursor-pointer relative lg:col-span-7"
          title="Click to inspect details"
        >
          <div className="project-image-reveal relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-stage-line bg-stage transition-colors duration-300 group-hover/img:border-stage-edge will-change-transform">
            <div className="project-parallax-inner h-full w-full scale-[1.16] will-change-transform">
              <Picture
                {...project.image}
                className="h-full w-full object-cover"
                imgClassName="h-full w-full object-cover"
              />
            </div>
          </div>
        </figure>

        {/* 40% Column: Editorial Case-Study Details */}
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-2">
            <h3 className="text-stage-ink font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.02] tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-accent-stage text-sm sm:text-base font-medium line-clamp-1">
                {project.subtitle}
              </p>
            )}
          </div>

          <p className="text-stage-body text-sm sm:text-base leading-[1.65] max-w-[60ch]">
            {project.description}
          </p>

          {/* Tech Stack Tags (Mono for tiny metadata) */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono border border-stage-line bg-stage/70 px-2.5 py-1 text-xs text-stage-body rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              ref={primaryBtnRef}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-accent-stage px-5 py-2.5 text-sm font-medium text-stage hover:bg-stage-ink transition-colors will-change-transform"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View Source</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => onInspect(project)}
              className="inline-flex items-center gap-2 border border-stage-edge bg-stage/50 px-5 py-2.5 text-sm font-medium text-stage-ink hover:text-accent-stage hover:border-accent-stage transition-colors cursor-pointer rounded-sm"
            >
              <EyeIcon className="h-4 w-4 text-accent-stage" />
              <span>Inspect Details</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
