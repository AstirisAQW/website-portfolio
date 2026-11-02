import { CodeIcon, FileTextIcon, UserIcon, type IconComponent } from '../components/Icons'

interface SectionInfo {
  id: string
  label: string
  icon: IconComponent
}

/** Single source of truth for the page sections: navbar, footer and scroll-spy all read this. */
export const SECTIONS = [
  { id: 'about', label: 'about', icon: UserIcon },
  { id: 'projects', label: 'projects', icon: CodeIcon },
  { id: 'resume', label: 'resume', icon: FileTextIcon },
] as const satisfies readonly SectionInfo[]

/** Union of the real section ids, so a mistyped id fails to compile instead of silently breaking nav. */
export type SectionId = (typeof SECTIONS)[number]['id']

export const SECTION_IDS: readonly SectionId[] = SECTIONS.map((section) => section.id)