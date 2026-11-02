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
        className="fixed inset-0 bg-[#080a11]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="border-line bg-paper text-ink relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="border-line flex items-start justify-between border-b pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="glass-card text-[var(--accent-primary)] border border-[var(--accent-border)] rounded-md px-2.5 py-0.5 font-mono text-xs font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-muted font-mono text-xs">• {project.year}</span>
            </div>
            <h3 id="modal-title" className="text-ink font-display text-2xl sm:text-3xl font-extrabold mt-2">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-[var(--accent-primary)] font-mono text-sm mt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="glass-card text-soft hover:text-ink rounded-xl p-2 transition-colors cursor-pointer"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Screenshot Frame */}
        <div className="border-line bg-[#05070c] my-6 overflow-hidden rounded-xl border p-2 shadow-inner">
          <Picture
            {...project.image}
            className="w-full max-h-[60vh] object-contain rounded-lg"
            imgClassName="w-full h-auto max-h-[60vh] object-contain mx-auto rounded-lg"
          />
        </div>

        {/* Technical Context */}
        <div className="space-y-4">
          <p className="text-body font-sans text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <div className="space-y-1.5">
              <span className="text-muted font-mono text-xs block uppercase tracking-wider font-semibold">
                Architecture & Engineering Notes
              </span>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((item) => (
                  <span
                    key={item}
                    className="glass-card text-ink border border-line rounded-lg px-3 py-1 font-mono text-xs"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="space-y-1.5 pt-1">
            <span className="text-muted font-mono text-xs block uppercase tracking-wider font-semibold">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-sand text-soft rounded-md px-2.5 py-1 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="border-line flex flex-wrap items-center justify-between gap-3 border-t pt-5 mt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 active:scale-95 text-white inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md"
              style={{
                background: 'var(--accent-gradient)',
                boxShadow: '0 0 14px var(--accent-glow)',
              }}
            >
              <GithubIcon className="h-4 w-4" />
              <span>View Repository on GitHub</span>
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-soft hover:text-ink font-mono text-xs px-3 py-2 cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
