import { useRef } from 'react'
import { SITE } from '../content/site'
import { EASE_NONE } from '../motion/constants'
import { gsap } from '../motion/gsap'
import { useMotion } from '../motion/useMotion'

export function BackgroundTexture() {
  const bgTextureRef = useRef<HTMLDivElement>(null)

  useMotion(bgTextureRef, () => {
    if (!bgTextureRef.current) return

    gsap.fromTo(
      bgTextureRef.current,
      { yPercent: 0 },
      {
        yPercent: -6,
        ease: EASE_NONE,
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      },
    )
  })

  return (
    <div
      ref={bgTextureRef}
      aria-hidden="true"
      style={{ backgroundImage: `url("${SITE.textureUrl}")` }}
      className="pointer-events-none fixed inset-x-0 -inset-y-[10vh] -z-10 bg-ground bg-cover bg-top bg-no-repeat will-change-transform"
    />
  )
}
