import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../motion/gsap'
import {
  DURATION_LENIS,
  DURATION_SCROLL,
  MQ_REDUCED_MOTION,
  SCROLL_OFFSET,
} from '../motion/constants'

let lenisInstance: Lenis | null = null

const tickerCallback = (time: number) => {
  lenisInstance?.raf(time * 1000)
}

export function initSmoothScroll(): Lenis | null {
  if (typeof window === 'undefined') return null

  if (lenisInstance) return lenisInstance

  const isReducedMotion = window.matchMedia(MQ_REDUCED_MOTION).matches

  if (isReducedMotion) {
    return null
  }

  const lenis = new Lenis({
    duration: DURATION_LENIS,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.8,
  })

  lenisInstance = lenis

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add(tickerCallback)
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function destroySmoothScroll(): void {
  gsap.ticker.remove(tickerCallback)
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}

export function smoothScrollTo(target: string | HTMLElement, offset: number = SCROLL_OFFSET) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset,
      duration: DURATION_SCROLL,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  } else if (typeof window !== 'undefined') {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}
