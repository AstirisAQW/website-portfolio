import { useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface TechIconProps {
  src: string
  name: string
  size?: 'sm' | 'lg'
}

let refreshTimeout: number | undefined

function scheduleRefresh() {
  if (typeof window === 'undefined') return
  if (refreshTimeout) window.clearTimeout(refreshTimeout)
  refreshTimeout = window.setTimeout(() => {
    ScrollTrigger.refresh()
  }, 120)
}

export function TechIcon({ src, name, size = 'sm' }: TechIconProps) {
  const [failed, setFailed] = useState(false)

  const dimensions = size === 'lg' ? 'h-12 w-12 text-xs' : 'h-7 w-7 text-[11px]'

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={name}
        onLoad={scheduleRefresh}
        onError={() => setFailed(true)}
        className={`${dimensions} shrink-0 object-contain`}
      />
    )
  }

  return (
    <span
      role="img"
      aria-label={name}
      className={`${dimensions} inline-flex shrink-0 items-center justify-center border border-line bg-card font-display font-medium text-soft select-none`}
    >
      {name.slice(0, 2)}
    </span>
  )
}
