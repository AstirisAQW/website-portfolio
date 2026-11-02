export interface SectionInfo {
  id: string
  label: string
  number: string
}

/** Single source of truth for portfolio section structure */
export const SECTIONS = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'projects', label: 'Projects', number: '02' },
  { id: 'spectrum', label: 'Systems', number: '03' },
  { id: 'credentials', label: 'Credentials & Resume', number: '04' },
] as const satisfies readonly SectionInfo[]

export type SectionId = (typeof SECTIONS)[number]['id']

export const SECTION_IDS: readonly SectionId[] = SECTIONS.map((section) => section.id)
