import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'
import { DURATION_LENIS, DURATION_SCROLL, MQ_REDUCED_MOTION, SCROLL_OFFSET } from './constants'
import { scheduleScrollRefresh } from './scrollRefresh'

let lenisInstance: Lenis | null = null

const tickerCallback = (time: number) => {
  lenisInstance?.raf(time * 1000)
}

export function useSmoothScroll(): void {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const isReducedMotion = window.matchMedia(MQ_REDUCED_MOTION).matches

    if (!isReducedMotion && !lenisInstance) {
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
    }

    window.addEventListener('load', scheduleScrollRefresh)
    document.fonts?.ready.then(() => {
      scheduleScrollRefresh()
    })

    return () => {
      window.removeEventListener('load', scheduleScrollRefresh)
      gsap.ticker.remove(tickerCallback)
      gsap.ticker.lagSmoothing(500, 33)
      if (lenisInstance) {
        lenisInstance.destroy()
        lenisInstance = null
      }
    }
  }, [])
}

export function getScrollBehavior(prefersReducedMotion: boolean): ScrollBehavior {
  return prefersReducedMotion ? 'auto' : 'smooth'
}

export function scrollToSection(id: string, offset: number = SCROLL_OFFSET): void {
  const selector = id.startsWith('#') ? id : `#${id}`

  if (lenisInstance) {
    lenisInstance.scrollTo(selector, {
      offset,
      duration: DURATION_SCROLL,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  } else if (typeof window !== 'undefined') {
    const el = document.querySelector(selector)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset
      const isReducedMotion = window.matchMedia(MQ_REDUCED_MOTION).matches
      window.scrollTo({ top, behavior: getScrollBehavior(isReducedMotion) })
    }
  }
}
