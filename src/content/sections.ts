export interface SectionInfo {
  id: string
  label: string
}

/** Single source of truth for portfolio section structure */
export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials & Resume' },
] as const satisfies readonly SectionInfo[]

export type SectionId = (typeof SECTIONS)[number]['id']

export const SECTION_IDS: readonly SectionId[] = SECTIONS.map((section) => section.id)
