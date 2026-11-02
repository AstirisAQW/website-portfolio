import { ArrowUpRightIcon, EyeIcon, GithubIcon } from './Icons'
import { Picture } from './Picture'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  index: number
  total: number
  onInspect: (project: Project) => void
}

export function ProjectCard({ project, index, total, onInspect }: ProjectCardProps) {
  const indexFormatted = String(index + 1).padStart(2, '0')
  const totalFormatted = String(total).padStart(2, '0')

  return (
    <article
      data-project-index={index}
      className="project-stack-card relative rounded-sm border border-white/10 bg-[#0f1118] p-6 sm:p-8 lg:p-10 shadow-2xl transition-colors duration-300 hover:border-white/20"
    >
      {/* Top Meta Line */}
      <div className="border-b border-white/10 pb-4 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[var(--accent-primary)] font-medium">
            {indexFormatted} / {totalFormatted}
          </span>
          <span className="text-white/20">•</span>
          <span className="text-white/70">
            {project.categoryLabel}
          </span>
        </div>

        <div className="flex items-center gap-4 text-soft text-xs">
          <span>{project.year}</span>
          <span className="text-white/20">|</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white inline-flex items-center gap-1 transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Main Grid: Info & Screenshot */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_22rem]">
        {/* Left: Narrative & Specs */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <h3 className="text-white font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-[var(--accent-primary)] text-sm font-medium">
                {project.subtitle}
              </p>
            )}
          </div>

          <p className="text-body text-sm sm:text-base leading-relaxed max-w-xl">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="border border-white/10 bg-white/[0.01] p-4 rounded-sm text-xs space-y-2">
              <div className="text-white/40 uppercase tracking-wider text-[10px] font-mono pb-1 border-b border-white/5">
                Key Highlights
              </div>
              <ul className="space-y-1.5 pt-1 text-white/80">
                {project.highlights.map((h, i) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <span className="text-[var(--accent-primary)] font-mono select-none">
                      0{i + 1}
                    </span>
                    <span className="text-white/90 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-white/70 rounded-sm"
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
              className="inline-flex items-center gap-2 rounded-sm bg-white px-4 py-2 text-xs font-medium text-black hover:bg-neutral-200 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>View Source</span>
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>

            <button
              type="button"
              onClick={() => onInspect(project)}
              className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-white transition-colors cursor-pointer rounded-sm"
            >
              <EyeIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>Inspect Details</span>
            </button>
          </div>
        </div>

        {/* Right: Clean Image Frame */}
        <figure
          onClick={() => onInspect(project)}
          className="group/img cursor-pointer relative"
          title="Click to inspect"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-black/40 transition-colors duration-300 group-hover/img:border-white/30">
            <Picture
              {...project.image}
              className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
              imgClassName="h-full w-full object-cover"
            />

            {/* Subtle Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="rounded-sm bg-black/80 border border-white/20 px-3 py-1.5 text-xs text-white">
                Expand View
              </span>
            </div>
          </div>
        </figure>
      </div>
    </article>
  )
}
