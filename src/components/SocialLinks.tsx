import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from './Icons'
import { SITE } from '../content/site'

const LINKS = [
  {
    label: 'GITHUB',
    handle: 'AstirisAQW',
    href: SITE.githubUrl,
    Icon: GithubIcon,
  },
  {
    label: 'LINKEDIN',
    handle: 'joseph-deysolong',
    href: SITE.linkedinUrl,
    Icon: LinkedinIcon,
  },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      {LINKS.map(({ label, handle, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={`${label}: ${handle}`}
          aria-label={`${label}: ${handle}`}
          className="group flex items-center justify-between border border-white/10 bg-white/[0.02] p-2.5 font-mono text-xs text-white/70 hover:border-white/30 hover:bg-white/[0.05] hover:text-white transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Icon className="h-3.5 w-3.5 text-white/50 group-hover:text-white transition-colors" />
            <span className="text-[11px] font-semibold tracking-wider">[{label}]</span>
          </div>
          <ArrowUpRightIcon className="h-3 w-3 text-white/30 group-hover:text-white transition-colors" />
        </a>
      ))}
    </div>
  )
}
