export type SkillGroup =
  | 'Programming languages'
  | 'Frameworks and libraries'
  | 'Tools'

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
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    group: 'Programming languages',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    group: 'Programming languages',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    group: 'Programming languages',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    group: 'Programming languages',
  },

  // Frameworks and libraries
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    group: 'Frameworks and libraries',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    group: 'Frameworks and libraries',
  },

  // Tools
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    group: 'Tools',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    group: 'Tools',
  },
]

