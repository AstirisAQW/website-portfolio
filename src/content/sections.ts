export interface SectionInfo {
  id: string
  label: string
}

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
] as const satisfies readonly SectionInfo[]

export type SectionId = (typeof SECTIONS)[number]['id']

export const SECTION_IDS: readonly SectionId[] = SECTIONS.map((s) => s.id)

export function getSectionLabel(id: SectionId): string {
  return SECTIONS.find((s) => s.id === id)?.label ?? id
}
