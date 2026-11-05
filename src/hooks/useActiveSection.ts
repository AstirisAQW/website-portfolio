import { useEffect, useState } from 'react'
import type { SectionId } from '../content/sections'

const OBSERVER_ROOT_MARGIN = '-40% 0px -55% 0px'

/** Returns the id of the section crossing a thin band near the middle of the viewport. */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0] ?? 'about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      { rootMargin: OBSERVER_ROOT_MARGIN },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
