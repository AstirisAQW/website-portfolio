import { GithubIcon, LinkedinIcon } from './Icons'
import { SITE } from '../content/site'

const LINKS = [
  { label: 'GitHub Profile', href: SITE.githubUrl, Icon: GithubIcon, colors: 'bg-ink hover:bg-accent' },
  {
    label: 'LinkedIn Profile',
    href: SITE.linkedinUrl,
    Icon: LinkedinIcon,
    colors: 'bg-linkedin hover:bg-linkedin-strong',
  },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {LINKS.map(({ label, href, Icon, colors }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          aria-label={label}
          className={`${colors} rounded p-2 text-white shadow-2xs transition-colors`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}