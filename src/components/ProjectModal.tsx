import { useEffect, useRef } from 'react'
import { ArrowUpRightIcon, CloseIcon, GithubIcon } from './Icons'
import { Picture } from './Picture'
import type { Project } from '../types/project'
import { getLenis } from '../utils/lenis'
import { useMagnetic } from '../hooks/useMagnetic'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const githubBtnRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(githubBtnRef, 0.25)

  useEffect(() => {
    if (!project) return

    const lenis = getLenis()
    lenis?.stop()
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      lenis?.start()
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
        className="fixed inset-0 bg-stage/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Scrollable Modal Dialog with data-lenis-prevent */}
      <div
        data-lenis-prevent
        className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-sm border border-edge bg-card p-6 sm:p-10 text-ink shadow-[0_16px_48px_rgba(24,26,29,0.28)]"
      >
        {/* Header */}
        <div className="border-b border-line pb-5 flex items-start justify-between gap-4">
          <div>
            <h3 id="modal-title" className="text-ink font-display text-3xl sm:text-4xl leading-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-accent text-sm sm:text-base font-medium mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="text-soft hover:text-ink p-2 rounded-sm transition-colors cursor-pointer"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Screenshot Viewport */}
        <div className="rounded-sm border border-line bg-paper-subtle my-6 p-2 overflow-hidden">
          <Picture
            {...project.image}
            className="w-full max-h-[55vh] object-contain"
            imgClassName="w-full h-auto max-h-[55vh] object-contain mx-auto"
          />
        </div>

        {/* Technical Specs & Description */}
        <div className="space-y-6">
          <p className="text-body text-sm sm:text-base leading-[1.65] max-w-[65ch]">
            {project.description}
          </p>

          {/* Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono rounded-sm border border-line bg-paper px-2.5 py-1 text-xs text-body"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Modal Actions */}
          <div className="border-t border-line pt-6 flex flex-wrap items-center justify-between gap-4">
            <a
              ref={githubBtnRef}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-hover transition-colors will-change-transform"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View Source on GitHub</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-soft hover:text-ink transition-colors cursor-pointer text-sm font-medium px-3 py-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
