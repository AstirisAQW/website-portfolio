import { useRef } from 'react'
import { SITE } from '../../content/site'
import { useMagnetic } from '../../hooks/useMagnetic'
import { scrollToSection } from '../../motion/smoothScroll'
import { ArrowDownIcon, EyeIcon, MailIcon } from '../ui/Icons'
import { LinkButton } from '../ui/LinkButton'
import { HERO_PARTS } from './heroParts'

const SOCIAL_ICONS = [
  { label: 'GitHub', href: SITE.githubUrl, src: SITE.githubIconUrl },
  { label: 'LinkedIn', href: SITE.linkedinUrl, src: SITE.linkedinIconUrl },
]

export function HeroActions() {
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(primaryBtnRef, 0.25)

  return (
    <div className="flex flex-wrap items-center justify-center desk:justify-start gap-3 mt-7">
      <LinkButton
        ref={primaryBtnRef}
        variant="primary"
        href={SITE.resumeUrl}
        external
        className={HERO_PARTS.action}
      >
        <EyeIcon />
        <span>View resume</span>
      </LinkButton>

      <LinkButton
        variant="outline"
        href="#projects"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('projects')
        }}
        className={HERO_PARTS.action}
      >
        <span>View projects</span>
        <ArrowDownIcon />
      </LinkButton>

      {SOCIAL_ICONS.map((item) => (
        <LinkButton
          key={item.label}
          variant="icon"
          href={item.href}
          external
          ariaLabel={item.label}
          className={HERO_PARTS.action}
        >
          <img src={item.src} alt={item.label} className="w-[22px] h-[22px] object-contain" />
        </LinkButton>
      ))}

      <LinkButton variant="icon" href={SITE.email} ariaLabel="Email" className={HERO_PARTS.action}>
        <MailIcon />
      </LinkButton>
    </div>
  )
}
