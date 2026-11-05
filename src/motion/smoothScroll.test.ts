import { afterEach, describe, expect, it, vi } from 'vitest'
import { getScrollBehavior, scrollToSection } from './smoothScroll'

describe('scrollToSection fallback', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('uses auto behavior when reduced motion is enabled', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('window', {
      scrollY: 100,
      matchMedia: vi.fn().mockReturnValue({ matches: true }),
      scrollTo,
    })
    vi.stubGlobal('document', {
      querySelector: vi.fn().mockReturnValue({
        getBoundingClientRect: () => ({ top: 250 }),
      }),
    })

    scrollToSection('projects')

    expect(getScrollBehavior(true)).toBe('auto')
    expect(scrollTo).toHaveBeenCalledWith({ top: 334, behavior: 'auto' })
  })

  it('uses smooth behavior when reduced motion is disabled', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('window', {
      scrollY: 100,
      matchMedia: vi.fn().mockReturnValue({ matches: false }),
      scrollTo,
    })
    vi.stubGlobal('document', {
      querySelector: vi.fn().mockReturnValue({
        getBoundingClientRect: () => ({ top: 250 }),
      }),
    })

    scrollToSection('projects')

    expect(getScrollBehavior(false)).toBe('smooth')
    expect(scrollTo).toHaveBeenCalledWith({ top: 334, behavior: 'smooth' })
  })
})
