import type { Project } from '../types/project'
import { asset } from '../utils/asset'

export const PROJECTS: Project[] = [
  {
    id: 'dymon',
    title: 'DyMoN',
    subtitle: 'Temporal Graph Anomaly Detection',
    description:
      'Post-hoc anomaly detection module for temporal graphs tracking node embedding kinematics, built with PyTorch and NetworkX.',
    githubUrl: 'https://github.com/Ofen-Lovers/DyMoN',
    tags: ['PyTorch', 'NetworkX', 'Graph Kinematics', 'Temporal Graphs', 'Python'],
    image: { src: asset('Dymon.png'), alt: 'Screenshot of DyMoN Temporal Graph Anomaly Detection' },
  },
  {
    id: 'dfa-nfa-simulator',
    title: 'DFA-NFA Simulator',
    subtitle: 'Finite State Automata Visualizer',
    description:
      'Interactive browser-based finite automaton simulator using vanilla JavaScript and Vis.js for real-time state transition graph visualization.',
    githubUrl: 'https://github.com/Ofen-Lovers/DFA-and-NFA-Simulator',
    tags: ['JavaScript', 'Vis.js', 'Theory of Computation', 'Graph Simulation'],
    image: { src: asset('DFA-NFA Simulator.png'), alt: 'Screenshot of DFA-NFA Simulator' },
  },
  {
    id: 'blackjack-in-mips',
    title: 'BlackJack in MIPS',
    subtitle: 'Assembly Language Game Engine',
    description:
      'Single-player Blackjack game implemented entirely in MIPS assembly language, demonstrating register allocation, stack memory management, and low-level computer architecture.',
    githubUrl: 'https://github.com/AstirisAQW/BlackJack-MIPS-Assembly',
    tags: ['MIPS Assembly', 'Computer Architecture', 'MARS Simulator', 'Low-Level'],
    image: { src: asset('BlackJack-in-MIPS.png'), alt: 'Screenshot of BlackJack in MIPS' },
  },
  {
    id: 'edelweiss-e-commerce',
    title: 'Edelweiss E-commerce',
    subtitle: 'Full-Stack Modern Commerce',
    description:
      'Full-stack e-commerce web platform engineered with React, TypeScript, and Supabase for authentication and relational database persistence.',
    githubUrl: 'https://github.com/Ofen-Lovers/Edelweiss',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    image: { src: asset('Edelweiss E-commerce.png'), alt: 'Screenshot of Edelweiss E-commerce' },
  },
  {
    id: 'bubble-merge-hybrid-sort',
    title: 'Hybrid Merge Sort',
    subtitle: 'Empirical Algorithm Analysis',
    description:
      'Research paper and empirical benchmarks evaluating a Hybrid Merge Sort algorithm that integrates Bubble Sort for small sub-arrays to minimize recursive call-stack overhead.',
    githubUrl: 'https://github.com/HarV1821/BubbleMergeHybridSort',
    tags: ['Algorithms', 'Data Structures', 'C++', 'Benchmarking', 'Complexity'],
    image: { src: asset('Bubble Merge Hybrid Sort.png'), alt: 'Screenshot of Hybrid Merge Sort' },
  },
  {
    id: 'forecasteam',
    title: 'ForecaSteam',
    subtitle: 'Steam Game Popularity ML Pipeline',
    description:
      'Machine learning pipeline predicting video game popularity and ownership distributions on Steam by analyzing release metadata and historical engagement trends.',
    githubUrl: 'https://github.com/Ofen-Lovers/ForecaSteam',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Data Mining', 'Predictive Modeling'],
    image: { src: asset('ForecaSteam.png'), alt: 'Screenshot of ForecaSteam' },
  },
]
