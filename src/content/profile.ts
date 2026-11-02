import type { Certification, Education, Honor } from '../types/profile'
import { asset } from '../utils/asset'

export const EDUCATION: Education[] = [
  {
    id: 'bs-cs',
    degree: 'Bachelor of Science in Computer Science',
    description: '(Graduated 2026)',
  },
]

export const HONORS: Honor[] = [
  { id: 'cum-laude', title: 'Cum Laude', description: 'USTP, 2026' },
  { id: 'dost-scholar', title: 'DOST-SEI JLSS Scholar', description: 'Dept. of Science & Technology' },
  { id: 'deans-lister', title: 'Dean’s Lister', description: 'All semesters, 2022–2026' },
]

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cisco-networking',
    title: 'Networking Basics',
    issuer: 'Cisco',
    date: 'Dec 2024',
    image: {
      src: asset('Cisco_NetworkingBasics_Badge.png'),
      alt: 'Cisco Networking Basics verified certification emblem illustrating interconnected digital network topologies',
      caption: 'Cisco badge', // short text for the small 64px frame
    },
  },
]
