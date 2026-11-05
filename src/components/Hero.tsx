import { useRef } from 'react'
import { gsap } from '../motion/gsap'
import { scheduleScrollRefresh } from '../motion/scrollRefresh'
import {
  DURATION_BASE,
  DURATION_FAST,
  DURATION_MEDIUM,
  DURATION_REVEAL,
  DURATION_SLOW,
  DURATION_WIPE,
  EASE_EXPO,
  EASE_OUT,
} from '../motion/constants'
import { useMotion } from '../motion/useMotion'
import { scrollToSection } from '../motion/smoothScroll'
import { SITE } from '../content/site'
import { useMagnetic } from '../hooks/useMagnetic'
import { StatusStrip } from './hero/StatusStrip'
import { Card } from './ui/Card'
import { ArrowDownIcon, AwardIcon, EyeIcon, MailIcon } from './ui/Icons'
import { LinkButton } from './ui/LinkButton'

const CUTOUT_DRIFT_PX = 6
const ARCH_DRIFT_PX = -3

export function Hero() {
  const headerRef = useRef<HTMLElement>(null)
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  const cutoutRef = useRef<HTMLImageElement>(null)
  const archRef = useRef<HTMLDivElement>(null)

  useMagnetic(primaryBtnRef, 0.25)

  useMotion(headerRef, () => {
    const tl = gsap.timeline({ defaults: { ease: EASE_EXPO } })

    tl.from('.hero-strip', {
      y: -16,
      opacity: 0,
      duration: DURATION_MEDIUM,
    })
      .fromTo(
        '.hero-portrait-wipe',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: DURATION_WIPE },
        0.1,
      )
      .from(
        '.hero-word',
        {
          yPercent: 110,
          opacity: 0,
          duration: DURATION_SLOW,
          stagger: 0.08,
        },
        0.2,
      )
      .from(
        ['.hero-role', '.hero-lead'],
        {
          y: 20,
          opacity: 0,
          duration: DURATION_REVEAL,
          stagger: 0.08,
        },
        '-=0.5',
      )
      .from(
        '.hero-action',
        {
          y: 16,
          opacity: 0,
          duration: DURATION_BASE,
          stagger: 0.07,
        },
        '-=0.45',
      )
      .fromTo(
        '.hero-bracket',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: DURATION_BASE, stagger: 0.04 },
        '-=0.5',
      )
      .from(
        '.hero-pill',
        {
          y: 14,
          opacity: 0,
          duration: DURATION_BASE,
        },
        '-=0.4',
      )
  })

  useMotion(
    headerRef,
    () => {
      const headerEl = headerRef.current
      const cutoutEl = cutoutRef.current
      const archEl = archRef.current
      if (!headerEl || !cutoutEl || !archEl) return

      const cutX = gsap.quickTo(cutoutEl, 'x', { duration: DURATION_FAST, ease: EASE_OUT })
      const cutY = gsap.quickTo(cutoutEl, 'y', { duration: DURATION_FAST, ease: EASE_OUT })
      const archX = gsap.quickTo(archEl, 'x', { duration: DURATION_FAST, ease: EASE_OUT })
      const archY = gsap.quickTo(archEl, 'y', { duration: DURATION_FAST, ease: EASE_OUT })

      const handleMove = (e: MouseEvent) => {
        const rect = headerEl.getBoundingClientRect()
        const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2

        cutX(nx * CUTOUT_DRIFT_PX)
        cutY(ny * CUTOUT_DRIFT_PX)
        archX(nx * ARCH_DRIFT_PX)
        archY(ny * ARCH_DRIFT_PX)
      }

      const handleLeave = () => {
        cutX(0)
        cutY(0)
        archX(0)
        archY(0)
      }

      headerEl.addEventListener('mousemove', handleMove)
      headerEl.addEventListener('mouseleave', handleLeave)

      return () => {
        headerEl.removeEventListener('mousemove', handleMove)
        headerEl.removeEventListener('mouseleave', handleLeave)
        gsap.set([cutoutEl, archEl], { x: 0, y: 0 })
      }
    },
    { finePointer: true },
  )

  const words = SITE.name.split(' ')

  return (
    <Card
      as="header"
      ref={headerRef}
      id="top"
      className="relative overflow-hidden mb-5 desk:mb-8 pb-10 desk:pb-14"
    >
      {/* Status Strip */}
      <StatusStrip />

      {/* Hero Grid */}
      <div className="relative grid grid-cols-1 desk:grid-cols-[var(--spacing-portrait)_1fr] justify-items-center desk:justify-items-stretch text-center desk:text-left gap-10 desk:gap-16 items-center pt-10 desk:pt-12">
        {/* Portrait: Glow, Arch, Cutout, Brackets, Pill */}
        <div className="relative w-[240px] desk:w-portrait aspect-[1414/1700] mb-6">
          <div className="hero-portrait-wipe relative h-full w-full will-change-[clip-path]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-sand)_80%,transparent)_0%,transparent_70%)] blur-[10px]"
            />
            <div
              ref={archRef}
              aria-hidden="true"
              className="absolute left-[4%] right-[4%] bottom-0 h-[80%] bg-sand rounded-t-full will-change-transform"
            />
            <img
              ref={cutoutRef}
              src={SITE.portrait.src}
              alt={SITE.portrait.alt}
              onLoad={scheduleScrollRefresh}
              className="absolute inset-0 w-full h-full object-cover object-bottom will-change-transform"
            />
          </div>

          <span
            aria-hidden="true"
            className="hero-bracket absolute -top-3 -left-3 w-[18px] h-[18px] border-t-[1.5px] border-l-[1.5px] border-accent will-change-transform"
          />
          <span
            aria-hidden="true"
            className="hero-bracket absolute -top-3 -right-3 w-[18px] h-[18px] border-t-[1.5px] border-r-[1.5px] border-accent will-change-transform"
          />
          <span
            aria-hidden="true"
            className="hero-bracket absolute -bottom-3 -left-3 w-[18px] h-[18px] border-b-[1.5px] border-l-[1.5px] border-accent will-change-transform"
          />
          <span
            aria-hidden="true"
            className="hero-bracket absolute -bottom-3 -right-3 w-[18px] h-[18px] border-b-[1.5px] border-r-[1.5px] border-accent will-change-transform"
          />

          <div className="hero-pill absolute left-1/2 -bottom-[14px] -translate-x-1/2 flex items-center gap-[0.4rem] py-[0.2rem] px-3 bg-panel border border-line rounded-full font-mono text-[11px] text-soft whitespace-nowrap will-change-transform">
            <AwardIcon />
            <span>{SITE.captionPill}</span>
          </div>
        </div>

        {/* Hero Text */}
        <div>
          <h1
            aria-label={SITE.name}
            className="text-[2.6rem] desk:text-[3.9rem] font-bold leading-[1.1] text-ink"
          >
            {words.map((word) => (
              <span key={word} className="inline-block overflow-hidden pb-1 mr-[0.22em] last:mr-0">
                <span className="hero-word inline-block will-change-transform">{word}</span>
              </span>
            ))}
          </h1>

          <p className="hero-role font-display font-medium text-[1.5rem] desk:text-[1.9rem] text-soft mt-3 mb-5 will-change-transform">
            {SITE.role}
          </p>

          <p className="hero-lead text-[1.1rem] max-w-[34rem] text-body mx-auto desk:mx-0 mb-0 will-change-transform">
            {SITE.shortBio}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center desk:justify-start gap-3 mt-7">
            <LinkButton
              ref={primaryBtnRef}
              variant="primary"
              href={SITE.resumeUrl}
              external
              className="hero-action"
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
              className="hero-action"
            >
              <span>View projects</span>
              <ArrowDownIcon />
            </LinkButton>

            <LinkButton
              variant="icon"
              href={SITE.githubUrl}
              external
              ariaLabel="GitHub"
              className="hero-action"
            >
              <img
                src={SITE.githubIconUrl}
                alt="GitHub"
                className="w-[22px] h-[22px] object-contain"
              />
            </LinkButton>

            <LinkButton
              variant="icon"
              href={SITE.linkedinUrl}
              external
              ariaLabel="LinkedIn"
              className="hero-action"
            >
              <img
                src={SITE.linkedinIconUrl}
                alt="LinkedIn"
                className="w-[22px] h-[22px] object-contain"
              />
            </LinkButton>

            <LinkButton variant="icon" href={SITE.email} ariaLabel="Email" className="hero-action">
              <MailIcon />
            </LinkButton>
          </div>
        </div>
      </div>
    </Card>
  )
}
