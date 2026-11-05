import { ScrollTrigger } from './gsap'

const REFRESH_DEBOUNCE_MS = 120

let refreshTimeout: number | undefined

export function scheduleScrollRefresh(): void {
  if (typeof window === 'undefined') return
  if (refreshTimeout !== undefined) {
    window.clearTimeout(refreshTimeout)
  }
  refreshTimeout = window.setTimeout(() => {
    ScrollTrigger.refresh()
  }, REFRESH_DEBOUNCE_MS)
}
