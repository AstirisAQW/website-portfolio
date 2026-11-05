import { useEffect, useState } from 'react'
import type { SectionId } from '../content/sections'

const OBSERVER_ROOT_MARGIN = '-40% 0px -55% 0px'
const PAGE_END_THRESHOLD_PX = 2

export function isAtPageEnd(scrollY: number, innerHeight: number, documentHeight: number): boolean {
  return scrollY + innerHeight >= documentHeight - PAGE_END_THRESHOLD_PX
}

export function resolveActiveSection(
  ids: readonly SectionId[],
  currentId: SectionId,
  scrollY: number,
  innerHeight: number,
  documentHeight: number,
): SectionId {
  const lastId = ids[ids.length - 1]
  if (lastId && isAtPageEnd(scrollY, innerHeight, documentHeight)) {
    return lastId
  }
  return currentId
}

/** Returns the id of the section crossing a thin band near the middle of the viewport. */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0] ?? 'about')

  useEffect(() => {
    let latestIntersecting: SectionId = ids[0] ?? 'about'

    const updateActive = () => {
      setActive(
        resolveActiveSection(
          ids,
          latestIntersecting,
          window.scrollY,
          window.innerHeight,
          document.documentElement.scrollHeight,
        ),
      )
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            latestIntersecting = entry.target.id as SectionId
          }
        }
        updateActive()
      },
      { rootMargin: OBSERVER_ROOT_MARGIN },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    window.addEventListener('scroll', updateActive, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActive)
      observer.disconnect()
    }
  }, [ids])

  return active
}
