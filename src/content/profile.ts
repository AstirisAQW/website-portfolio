import type { Certification, Education } from '../types/profile'
import { asset } from '../utils/asset'

export const EDUCATION: readonly Education[] = [
  {
    id: 'bs-cs',
    name: 'BS in Computer Science',
    logo: asset('USTP_for_light_bg-1398x1536.png'),
    school: 'University of Science and Technology of Southern Philippines',
    year: '2026',
    honors: 'Cum Laude, DOST-SEI JLSS Scholar',
  },
]

export const CERTIFICATIONS: readonly Certification[] = [
  {
    id: 'cisco-networking',
    name: 'Networking Basics',
    logo: asset('Cisco_NetworkingBasics_Badge.png'),
    issuer: 'Cisco',
    year: '2024',
  },
]
