import type { ImageRef } from '../types/image'
import { asset } from '../utils/asset'

export const SITE = {
  name: 'Joseph Deysolong',
  headline: 'Computer Scientist & Systems Engineer',
  role: 'Software Engineer & Researcher',
  degree: 'B.S. in Computer Science',
  university: 'University of Science and Technology of Southern Philippines',
  distinctions: 'Cum Laude · DOST-SEI JLSS Scholar · Dean’s Lister (All Semesters)',
  status: 'Open to Software Engineering & Systems Roles',
  location: 'Philippines',
  years: '2024–2026',
  resumeUrl: asset('Resume v3.1-1.pdf'),
  githubUrl: 'https://github.com/AstirisAQW',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-deysolong/',
  portrait: {
    src: asset('profile500x500.png'),
    alt: 'Portrait photograph of Joseph Deysolong',
  } satisfies ImageRef,
  bio: [
    'Computer Science graduate (Cum Laude, DOST Scholar) from the University of Science and Technology of Southern Philippines. My engineering work spans the entire computational spectrum — from low-level MIPS assembly and algorithm kinematics to graph machine learning research, distributed systems, and modern web platforms.',
    'I focus on building reliable software with deep theoretical foundations, disciplined architecture, and high performance.',
  ],
  skills: {
    systems: ['MIPS Assembly', 'C / C++', 'Algorithm Design', 'Automata Theory', 'Memory & Stack Frames'],
    ml: ['PyTorch', 'NetworkX', 'Graph Kinematics', 'Temporal Graphs', 'Pandas & Scikit-Learn'],
    web: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js', 'REST APIs'],
    tools: ['Git / GitHub', 'Cisco Packet Tracer', 'MARS Simulator', 'Linux', 'Vite'],
  },
}
