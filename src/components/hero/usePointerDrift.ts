import type { RefObject } from 'react'
import { gsap } from '../../motion/gsap'
import { DURATION_FAST, EASE_OUT } from '../../motion/constants'
import { useMotion } from '../../motion/useMotion'

const CUTOUT_DRIFT_PX = 6
const ARCH_DRIFT_PX = -3
const QUICK_OPTS = { duration: DURATION_FAST, ease: EASE_OUT }

export function usePointerDrift(
  headerRef: RefObject<HTMLElement | null>,
  cutoutRef: RefObject<HTMLElement | null>,
  archRef: RefObject<HTMLElement | null>,
): void {
  useMotion(
    headerRef,
    () => {
      const headerEl = headerRef.current
      const cutoutEl = cutoutRef.current
      const archEl = archRef.current
      if (!headerEl || !cutoutEl || !archEl) return

      const cutX = gsap.quickTo(cutoutEl, 'x', QUICK_OPTS)
      const cutY = gsap.quickTo(cutoutEl, 'y', QUICK_OPTS)
      const archX = gsap.quickTo(archEl, 'x', QUICK_OPTS)
      const archY = gsap.quickTo(archEl, 'y', QUICK_OPTS)
      const setDrift = (nx: number, ny: number) => {
        cutX(nx * CUTOUT_DRIFT_PX)
        cutY(ny * CUTOUT_DRIFT_PX)
        archX(nx * ARCH_DRIFT_PX)
        archY(ny * ARCH_DRIFT_PX)
      }
      const handleMove = (e: MouseEvent) => {
        const r = headerEl.getBoundingClientRect()
        setDrift(
          ((e.clientX - r.left) / r.width - 0.5) * 2,
          ((e.clientY - r.top) / r.height - 0.5) * 2,
        )
      }
      const handleLeave = () => setDrift(0, 0)

      headerEl.addEventListener('mousemove', handleMove)
      headerEl.addEventListener('mouseleave', handleLeave)
      return () => {
        headerEl.removeEventListener('mousemove', handleMove)
        headerEl.removeEventListener('mouseleave', handleLeave)
        gsap.set([cutoutEl, archEl], { x: 0, y: 0 })
      }
    },
    { finePointer: true },
  )
}
