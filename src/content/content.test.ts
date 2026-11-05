import { describe, expect, it } from 'vitest'
import { PROJECTS } from './projects'
import { SECTIONS } from './sections'
import { getClockLabel, SITE } from './site'
import { SKILL_GROUPS, SKILLS } from './skills'

describe('content integrity', () => {
  it('ensures each project id is unique', () => {
    const ids = PROJECTS.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('ensures each project image has a width, a height, and an alt text', () => {
    for (const project of PROJECTS) {
      expect(project.image.width).toBeTypeOf('number')
      expect(project.image.width).toBeGreaterThan(0)
      expect(project.image.height).toBeTypeOf('number')
      expect(project.image.height).toBeGreaterThan(0)
      expect(project.image.alt.trim().length).toBeGreaterThan(0)
    }
  })

  it('ensures each skill group name exists in SKILL_GROUPS', () => {
    for (const skill of SKILLS) {
      expect(SKILL_GROUPS).toContain(skill.group)
    }
  })

  it('ensures each id in SECTIONS is unique', () => {
    const ids = SECTIONS.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('derives the UTC offset label from timeZone', () => {
    expect(getClockLabel(SITE.hero.timeZone)).toBe('Local Time (UTC+8):')
  })
})
