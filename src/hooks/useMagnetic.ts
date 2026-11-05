import { type RefObject } from 'react'
import { gsap, useGSAP } from '../motion/gsap'
import { DURATION_FAST, EASE_OUT, MQ_FINE_POINTER, MQ_NO_REDUCED_MOTION } from '../motion/constants'

export function useMagnetic<T extends HTMLElement>(ref: RefObject<T | null>, strength = 0.28) {
  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const mm = gsap.matchMedia()

      mm.add(`${MQ_NO_REDUCED_MOTION} and ${MQ_FINE_POINTER}`, () => {
        const xTo = gsap.quickTo(el, 'x', { duration: DURATION_FAST, ease: EASE_OUT })
        const yTo = gsap.quickTo(el, 'y', { duration: DURATION_FAST, ease: EASE_OUT })

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
    { scope: ref },
  )
}
