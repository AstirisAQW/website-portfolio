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
      className="project-stack-card card-architectural relative rounded-none border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-white/25"
      style={{
        backgroundColor: '#0c0e14',
      }}
    >
      {/* Corner Registration Crosshairs (Architectural Drafting aesthetic) */}
      <div className="absolute top-2 left-2 font-mono text-[9px] text-white/20 select-none">+</div>
      <div className="absolute top-2 right-2 font-mono text-[9px] text-white/20 select-none">+</div>
      <div className="absolute bottom-2 left-2 font-mono text-[9px] text-white/20 select-none">+</div>
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/20 select-none">+</div>

      {/* Top Header Bar */}
      <div className="border-b border-white/10 pb-4 mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-[var(--accent-primary)] font-bold tracking-wider">
            [№ {indexFormatted}/{totalFormatted}]
          </span>
          <span className="text-white/30">•</span>
          <span className="text-white/70 uppercase tracking-wider">
            {project.categoryLabel}
          </span>
        </div>

        <div className="flex items-center gap-4 text-soft text-[11px]">
          <span>VER: {project.year}.0</span>
          <span className="text-white/20">|</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white inline-flex items-center gap-1 transition-colors"
          >
            <span>GITHUB</span>
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Main Grid: Description & Schematic */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_22rem]">
        {/* Left: Narrative & Technical Specs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-ink font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-[var(--accent-primary)] font-mono text-xs sm:text-sm uppercase tracking-wider font-medium">
                // {project.subtitle}
              </p>
            )}
          </div>

          <p className="text-body font-sans text-sm sm:text-base leading-relaxed max-w-xl">
            {project.description}
          </p>

          {/* Architectural Technical Ledger */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="border border-white/10 bg-white/[0.02] p-4 font-mono text-xs space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-white/40 pb-1 border-b border-white/5">
                TECHNICAL BENCHMARK / KEY HIGHLIGHTS
              </div>
              <div className="space-y-1.5 pt-1 text-white/80">
                {project.highlights.map((h, i) => (
                  <div key={h} className="flex items-start gap-2">
                    <span className="text-[var(--accent-primary)] select-none">0{i + 1}</span>
                    <span className="text-white/90">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills in Bracketed Typography */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              FRAMEWORK & STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/15 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-white/80"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </div>

          {/* Anti-Slop Architectural Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 border border-white/20 bg-white/[0.04] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-all hover:bg-white hover:text-black cursor-pointer"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>[ VIEW SOURCE ]</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => onInspect(project)}
              className="group inline-flex items-center gap-2 border border-white/10 bg-transparent px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-soft hover:text-white hover:border-white/30 transition-all cursor-pointer"
            >
              <EyeIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>[ INSPECT ARTIFACT ]</span>
            </button>
          </div>
        </div>

        {/* Right: Technical Blueprint / Screenshot Frame */}
        <figure
          onClick={() => onInspect(project)}
          className="group/img cursor-pointer space-y-2 relative"
          title="Click to inspect artifact"
        >
          <div className="relative aspect-video w-full overflow-hidden border border-white/15 bg-black/60 p-1.5 transition-all duration-300 group-hover/img:border-white/40">
            {/* Viewport Corner Registration Marks */}
            <span className="absolute top-2 left-2 z-10 font-mono text-[10px] text-white/40 select-none">┌</span>
            <span className="absolute top-2 right-2 z-10 font-mono text-[10px] text-white/40 select-none">┐</span>
            <span className="absolute bottom-2 left-2 z-10 font-mono text-[10px] text-white/40 select-none">└</span>
            <span className="absolute bottom-2 right-2 z-10 font-mono text-[10px] text-white/40 select-none">┘</span>

            <Picture
              {...project.image}
              className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              imgClassName="h-full w-full object-cover"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="border border-white/30 bg-black/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white">
                [ + EXPAND VIEW ]
              </span>
            </div>
          </div>

          <figcaption className="flex items-center justify-between font-mono text-[11px] text-soft px-1">
            <span>FIGURE_{indexFormatted}: {project.title.toUpperCase()}</span>
            <span className="text-[var(--accent-primary)] group-hover/img:underline">
              ENLARGE ↗
            </span>
          </figcaption>
        </figure>
      </div>
    </article>
  )
}
