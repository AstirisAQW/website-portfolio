import type { ImageRef } from '../types/image'
import { asset } from '../utils/asset'

export const SITE = {
  name: 'Joseph Deysolong',
  tagline: 'Software Engineer',
  shortBio:
    'Software engineer working across low-level computer architecture, graph machine learning, and modern web platforms.',
  resumeUrl: asset('resume v3.2.pdf'),
  resumeSummary: 'A one-page summary of my education, projects, and skills.',
  githubUrl: 'https://github.com/AstirisAQW',
  githubIconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-deysolong/',
  linkedinIconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  email: 'mailto:deysolongjoseph@gmail.com',
  portrait: {
    src: asset('JosephDeysolong-GradPortrait.png'),
    alt: 'portrait',
  } satisfies ImageRef,
  sidebarStar: {
    src: asset('logo-transparent.png'),
    alt: 'logo',
  } satisfies ImageRef,
}
