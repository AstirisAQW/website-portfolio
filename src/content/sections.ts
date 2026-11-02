import {
  AwardIcon,
  CodeIcon,
  CpuIcon,
  FileTextIcon,
  UserIcon,
  type IconComponent,
} from '../components/Icons'

export interface SectionInfo {
  id: string
  label: string
  number: string
  tagline: string
  icon: IconComponent
}

/** Single source of truth for the portfolio sections */
export const SECTIONS = [
  { id: 'about', label: 'about', number: '01', tagline: 'Profile & Overview', icon: UserIcon },
  { id: 'spectrum', label: 'spectrum', number: '02', tagline: 'Architecture Spectrum', icon: CpuIcon },
  { id: 'projects', label: 'projects', number: '03', tagline: 'Curated Work', icon: CodeIcon },
  { id: 'credentials', label: 'credentials', number: '04', tagline: 'Honors & Education', icon: AwardIcon },
  { id: 'resume', label: 'resume', number: '05', tagline: 'Curriculum Vitae', icon: FileTextIcon },
] as const satisfies readonly SectionInfo[]

export type SectionId = (typeof SECTIONS)[number]['id']

export const SECTION_IDS: readonly SectionId[] = SECTIONS.map((section) => section.id)
