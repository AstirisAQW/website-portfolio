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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-sm border border-white/15 bg-[#0f1118] p-6 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="border-b border-white/10 pb-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-[var(--accent-primary)] font-medium">
                {project.categoryLabel}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-white/50">{project.year}</span>
            </div>
            <h3 id="modal-title" className="text-white font-display text-2xl sm:text-3xl font-bold mt-2">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-[var(--accent-primary)] text-sm font-medium mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="text-white/60 hover:text-white p-2 rounded-sm transition-colors cursor-pointer"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Screenshot Viewport */}
        <div className="rounded-sm border border-white/10 bg-black/40 my-6 p-2 overflow-hidden">
          <Picture
            {...project.image}
            className="w-full max-h-[55vh] object-contain"
            imgClassName="w-full h-auto max-h-[55vh] object-contain mx-auto"
          />
        </div>

        {/* Technical Specs & Description */}
        <div className="space-y-6">
          <p className="text-body text-sm sm:text-base leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <div className="rounded-sm border border-white/10 bg-white/[0.01] p-4 text-xs space-y-2">
              <div className="text-[10px] uppercase font-mono tracking-wider text-white/40 border-b border-white/5 pb-1">
                Key Highlights
              </div>
              <ul className="space-y-1.5 pt-1">
                {project.highlights.map((item, i) => (
                  <li key={item} className="flex items-center gap-2.5 text-white/90">
                    <span className="text-[var(--accent-primary)] font-mono">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Modal Actions */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-5 py-2.5 text-xs font-medium text-black hover:bg-neutral-200 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View Source on GitHub</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors cursor-pointer text-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
