import type { SiteConfig } from '../types/site'
import { asset } from '../utils/asset'

export function getClockLabel(timeZone: string): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'shortOffset',
  }).formatToParts(new Date())
  const offset = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'GMT'
  return `Local Time (${offset.replace('GMT', 'UTC')}):`
}

export const SITE: SiteConfig = {
  hero: {
    name: 'Joseph Deysolong',
    role: 'Software Engineer',
    shortBio:
      'Software engineer working across low-level computer architecture, graph machine learning, and modern web platforms. Specialized in low-level computer architecture (MIPS, C++), temporal graph anomaly detection (PyTorch, DyMoN), and modern full-stack web platforms.',
    availability: 'Available for Software Engineering Roles',
    location: 'Cagayan de Oro, Philippines',
    timeZone: 'Asia/Manila',
    badge: "USTP '26 · Cum Laude · DOST Scholar",
  },
  links: {
    github: 'https://github.com/AstirisAQW',
    linkedin: 'https://www.linkedin.com/in/joseph-deysolong/',
    email: 'mailto:deysolongjoseph@gmail.com',
    githubIconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    linkedinIconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  resume: {
    url: asset('joseph-deysolong-resume.pdf'),
    fileName: 'joseph-deysolong-resume.pdf',
    summary: 'A one-page summary of my education, projects, and skills.',
  },
  images: {
    portrait: {
      src: asset('joseph-deysolong-grad-portrait-transparent.png'),
      alt: 'Joseph Deysolong in graduation attire',
    },
    star: {
      src: asset('astiris-star.png'),
      alt: '',
    },
    texture: asset('/background-1.png'),
  },
  copyrightYear: '2026',
}
