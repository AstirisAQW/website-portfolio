import { ArrowUpRightIcon, EyeIcon, GithubIcon } from './Icons'
import { Picture } from './Picture'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  onInspect: (project: Project) => void
}

export function ProjectCard({ project, onInspect }: ProjectCardProps) {
  return (
    <article className="project-card glass-card hover:border-[var(--accent-border)] group relative rounded-2xl border border-line p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_20rem]">
        {/* Left: Narrative & Technical Depth */}
        <div className="space-y-4">
          {/* Metadata Tag */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="glass-card text-[var(--accent-primary)] border border-[var(--accent-border)] rounded-md px-2.5 py-0.5 font-mono text-xs font-semibold">
              {project.categoryLabel}
            </span>
            <span className="text-muted font-mono text-xs">• {project.year}</span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h3 className="text-ink font-display text-2xl sm:text-3xl font-extrabold tracking-tight group-hover:text-white transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-[var(--accent-primary)] font-mono text-sm font-medium">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-body font-sans text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Highlights Box */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="border-line bg-paper-subtle/50 rounded-xl border p-3.5 space-y-1.5">
              <span className="text-muted font-mono text-[11px] uppercase tracking-wider block font-semibold">
                Architecture Focus
              </span>
              <ul className="text-body font-sans text-xs space-y-1">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="text-[var(--accent-primary)] font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-sand/70 text-soft hover:text-ink rounded-md px-2.5 py-1 font-mono text-xs transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 active:scale-95 text-white inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
              style={{
                background: 'var(--accent-gradient)',
                boxShadow: '0 0 14px var(--accent-glow)',
              }}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
              <ArrowUpRightIcon className="h-3 w-3 opacity-80" />
            </a>

            <button
              type="button"
              onClick={() => onInspect(project)}
              className="glass-card hover:border-[var(--accent-border)] text-soft hover:text-ink inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono text-xs transition-colors cursor-pointer"
            >
              <EyeIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>Inspect Screenshot</span>
            </button>
          </div>
        </div>

        {/* Right: Screenshot preview with interactive hover glow and zoom */}
        <figure
          onClick={() => onInspect(project)}
          className="group/img cursor-pointer space-y-2 relative"
          title="Click to view full screenshot"
        >
          <div className="border-line bg-paper-subtle/80 relative aspect-video w-full overflow-hidden rounded-xl border shadow-lg transition-all duration-300 group-hover/img:border-[var(--accent-border)] group-hover/img:scale-[1.02]">
            <Picture
              {...project.image}
              className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
              imgClassName="h-full w-full object-cover"
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-[#080a11]/50 opacity-0 transition-opacity duration-200 group-hover/img:opacity-100 flex items-center justify-center backdrop-blur-xs">
              <span className="glass-card text-ink border border-[var(--accent-border)] inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold shadow-lg">
                <EyeIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                <span>Expand View</span>
              </span>
            </div>
          </div>
          <figcaption className="text-muted font-mono text-xs flex items-center justify-between px-1">
            <span>{project.title} Artifact</span>
            <span className="text-[11px] text-soft group-hover/img:text-[var(--accent-primary)] transition-colors">
              Enlarge ↗
            </span>
          </figcaption>
        </figure>
      </div>
    </article>
  )
}
