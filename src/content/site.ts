import type { ImageRef } from '../types/image'
import { asset } from '../utils/asset'

export const SITE = {
  name: 'Joseph Deysolong',
  role: 'Software Engineer',
  shortBio:
    'Software engineer working across low-level computer architecture, graph machine learning, and modern web platforms. Specialized in low-level computer architecture (MIPS, C++), temporal graph anomaly detection (PyTorch, DyMoN), and modern full-stack web platforms.',
  statusText: 'Available for Software Engineering Roles',
  location: 'Cagayan de Oro, Philippines',
  clockLabel: 'Local Time (UTC+8):',
  timeZone: 'Asia/Manila',
  captionPill: "USTP '26 · Cum Laude · DOST Scholar",
  textureUrl: asset('/background-1.png'),
  resumeUrl: asset('Joseph-Deysolong-Resume.pdf'),
  resumeFileName: 'Joseph-Deysolong-Resume.pdf',
  resumeSummary: 'A one-page summary of my education, projects, and skills.',
  githubUrl: 'https://github.com/AstirisAQW',
  githubIconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-deysolong/',
  linkedinIconUrl:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  email: 'mailto:deysolongjoseph@gmail.com',
  portrait: {
    src: asset('JosephDeysolong-GradPortrait-transparent.png'),
    alt: 'Joseph Deysolong in graduation attire',
  } satisfies ImageRef,
  sidebarStar: {
    src: asset('astiris-star.png'),
    alt: 'Gold eight-pointed star',
  } satisfies ImageRef,
  copyrightYear: '2026',
}
