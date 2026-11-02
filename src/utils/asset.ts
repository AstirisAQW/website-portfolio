/** Resolves a file in /public, respecting the Vite `base` (needed on GitHub Pages project sites). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
