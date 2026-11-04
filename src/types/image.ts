/** An image slot. Without `src`, the site shows `caption ?? alt` in a placeholder frame. */
export interface ImageRef {
  src?: string
  alt: string
  caption?: string
  width?: number
  height?: number
}
