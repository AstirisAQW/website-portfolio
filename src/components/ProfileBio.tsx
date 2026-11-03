import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Picture } from './Picture'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'
import { useMagnetic } from '../hooks/useMagnetic'
import { ArrowDownIcon } from './Icons'

gsap.registerPlugin(ScrollTrigger)

export function ProfileBio() {
  const heroRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  useMagnetic(ctaRef, 0.28)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

        tl.from('.hero-line-inner', {
          yPercent: 112,
          opacity: 0,
          duration: 0.95,
          stagger: 0.1,
        }).from(
          '.hero-fade',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          '-=0.55'
        )

        // Subtle scroll-driven drift on the SVG node-and-edge motif
        gsap.to('.hero-graph-primary', {
          y: -56,
          x: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to('.hero-graph-secondary', {
          y: -90,
          x: -24,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    },
    { scope: heroRef }
  )

  const [firstName, ...restName] = SITE.name.split(' ')
  const lastName = restName.join(' ')

  return (
    <div ref={heroRef} className="relative">
      {/* Subtle Kinematic Node-and-Edge Background Motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 680"
        fill="none"
        className="pointer-events-none absolute -top-12 -right-24 w-[115%] max-w-none h-[120%] opacity-65 select-none"
      >
        <g className="hero-graph-primary" stroke="var(--color-edge)" strokeWidth="1">
          <line x1="620" y1="80" x2="860" y2="160" />
          <line x1="860" y1="160" x2="1060" y2="95" />
          <line x1="860" y1="160" x2="940" y2="340" />
          <line x1="620" y1="80" x2="720" y2="290" />
          <line x1="720" y1="290" x2="940" y2="340" />
          <line x1="720" y1="290" x2="540" y2="430" />
          <line x1="940" y1="340" x2="1110" y2="470" />
          <circle cx="620" cy="80" r="4" fill="var(--color-paper)" />
          <circle cx="860" cy="160" r="5.5" fill="var(--accent-primary)" stroke="none" />
          <circle cx="1060" cy="95" r="3.5" fill="var(--color-paper)" />
          <circle cx="720" cy="290" r="4.5" fill="var(--color-paper)" />
          <circle cx="940" cy="340" r="4" fill="var(--color-paper)" />
          <circle cx="540" cy="430" r="3.5" fill="var(--color-paper)" />
          <circle cx="1110" cy="470" r="4" fill="var(--color-paper)" />
        </g>

        <g
          className="hero-graph-secondary"
          stroke="var(--color-line)"
          strokeWidth="1"
          strokeDasharray="4 6"
        >
          <line x1="480" y1="180" x2="620" y2="80" />
          <line x1="480" y1="180" x2="720" y2="290" />
          <line x1="940" y1="340" x2="820" y2="520" />
          <line x1="540" y1="430" x2="820" y2="520" />
          <circle cx="480" cy="180" r="3" fill="var(--color-muted)" stroke="none" />
          <circle cx="820" cy="520" r="3.5" fill="var(--color-muted)" stroke="none" />
        </g>
      </svg>

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 space-y-10 sm:space-y-14">
        {/* Small Role Line */}
        <div className="hero-fade flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <p className="text-sm sm:text-base font-medium text-accent tracking-tight">
            {SITE.role}
          </p>
        </div>

        {/* Oversized 10vw Display Serif Name */}
        <h1
          aria-label={SITE.name}
          className="font-display text-[clamp(3.85rem,10.5vw,9.75rem)] leading-[0.88] tracking-[-0.03em] text-ink select-text"
        >
          <span className="block overflow-hidden pb-2">
            <span className="hero-line-inner block will-change-transform">{firstName}</span>
          </span>
          <span className="block overflow-hidden pb-3">
            <span className="hero-line-inner block italic text-ink/95 sm:pl-[6vw] will-change-transform">
              {lastName}
            </span>
          </span>
        </h1>

        {/* Lower Editorial Bar: Statement, Single Primary CTA, and Small Tall Portrait Crop */}
        <div className="border-t border-line pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="hero-fade lg:col-span-7 space-y-6">
            <p className="text-body text-base sm:text-xl leading-[1.6] max-w-[54ch]">
              Building software across{' '}
              <span className="text-ink font-medium underline decoration-accent/50 decoration-1 underline-offset-4">
                low-level computer architecture
              </span>
              ,{' '}
              <span className="text-ink font-medium underline decoration-accent/50 decoration-1 underline-offset-4">
                graph machine learning kinematics
              </span>
              , and modern web platforms.
            </p>

            <div className="pt-1">
              <button
                ref={ctaRef}
                type="button"
                onClick={() => smoothScrollTo('#projects')}
                className="inline-flex items-center gap-3 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent-hover cursor-pointer shadow-[0_1px_2px_rgba(24,26,29,0.08),0_8px_24px_rgba(200,62,43,0.18)] will-change-transform"
              >
                <span>View Projects</span>
                <ArrowDownIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Small Tall Portrait Crop (Secondary Editorial Stamp) */}
          <div className="hero-fade lg:col-span-5 flex items-center lg:justify-end gap-5">
            <div className="relative w-24 sm:w-28 aspect-[3/4] shrink-0 overflow-hidden rounded-sm border border-edge bg-card shadow-[0_1px_2px_rgba(24,26,29,0.06),0_8px_20px_rgba(24,26,29,0.06)]">
              <Picture
                {...SITE.portrait}
                className="h-full w-full"
                imgClassName="h-full w-full object-cover object-top"
              />
            </div>
            <div className="space-y-1 text-sm text-soft">
              <p className="font-medium text-ink">{SITE.university}</p>
              <p className="font-mono text-xs text-muted">{SITE.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
