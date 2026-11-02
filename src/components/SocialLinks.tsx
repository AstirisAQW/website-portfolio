import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from './Icons'
import { SITE } from '../content/site'

const LINKS = [
  {
    label: 'GitHub',
    handle: '@AstirisAQW',
    href: SITE.githubUrl,
    Icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    handle: 'joseph-deysolong',
    href: SITE.linkedinUrl,
    Icon: LinkedinIcon,
  },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {LINKS.map(({ label, handle, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={`${label} (${handle})`}
          aria-label={`${label}: ${handle}`}
          className="border-line bg-card hover:border-accent hover:text-accent group inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-xs text-body transition-colors shadow-2xs"
        >
          <Icon className="h-3.5 w-3.5 text-soft group-hover:text-accent transition-colors" />
          <span>{label}</span>
          <ArrowUpRightIcon className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  )
}
