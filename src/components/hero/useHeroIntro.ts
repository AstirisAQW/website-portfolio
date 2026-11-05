import type { RefObject } from 'react'
import { gsap } from '../../motion/gsap'
import {
  DURATION_BASE,
  DURATION_MEDIUM,
  DURATION_REVEAL,
  DURATION_SLOW,
  DURATION_WIPE,
  EASE_EXPO,
} from '../../motion/constants'
import { useMotion } from '../../motion/useMotion'
import { HERO_PARTS } from './heroParts'

export function useHeroIntro(scope: RefObject<HTMLElement | null>): void {
  useMotion(scope, () => {
    const tl = gsap.timeline({ defaults: { ease: EASE_EXPO } })

    tl.from(`.${HERO_PARTS.strip}`, { y: -16, opacity: 0, duration: DURATION_MEDIUM })
      .fromTo(
        `.${HERO_PARTS.portraitWipe}`,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: DURATION_WIPE },
        0.1,
      )
      .from(
        `.${HERO_PARTS.word}`,
        { yPercent: 110, opacity: 0, duration: DURATION_SLOW, stagger: 0.08 },
        0.2,
      )
      .from(
        [`.${HERO_PARTS.role}`, `.${HERO_PARTS.lead}`],
        { y: 20, opacity: 0, duration: DURATION_REVEAL, stagger: 0.08 },
        '-=0.5',
      )
      .from(
        `.${HERO_PARTS.action}`,
        { y: 16, opacity: 0, duration: DURATION_BASE, stagger: 0.07 },
        '-=0.45',
      )
      .fromTo(
        `.${HERO_PARTS.bracket}`,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: DURATION_BASE, stagger: 0.04 },
        '-=0.5',
      )
      .from(`.${HERO_PARTS.pill}`, { y: 14, opacity: 0, duration: DURATION_BASE }, '-=0.4')
  })
}
