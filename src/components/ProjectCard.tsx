import { ArrowUpRightIcon, EyeIcon, GithubIcon } from './Icons'
import { Picture } from './Picture'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  onInspect: (project: Project) => void
}

export function ProjectCard({ project, onInspect }: ProjectCardProps) {
  return (
    <article className="project-stack-card relative rounded-sm border border-line bg-card p-6 sm:p-8 lg:p-10 shadow-[0_1px_2px_rgba(35,38,43,0.06),0_8px_24px_rgba(35,38,43,0.06)] transition-colors duration-300 hover:border-edge hover:bg-card-hover">
      {/* Main Grid: Info & Screenshot */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_22rem]">
        {/* Left: Narrative & Actions */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <h3 className="text-ink font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-[var(--accent-primary)] text-sm font-medium">
                {project.subtitle}
              </p>
            )}
          </div>

          <p className="text-body text-sm sm:text-base leading-[1.6] max-w-[65ch]">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line bg-paper px-2.5 py-1 text-xs text-body rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-xs font-medium text-paper hover:bg-ink/90 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>View Source</span>
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>

            <button
              type="button"
              onClick={() => onInspect(project)}
              className="inline-flex items-center gap-2 border border-line bg-card px-4 py-2 text-xs font-medium text-ink hover:text-[var(--accent-primary)] hover:border-edge hover:bg-card-hover transition-colors cursor-pointer rounded-sm"
            >
              <EyeIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>Inspect Details</span>
            </button>
          </div>
        </div>

        {/* Right: Clean Image Frame (Click opens modal) */}
        <figure
          onClick={() => onInspect(project)}
          className="group/img cursor-pointer relative"
          title="Click to inspect"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-line bg-paper-subtle transition-colors duration-300 group-hover/img:border-edge">
            <Picture
              {...project.image}
              className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
              imgClassName="h-full w-full object-cover"
            />
          </div>
        </figure>
      </div>
    </article>
  )
}
