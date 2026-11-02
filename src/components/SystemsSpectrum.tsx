import { useState } from 'react'
import { ArrowUpRightIcon, CpuIcon, LayersIcon, SparklesIcon, TerminalIcon } from './Icons'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { smoothScrollTo } from '../utils/lenis'

interface DomainInfo {
  id: string
  label: string
  shortTitle: string
  icon: typeof CpuIcon
  headline: string
  summary: string
  snippet: {
    lang: string
    code: string
  }
  technologies: string[]
  featuredProject: {
    id: string
    title: string
    description: string
  }
}

const DOMAINS: DomainInfo[] = [
  {
    id: 'systems',
    label: 'Systems & Architecture',
    shortTitle: 'Systems',
    icon: CpuIcon,
    headline: 'Low-Level Computer Architecture & Stack Allocation',
    summary:
      'Direct control over registers, stack frame allocations, and recursion limits. Experienced in designing deterministic assembly routines and empirical algorithmic complexity benchmarks.',
    snippet: {
      lang: 'MIPS Assembly',
      code: `# MIPS Register Allocation & Stack Frame
addi $sp, $sp, -8       # allocate stack frame
sw   $ra, 4($sp)        # preserve return address
sw   $s0, 0($sp)        # save preserved register
jal  evaluate_hand      # compute blackjack state
lw   $s0, 0($sp)        # restore state
addi $sp, $sp, 8        # collapse frame`,
    },
    technologies: ['MIPS Assembly', 'C / C++', 'Stack Frames', 'MARS Simulator', 'Algorithmic Complexity'],
    featuredProject: {
      id: 'blackjack-in-mips',
      title: 'BlackJack in MIPS',
      description: 'Single-player game engine written purely in MIPS assembly without external runtimes.',
    },
  },
  {
    id: 'ml',
    label: 'Graph ML & Research',
    shortTitle: 'Graph ML',
    icon: SparklesIcon,
    headline: 'Temporal Graph Kinematics & Anomaly Detection',
    summary:
      'Investigating anomaly detection on dynamic networks by modeling node embedding trajectories through kinematic equations of motion (velocity, acceleration, and spatial variance).',
    snippet: {
      lang: 'Python (PyTorch)',
      code: `# Node Embedding Velocity & Acceleration
velocity = embeddings[t] - embeddings[t - 1]
acceleration = velocity[t] - velocity[t - 1]
kinetic_energy = 0.5 * torch.norm(velocity, dim=-1)**2
anomaly_score = compute_kinematic_deviance(acceleration)`,
    },
    technologies: ['PyTorch', 'NetworkX', 'Temporal Graphs', 'Node Embeddings', 'Pandas'],
    featuredProject: {
      id: 'dymon',
      title: 'DyMoN',
      description: 'Post-hoc anomaly detection module tracking embedding kinematics on temporal graphs.',
    },
  },
  {
    id: 'web',
    label: 'Full-Stack & Interactive',
    shortTitle: 'Full-Stack',
    icon: LayersIcon,
    headline: 'Modern Web Architectures & Interactive Automata',
    summary:
      'Developing responsive full-stack applications with strict TypeScript typing, relational database persistence, and browser-based automata simulations.',
    snippet: {
      lang: 'TypeScript / React 19',
      code: `// Deterministic State Transition & Supabase Schema
export function transition(current: State, input: Symbol): State {
  const next = deltaMatrix[current.id]?.[input]
  return next ? validateState(next) : State.TRAP
}`,
    },
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vis.js'],
    featuredProject: {
      id: 'edelweiss-e-commerce',
      title: 'Edelweiss E-commerce',
      description: 'Full-stack storefront with authentication and relational data models on Supabase.',
    },
  },
]

export function SystemsSpectrum() {
  const [activeTab, setActiveTab] = useState(0)
  const current = DOMAINS[activeTab]
  const Icon = current.icon

  return (
    <Section id="spectrum" className="py-24">
      <SectionHeading
        number="02"
        title="Interactive Engineering Spectrum"
        subtitle="Exploring the computational continuum: from bare-metal register allocation to dynamic graph ML and reactive web architectures."
      />

      <div className="glass-card mt-10 overflow-hidden rounded-2xl border border-line shadow-2xl">
        {/* Top Control Bar with Terminal Window Controls */}
        <div className="border-line bg-paper-subtle/80 flex items-center justify-between border-b px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="font-mono text-xs text-soft ml-3 hidden sm:inline flex items-center gap-1.5">
              <TerminalIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>spectrum_inspector.sh</span>
            </span>
          </div>

          <span className="font-mono text-[11px] text-muted">
            Architecture Matrix // Tab {activeTab + 1} of {DOMAINS.length}
          </span>
        </div>

        {/* Spectrum Mode Tabs */}
        <div className="border-line grid grid-cols-3 border-b bg-paper-subtle/40">
          {DOMAINS.map((domain, index) => {
            const isSelected = activeTab === index
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center justify-center gap-2 px-3 py-4 font-mono text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'text-ink bg-card/60 shadow-inner'
                    : 'text-soft hover:text-ink hover:bg-tint'
                }`}
              >
                <span className="hidden sm:inline">{domain.label}</span>
                <span className="sm:hidden">{domain.shortTitle}</span>
                {isSelected && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] transition-all"
                    style={{
                      backgroundColor: 'var(--accent-primary)',
                      boxShadow: '0 0 10px var(--accent-primary)',
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Tab Content & Code Sandbox */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Domain Deep-Dive */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line"
                  style={{ backgroundColor: 'var(--accent-subtle)' }}
                >
                  <Icon className="h-5 w-5 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <h3 className="text-ink font-display text-xl sm:text-2xl font-bold">
                    {current.headline}
                  </h3>
                </div>
              </div>

              <p className="text-body font-sans text-sm sm:text-base leading-relaxed">
                {current.summary}
              </p>

              {/* Technologies Pills */}
              <div className="space-y-2 pt-2">
                <span className="text-muted font-mono text-xs uppercase tracking-wider block">
                  Core Technologies & Concepts
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass-card hover:border-[var(--accent-border)] text-ink rounded-md px-2.5 py-1 font-mono text-xs transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Project Link */}
              <div className="border-line bg-paper-subtle/50 mt-4 flex flex-col justify-between gap-3 rounded-xl border p-4 sm:flex-row sm:items-center">
                <div className="space-y-0.5">
                  <span className="text-[var(--accent-primary)] font-mono text-[10px] uppercase tracking-wider font-semibold">
                    Representative Artifact
                  </span>
                  <p className="text-ink font-display text-sm font-bold">{current.featuredProject.title}</p>
                  <p className="text-soft font-sans text-xs">{current.featuredProject.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => smoothScrollTo('#projects')}
                  className="border border-[var(--accent-border)] hover:bg-[var(--accent-primary)] hover:text-white text-[var(--accent-primary)] inline-flex items-center gap-1.5 self-start rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all sm:self-center shrink-0 cursor-pointer"
                >
                  <span>Jump to Project</span>
                  <ArrowUpRightIcon className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Right: Real Code / Architecture Snippet */}
            <div className="border-line bg-[#05070c] rounded-xl border overflow-hidden shadow-inner">
              <div className="border-line bg-[#090b14] flex items-center justify-between border-b px-4 py-2 font-mono text-xs text-soft">
                <span>{current.snippet.lang}</span>
                <span className="text-[10px] text-muted">UTF-8 // Readonly</span>
              </div>
              <pre className="p-4 overflow-x-auto font-mono text-xs text-emerald-400/90 leading-relaxed">
                <code>{current.snippet.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
