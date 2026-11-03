import { useState } from 'react'
import type { ImageRef } from '../types/image'

interface PictureProps extends ImageRef {
  className?: string
  imgClassName?: string
}

export function Picture({ src, alt, caption, className = '', imgClassName = '' }: PictureProps) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img src={src} alt={alt} onError={() => setFailed(true)} className={`${className} ${imgClassName}`} />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`${className} bg-card/60 border-edge grid place-items-center overflow-hidden border border-dashed p-2 text-center`}
    >
      <span aria-hidden="true" className="text-soft font-mono text-xs leading-snug break-words italic">
        {caption ?? alt}
      </span>
    </div>
  )
}
