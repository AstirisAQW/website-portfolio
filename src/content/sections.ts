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

/** Single source of truth for portfolio section structure */
export const SECTIONS = [
  { id: 'about', label: 'ABOUT', number: '01', tagline: 'Profile & Manifesto', icon: UserIcon },
  { id: 'projects', label: 'WORKS', number: '02', tagline: 'Selected Works', icon: CodeIcon },
  { id: 'spectrum', label: 'SPECTRUM', number: '03', tagline: 'Architecture Matrix', icon: CpuIcon },
  { id: 'credentials', label: 'CREDENTIALS', number: '04', tagline: 'Academic Accolades', icon: AwardIcon },
  { id: 'resume', label: 'DOSSIER', number: '05', tagline: 'Curriculum Vitae', icon: FileTextIcon },
] as const satisfies readonly SectionInfo[]

export type SectionId = (typeof SECTIONS)[number]['id']

export const SECTION_IDS: readonly SectionId[] = SECTIONS.map((section) => section.id)
