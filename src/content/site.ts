import type { ImageRef } from '../types/image'
import { asset } from '../utils/asset'

export const SITE = {
  name: 'Joseph Deysolong',
  role: 'Software Engineer & Researcher',
  shortBio: 'Building software across low-level computer architecture, graph machine learning kinematics, and modern web platforms.',
  university: 'University of Science and Technology of Southern Philippines',
  location: 'Philippines',
  years: '2024–2026',
  resumeUrl: asset('Resume v3.1-1.pdf'),
  githubUrl: 'https://github.com/AstirisAQW',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-deysolong/',
  email: 'mailto:deysolongjoseph@gmail.com',
  portrait: {
    src: asset('JosephDeysolong-GradPortrait.png'),
    alt: 'Joseph Deysolong in graduation attire',
  } satisfies ImageRef,
  skills: {
    systems: ['MIPS Assembly', 'C / C++', 'Algorithm Design', 'Automata Theory', 'Memory & Stack Frames'],
    ml: ['PyTorch', 'NetworkX', 'Graph Kinematics', 'Temporal Graphs', 'Pandas & Scikit-Learn'],
    web: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js', 'REST APIs'],
    tools: ['Git / GitHub', 'Cisco Packet Tracer', 'MARS Simulator', 'Linux', 'Vite'],
  },
}
