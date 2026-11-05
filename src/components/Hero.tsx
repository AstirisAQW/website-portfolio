import { useRef } from 'react'
import { gsap } from '../motion/gsap'
import {
  DURATION_BASE,
  DURATION_MEDIUM,
  DURATION_REVEAL,
  DURATION_SLOW,
  DURATION_WIPE,
  EASE_EXPO,
} from '../motion/constants'
import { useMotion } from '../motion/useMotion'
import { SITE } from '../content/site'
import { HeroActions } from './hero/HeroActions'
import { PortraitFrame } from './hero/PortraitFrame'
import { StatusStrip } from './hero/StatusStrip'
import { Card } from './ui/Card'

export function Hero() {
  const headerRef = useRef<HTMLElement>(null)

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
        <PortraitFrame headerRef={headerRef} />

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
          <HeroActions />
        </div>
      </div>
    </Card>
  )
}
