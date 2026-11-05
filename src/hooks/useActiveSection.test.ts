import { describe, expect, it } from 'vitest'
import { SECTION_IDS } from '../content/sections'
import { isAtPageEnd, resolveActiveSection } from './useActiveSection'

describe('resolveActiveSection', () => {
  it('returns the current intersecting section when not at the page end', () => {
    expect(isAtPageEnd(400, 800, 2000)).toBe(false)
    expect(resolveActiveSection(SECTION_IDS, 'projects', 400, 800, 2000)).toBe('projects')
  })

  it('returns the last section when scrollY + innerHeight reaches documentHeight - 2', () => {
    expect(isAtPageEnd(1198, 800, 2000)).toBe(true)
    expect(resolveActiveSection(SECTION_IDS, 'projects', 1198, 800, 2000)).toBe('resume')
    expect(resolveActiveSection(SECTION_IDS, 'about', 1200, 800, 2000)).toBe('resume')
  })
})
