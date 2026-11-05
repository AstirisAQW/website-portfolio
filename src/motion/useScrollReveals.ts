import type { RefObject } from 'react'
import { DURATION_DIVIDER, DURATION_SLOW, EASE_OUT } from './constants'
import { gsap } from './gsap'
import { useMotion } from './useMotion'

export function useScrollReveals(scope: RefObject<HTMLElement | null>): void {
  useMotion(scope, () => {
    // Shared .reveal fade-up
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 24,
        opacity: 0,
        duration: DURATION_SLOW,
        ease: EASE_OUT,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      })
    })

    // 1px section dividers scale in from left
    gsap.utils.toArray<HTMLElement>('.section-divider').forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: DURATION_DIVIDER,
          ease: EASE_OUT,
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
          },
        },
      )
    })
  })
}
