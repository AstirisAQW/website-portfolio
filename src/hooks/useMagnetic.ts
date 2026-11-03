import { type RefObject } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export function useMagnetic<T extends HTMLElement>(ref: RefObject<T | null>, strength = 0.28) {
  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
        const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
        const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })

        const handleMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const relX = e.clientX - (rect.left + rect.width / 2)
          const relY = e.clientY - (rect.top + rect.height / 2)
          xTo(relX * strength)
          yTo(relY * strength)
        }

        const handleLeave = () => {
          xTo(0)
          yTo(0)
        }

        el.addEventListener('mousemove', handleMove)
        el.addEventListener('mouseleave', handleLeave)

        return () => {
          el.removeEventListener('mousemove', handleMove)
          el.removeEventListener('mouseleave', handleLeave)
          gsap.set(el, { x: 0, y: 0 })
        }
      })
    },
    { scope: ref }
  )
}

