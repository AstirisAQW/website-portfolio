import { useRef } from 'react'
import { SITE } from '../content/site'
import { HeroActions } from './hero/HeroActions'
import { HERO_PARTS } from './hero/heroParts'
import { PortraitFrame } from './hero/PortraitFrame'
import { StatusStrip } from './hero/StatusStrip'
import { useHeroIntro } from './hero/useHeroIntro'
import { Card } from './ui/Card'

export function Hero() {
  const headerRef = useRef<HTMLElement>(null)

  useHeroIntro(headerRef)

  const words = SITE.hero.name.split(' ')

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
            aria-label={SITE.hero.name}
            className="text-[2.6rem] desk:text-[3.9rem] font-bold leading-[1.1] text-ink"
          >
            {words.map((word) => (
              <span key={word} className="inline-block overflow-hidden pb-1 mr-[0.22em] last:mr-0">
                <span className={`${HERO_PARTS.word} inline-block`}>{word}</span>
              </span>
            ))}
          </h1>

          <p
            className={`${HERO_PARTS.role} font-display font-medium text-[1.5rem] desk:text-[1.9rem] text-soft mt-3 mb-5`}
          >
            {SITE.hero.role}
          </p>

          <p
            className={`${HERO_PARTS.lead} text-[1.1rem] max-w-[34rem] text-body mx-auto desk:mx-0 mb-0`}
          >
            {SITE.hero.shortBio}
          </p>

          {/* Actions */}
          <HeroActions />
        </div>
      </div>
    </Card>
  )
}
