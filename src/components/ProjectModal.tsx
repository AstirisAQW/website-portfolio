import { useEffect } from 'react'
import { ArrowUpRightIcon, CloseIcon, GithubIcon } from './Icons'
import { Picture } from './Picture'
import type { Project } from '../types/project'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="card-architectural relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-white/20 p-6 sm:p-10 shadow-2xl">
        {/* Corner registration marks */}
        <span className="absolute top-2 left-2 font-mono text-[9px] text-white/30 select-none">+</span>
        <span className="absolute top-2 right-2 font-mono text-[9px] text-white/30 select-none">+</span>
        <span className="absolute bottom-2 left-2 font-mono text-[9px] text-white/30 select-none">+</span>
        <span className="absolute bottom-2 right-2 font-mono text-[9px] text-white/30 select-none">+</span>

        {/* Header */}
        <div className="border-b border-white/10 pb-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-[var(--accent-primary)] font-bold">
                [{project.categoryLabel}]
              </span>
              <span className="text-white/30">•</span>
              <span className="text-white/50">VERSION {project.year}</span>
            </div>
            <h3 id="modal-title" className="text-white font-display text-3xl sm:text-4xl font-black mt-2">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-white/70 font-mono text-xs sm:text-sm uppercase tracking-wider mt-1">
                // {project.subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="border border-white/15 bg-white/[0.03] text-white p-2.5 hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Screenshot Viewport */}
        <div className="border border-white/15 bg-black my-6 p-2 shadow-2xl">
          <Picture
            {...project.image}
            className="w-full max-h-[60vh] object-contain"
            imgClassName="w-full h-auto max-h-[60vh] object-contain mx-auto"
          />
        </div>

        {/* Technical Specs & Description */}
        <div className="space-y-6">
          <p className="font-sans text-base text-white/80 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <div className="border border-white/10 bg-white/[0.02] p-4 font-mono text-xs space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-white/40 border-b border-white/5 pb-1">
                KEY TECHNICAL HIGHLIGHTS
              </div>
              <div className="space-y-1.5 pt-1">
                {project.highlights.map((item, i) => (
                  <div key={item} className="flex items-center gap-2 text-white/90">
                    <span className="text-[var(--accent-primary)] font-bold">0{i + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack Tags */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
              STACK REPOSITORY
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-white/80"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-white bg-white px-6 py-3 font-bold uppercase tracking-wider text-black hover:bg-transparent hover:text-white transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              <span>[ VIEW CODE ON GITHUB ]</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-white/50 hover:text-white uppercase tracking-wider px-3 py-2 cursor-pointer"
            >
              [ CLOSE VIEW ]
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
