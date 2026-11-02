import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TICKER_ITEMS = [
  'MIPS ARCHITECTURE',
  'TEMPORAL GRAPH KINEMATICS',
  'FINITE AUTOMATA SIMULATION',
  'HYBRID MERGE SORT',
  'FULL-STACK RUNTIMES',
  'REACT 19 & SUPABASE',
  'CISCO CERTIFIED PROTOCOLS',
  'USTP CUM LAUDE',
]

export function KineticTicker() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const el = tickerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Scrub ticker position as the user scrolls down
      gsap.to(el, {
        x: '-30%',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    }, tickerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative overflow-hidden border-y border-line/60 bg-paper-subtle/70 py-4 select-none">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap will-change-transform font-display text-sm sm:text-base font-bold tracking-widest text-soft/70 uppercase"
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-6 px-4">
            <span className="text-ink/80 hover:text-[var(--accent-primary)] transition-colors">
              {item}
            </span>
            <span className="text-[var(--accent-primary)] font-mono text-xs">/</span>
          </div>
        ))}
      </div>
    </div>
  )
}

