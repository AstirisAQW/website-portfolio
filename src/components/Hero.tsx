import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../motion/gsap'
import { SITE } from '../content/site'
import { useMagnetic } from '../hooks/useMagnetic'
import { smoothScrollTo } from '../utils/lenis'

const SCROLL_OFFSET = -16
const CLOCK_INTERVAL_MS = 1000
const CUTOUT_DRIFT_PX = 6
const ARCH_DRIFT_PX = -3

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: SITE.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

export function Hero() {
  const headerRef = useRef<HTMLElement>(null)
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  const cutoutRef = useRef<HTMLImageElement>(null)
  const archRef = useRef<HTMLDivElement>(null)
  const [clock, setClock] = useState<string>(() => timeFormatter.format(new Date()))

  useMagnetic(primaryBtnRef, 0.25)

  useEffect(() => {
    const id = window.setInterval(() => {
      setClock(timeFormatter.format(new Date()))
    }, CLOCK_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

        tl.from('.hero-strip', {
          y: -16,
          opacity: 0,
          duration: 0.7,
        })
          .fromTo(
            '.hero-portrait-wipe',
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.95 },
            0.1,
          )
          .from(
            '.hero-word',
            {
              yPercent: 110,
              opacity: 0,
              duration: 0.8,
              stagger: 0.08,
            },
            0.2,
          )
          .from(
            ['.hero-role', '.hero-lead'],
            {
              y: 20,
              opacity: 0,
              duration: 0.75,
              stagger: 0.08,
            },
            '-=0.5',
          )
          .from(
            '.hero-action',
            {
              y: 16,
              opacity: 0,
              duration: 0.65,
              stagger: 0.07,
            },
            '-=0.45',
          )
          .fromTo(
            '.hero-bracket',
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.65, stagger: 0.04 },
            '-=0.5',
          )
          .from(
            '.hero-pill',
            {
              y: 14,
              opacity: 0,
              duration: 0.65,
            },
            '-=0.4',
          )
      })

      mm.add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
        const headerEl = headerRef.current
        const cutoutEl = cutoutRef.current
        const archEl = archRef.current
        if (!headerEl || !cutoutEl || !archEl) return

        const cutX = gsap.quickTo(cutoutEl, 'x', { duration: 0.6, ease: 'power3.out' })
        const cutY = gsap.quickTo(cutoutEl, 'y', { duration: 0.6, ease: 'power3.out' })
        const archX = gsap.quickTo(archEl, 'x', { duration: 0.6, ease: 'power3.out' })
        const archY = gsap.quickTo(archEl, 'y', { duration: 0.6, ease: 'power3.out' })

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
      })
    },
    { scope: headerRef },
  )

  const words = SITE.name.split(' ')

  return (
    <header
      ref={headerRef}
      id="top"
      className="relative overflow-hidden mb-5 desk:mb-8 p-pad-sm pb-10 desk:p-pad desk:pb-14 bg-panel border border-line rounded-panel-sm desk:rounded-panel"
    >
      {/* Status Strip */}
      <div className="hero-strip relative flex justify-between items-center gap-4 py-2 px-4 bg-panel border border-line rounded-strip font-mono text-[12px] leading-[1.4] will-change-transform">
        <span className="flex items-center flex-wrap gap-2">
          <span className="h-[10px] w-[10px] rounded-full bg-ok" aria-hidden="true" />
          <strong className="text-ink font-semibold">{SITE.statusText}</strong>
          <span className="text-faint" aria-hidden="true">
            ·
          </span>
          <span className="text-soft">{SITE.location}</span>
        </span>
        <span className="hidden desk:inline whitespace-nowrap" aria-hidden="true">
          <span className="text-soft">{SITE.clockLabel} </span>
          <strong className="text-ink font-semibold tabular-nums">{clock}</strong>
        </span>
      </div>

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
              onLoad={() => ScrollTrigger.refresh()}
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
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="w-[13px] h-[13px] text-accent"
            >
              <circle cx="12" cy="9" r="5" />
              <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
            </svg>
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
            <a
              ref={primaryBtnRef}
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-action inline-flex items-center gap-[0.6rem] py-[0.65rem] px-5 border border-accent rounded-btn font-display font-medium text-[0.95rem] bg-accent text-panel hover:bg-accent-hover hover:border-accent-hover transition-colors no-underline will-change-transform"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-[18px] h-[18px]"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>View resume</span>
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('#projects', SCROLL_OFFSET)
              }}
              className="hero-action inline-flex items-center gap-[0.6rem] py-[0.65rem] px-5 border border-line rounded-btn font-display font-medium text-[0.95rem] bg-panel text-ink hover:border-ink transition-colors no-underline will-change-transform"
            >
              <span>View projects</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-[18px] h-[18px]"
              >
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>

            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero-action w-[44px] h-[44px] inline-flex items-center justify-center bg-panel border border-line rounded-btn text-ink hover:border-ink transition-colors will-change-transform"
            >
              <img
                src={SITE.githubIconUrl}
                alt="GitHub"
                className="w-[22px] h-[22px] object-contain"
              />
            </a>

            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero-action w-[44px] h-[44px] inline-flex items-center justify-center bg-panel border border-line rounded-btn text-ink hover:border-ink transition-colors will-change-transform"
            >
              <img
                src={SITE.linkedinIconUrl}
                alt="LinkedIn"
                className="w-[22px] h-[22px] object-contain"
              />
            </a>

            <a
              href={SITE.email}
              aria-label="Email"
              className="hero-action w-[44px] h-[44px] inline-flex items-center justify-center bg-panel border border-line rounded-btn text-ink hover:border-ink transition-colors will-change-transform"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-[22px] h-[22px]"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 7l8.5 6 8.5-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
