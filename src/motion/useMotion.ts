import type { RefObject } from 'react'
import { gsap, useGSAP } from './gsap'
import { MQ_DESKTOP, MQ_FINE_POINTER, MQ_NO_REDUCED_MOTION } from './constants'

export interface UseMotionOptions {
  desktopOnly?: boolean
  finePointer?: boolean
  dependencies?: unknown[]
}

export function useMotion(
  scope: RefObject<HTMLElement | null>,
  setup: gsap.ContextFunc,
  options?: UseMotionOptions,
): void {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      const conditions = [MQ_NO_REDUCED_MOTION]

      if (options?.desktopOnly) {
        conditions.push(MQ_DESKTOP)
      }
      if (options?.finePointer) {
        conditions.push(MQ_FINE_POINTER)
      }

      mm.add(conditions.join(' and '), setup)

      return () => mm.revert()
    },
    { scope, dependencies: options?.dependencies },
  )
}
