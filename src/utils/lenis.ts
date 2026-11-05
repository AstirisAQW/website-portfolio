import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

const tickerCallback = (time: number) => {
  lenisInstance?.raf(time * 1000)
}

export function initSmoothScroll(): Lenis | null {
  if (typeof window === 'undefined') return null

  if (lenisInstance) return lenisInstance

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (isReducedMotion) {
    return null
  }

  const lenis = new Lenis({
    duration: 1.2,
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

const DEFAULT_SCROLL_OFFSET = -16

export function smoothScrollTo(
  target: string | HTMLElement,
  offset: number = DEFAULT_SCROLL_OFFSET,
) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset,
      duration: 1.0,
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
