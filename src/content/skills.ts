import { asset } from '../utils/asset'

export type SkillGroup = 'Programming languages' | 'Frameworks and libraries' | 'Tools'

export interface SkillItem {
  name: string
  logo: string
  group: SkillGroup
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
  'Programming languages',
  'Frameworks and libraries',
  'Tools',
]

export const SKILLS: readonly SkillItem[] = [
  // Programming languages
  {
    name: 'C++',
    logo: asset('logos/cplusplus.svg'),
    group: 'Programming languages',
  },
  {
    name: 'Python',
    logo: asset('logos/python.svg'),
    group: 'Programming languages',
  },
  {
    name: 'TypeScript',
    logo: asset('logos/typescript.svg'),
    group: 'Programming languages',
  },
  {
    name: 'JavaScript',
    logo: asset('logos/javascript.svg'),
    group: 'Programming languages',
  },

  // Frameworks and libraries
  {
    name: 'React',
    logo: asset('logos/react.svg'),
    group: 'Frameworks and libraries',
  },
  {
    name: 'Tailwind CSS',
    logo: asset('logos/tailwindcss.svg'),
    group: 'Frameworks and libraries',
  },

  // Tools
  {
    name: 'Git',
    logo: asset('logos/git.svg'),
    group: 'Tools',
  },
  {
    name: 'GitHub',
    logo: asset('logos/github.svg'),
    group: 'Tools',
  },
]
