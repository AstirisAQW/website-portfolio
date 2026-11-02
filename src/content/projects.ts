import type { Project } from '../types/project'
import { asset } from '../utils/asset'

export const PROJECTS: Project[] = [
  {
    id: 'dymon',
    title: 'DyMoN',
    description:
      'Post-hoc anomaly detection module for temporal graphs tracking node embedding kinematics, built with PyTorch and NetworkX.',
    githubUrl: 'https://github.com/Ofen-Lovers/DyMoN',
    image: { src: asset('Dymon.png'), alt: 'Screenshot of DyMoN' },
  },
  {
    id: 'dfa-nfa-simulator',
    title: 'DFA-NFA Simulator',
    description:
      'Interactive browser-based finite automaton simulator using vanilla JS and Vis.js for graph visualization.',
    githubUrl: 'https://github.com/Ofen-Lovers/DFA-and-NFA-Simulator',
    image: { src: asset('DFA-NFA Simulator.png'), alt: 'Screenshot of DFA-NFA Simulator' },
  },
  {
    id: 'blackjack-in-mips',
    title: 'BlackJack in MIPS',
    description:
      'Single-player Blackjack game implemented in MIPS assembly language, demonstrating low-level programming concepts.',
    githubUrl: 'https://github.com/AstirisAQW/BlackJack-MIPS-Assembly',
    image: { src: asset('BlackJack-in-MIPS.png'), alt: 'Screenshot of BlackJack in MIPS' },
  },
  {
    id: 'edelweiss-e-commerce',
    title: 'Edelweiss E-commerce',
    description:
      'Full-stack e-commerce website built with React, TypeScript, Supabase, and hosted on Vercel.',
    githubUrl: 'https://github.com/Ofen-Lovers/Edelweiss',
    image: { src: asset('Edelweiss E-commerce.png'), alt: 'Screenshot of Edelweiss E-commerce' },
  },
  {
    id: 'bubble-merge-hybrid-sort',
    title: 'Hybrid Merge Sort',
    description:
      'Research paper proposing a Hybrid Merge Sort that integrates Bubble Sort for smaller sub-arrays to reduce recursive overhead.',
    githubUrl: 'https://github.com/HarV1821/BubbleMergeHybridSort',
    image: { src: asset('Bubble Merge Hybrid Sort.png'), alt: 'Screenshot of Hybrid Merge Sort' },
  },
  {
    id: 'stardew-valley-mod',
    title: 'Stardew Valley Mod',
    description:
      'Custom NPC mod for Stardew Valley with unique backstory, dialogue, heart events, and marriage integration using C#.',
    githubUrl: 'https://github.com/Ofen-Lovers/Stardew-Valley-Mod',
    image: { src: asset('Stardew Valley Mod.png'), alt: 'Screenshot of Stardew Valley Mod' },
  },
  {
    id: 'forecasteam',
    title: 'ForecaSteam',
    description:
      'ML pipeline predicting game popularity on Steam by analyzing metadata to estimate ownership distributions.',
    githubUrl: 'https://github.com/Ofen-Lovers/ForecaSteam',
    image: { src: asset('ForecaSteam.png'), alt: 'Screenshot of ForecaSteam' },
  },
]