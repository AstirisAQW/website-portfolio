import type { ImageRef } from '../types/image'
import { asset } from '../utils/asset'

export const SITE = {
  name: 'Joseph Deysolong',
  title: '',
  years: '2024–2026',
  resumeUrl: asset('Resume v3.1-1.pdf'),
  githubUrl: 'https://github.com/AstirisAQW',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-deysolong/',
  portrait: {
    src: asset('profile500x500.png'),
    alt: 'Portrait of Joseph Deysolong',
  } satisfies ImageRef,
  bio: [
    'Computer Science graduate from the University of Science and Technology of Southern Philippines. I am comfortable working across the full range of software development — from low-level systems and algorithm design to web applications, data analysis, and tooling.',
  ],
}