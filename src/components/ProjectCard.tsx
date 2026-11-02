import { GithubIcon } from './Icons'
import { Picture } from './Picture'
import type { Project } from '../types/project'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 items-start gap-x-10 gap-y-6 md:grid-cols-[minmax(0,1fr)_15rem]">
      <div className="space-y-4">
        <h3 className="text-ink border-line border-b pb-2 text-3xl font-bold tracking-tight italic">
          {project.title}
        </h3>

        <div className="flex">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-accent text-accent hover:bg-tint inline-flex items-center gap-1.5 rounded border px-3 py-1.5 font-serif text-sm transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>

        <p className="text-body text-base leading-relaxed">{project.description}</p>
      </div>

      <figure className="space-y-2">
        <Picture {...project.image} className="w-full" imgClassName="h-auto w-full" />
        <figcaption className="text-muted text-sm">
          Screenshot of <em>{project.title}</em>
        </figcaption>
      </figure>
    </article>
  )
}