import { type RefObject, useRef } from 'react'
import { SITE } from '../../content/site'
import { scheduleScrollRefresh } from '../../motion/scrollRefresh'
import { AwardIcon } from '../ui/Icons'
import { usePointerDrift } from './usePointerDrift'

const BRACKET_POSITIONS = [
  '-top-3 -left-3 border-t-[1.5px] border-l-[1.5px]',
  '-top-3 -right-3 border-t-[1.5px] border-r-[1.5px]',
  '-bottom-3 -left-3 border-b-[1.5px] border-l-[1.5px]',
  '-bottom-3 -right-3 border-b-[1.5px] border-r-[1.5px]',
]

interface PortraitFrameProps {
  headerRef: RefObject<HTMLElement | null>
}

export function PortraitFrame({ headerRef }: PortraitFrameProps) {
  const cutoutRef = useRef<HTMLImageElement>(null)
  const archRef = useRef<HTMLDivElement>(null)

  usePointerDrift(headerRef, cutoutRef, archRef)

  return (
    <div className="relative w-[240px] desk:w-portrait aspect-[1414/1700] mb-6">
      <div className="hero-portrait-wipe relative h-full w-full will-change-[clip-path]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-sand)_80%,transparent)_0%,transparent_70%)] blur-[10px]"
        />
        <div
          ref={archRef}
          aria-hidden="true"
          className="absolute left-[4%] right-[4%] bottom-0 h-[80%] bg-sand rounded-t-full will-change-transform"
        />
        <img
          ref={cutoutRef}
          src={SITE.portrait.src}
          alt={SITE.portrait.alt}
          onLoad={scheduleScrollRefresh}
          className="absolute inset-0 w-full h-full object-cover object-bottom will-change-transform"
        />
      </div>

      {BRACKET_POSITIONS.map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`hero-bracket absolute w-[18px] h-[18px] border-accent will-change-transform ${pos}`}
        />
      ))}

      <div className="hero-pill absolute left-1/2 -bottom-[14px] -translate-x-1/2 flex items-center gap-[0.4rem] py-[0.2rem] px-3 bg-panel border border-line rounded-full font-mono text-[11px] text-soft whitespace-nowrap will-change-transform">
        <AwardIcon />
        <span>{SITE.captionPill}</span>
      </div>
    </div>
  )
}
