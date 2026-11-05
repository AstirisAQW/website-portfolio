import imageSizes from '../content/imageSizes.generated.json'
import type { ImageRef } from '../types/image'

type ImageSizeKey = keyof typeof imageSizes

/** Resolves a file in /public, respecting the Vite `base` (needed on GitHub Pages project sites). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function imageRef(fileName: ImageSizeKey, alt: string): ImageRef {
  const { width, height } = imageSizes[fileName]
  return {
    src: asset(fileName),
    alt,
    width,
    height,
  }
}
