import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function initSmoothScroll(): Lenis | null {
  if (typeof window === 'undefined') return null

  // If already initialized, return it
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

  // Synchronize Lenis scroll with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  // Use GSAP's ticker to drive Lenis requestAnimationFrame
  const tickerCallback = (time: number) => {
    lenis.raf(time * 1000)
  }

  gsap.ticker.add(tickerCallback)
  gsap.ticker.lagSmoothing(0)

  // Store cleanup handler
  window.addEventListener(
    'unload',
    () => {
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
      lenisInstance = null
    },
    { once: true }
  )

  return lenis
}

export function getLenis(): Lenis | null {
  return lenisInstance
}

export function smoothScrollTo(target: string | HTMLElement, offset: number = -68) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset,
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}

