import { useState } from 'react'
import { ArrowUpRightIcon, CpuIcon, LayersIcon, SparklesIcon } from './Icons'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { smoothScrollTo } from '../utils/lenis'

interface DomainInfo {
  id: string
  label: string
  icon: typeof CpuIcon
  headline: string
  summary: string
  mathFormula?: string
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
    label: 'Low-Level Systems',
    icon: CpuIcon,
    headline: 'MIPS Assembly & Stack Allocation',
    summary:
      'Direct register allocation, stack activation frame management, and recursion optimization without runtime overhead or garbage collection.',
    mathFormula: 'T(n) = O(V + E) • Stack Allocation: 8 Bytes per Frame ($ra, $s0)',
    snippet: {
      lang: 'MIPS_ASSEMBLY.s',
      code: `evaluate_hand:
    addi $sp, $sp, -8       # allocate activation frame
    sw   $ra, 4($sp)        # preserve return address
    sw   $s0, 0($sp)        # preserve saved register $s0
    move $s0, $a0           # cache card hand base pointer
    jal  calculate_score    # compute blackjack score
    lw   $s0, 0($sp)        # restore state
    addi $sp, $sp, 8        # deallocate activation frame
    jr   $ra                # return to caller`,
    },
    technologies: ['MIPS Assembly', 'C / C++', 'Stack Frames', 'MARS Simulator', 'Computer Architecture'],
    featuredProject: {
      id: 'blackjack-in-mips',
      title: 'BlackJack in MIPS',
      description: 'Single-player blackjack engine engineered purely in bare-metal MIPS assembly.',
    },
  },
  {
    id: 'ml',
    label: 'Graph Machine Learning',
    icon: SparklesIcon,
    headline: 'Embedding Kinematics & Anomaly Detection',
    summary:
      'Modeling dynamic graph evolution by treating node embedding trajectories as physical kinematic systems, computing instantaneous velocity and acceleration vectors.',
    mathFormula: 'v(t) = (z_t - z_{t-1}) / Δt • a(t) = (v_t - v_{t-1}) / Δt',
    snippet: {
      lang: 'KINEMATIC_DYMON.py',
      code: `def compute_embedding_kinematics(embeddings_t, embeddings_prev, dt=1.0):
    # Velocity vector in embedding manifold
    velocity = (embeddings_t - embeddings_prev) / dt
    # Kinetic energy proxy based on velocity magnitude
    kinetic_energy = 0.5 * torch.sum(velocity ** 2, dim=-1)
    # Deviation from expected topological trajectory
    anomaly_indices = torch.where(kinetic_energy > threshold)
    return anomaly_indices, kinetic_energy`,
    },
    technologies: ['PyTorch', 'NetworkX', 'Dynamic Graphs', 'Embedding Kinematics', 'Pandas'],
    featuredProject: {
      id: 'dymon',
      title: 'DyMoN',
      description: 'Anomaly detection module for temporal graphs tracking node embedding kinematics.',
    },
  },
  {
    id: 'web',
    label: 'Automata & Web Platforms',
    icon: LayersIcon,
    headline: 'Finite State Machines & Reactive Runtimes',
    summary:
      'Designing state machines with verifiable formal language transitions, interactive graph visualizations, and scalable web application architectures.',
    mathFormula: 'M = (Q, Σ, δ, q0, F) • δ: Q × Σ → P(Q)',
    snippet: {
      lang: 'AUTOMATA_ENGINE.ts',
      code: `export function transition(current: State, symbol: Symbol): State[] {
    const nextStates = transitionMatrix[current.id]?.[symbol]
    if (!nextStates || nextStates.length === 0) {
        return [State.DEAD]
    }
    // Epsilon closure computation for non-deterministic automata
    return computeEpsilonClosure(nextStates)
}`,
    },
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vis.js'],
    featuredProject: {
      id: 'dfa-nfa-simulator',
      title: 'DFA-NFA Simulator',
      description: 'Interactive browser-based finite automaton simulator using vanilla JS and Vis.js.',
    },
  },
]

export function SystemsSpectrum() {
  const [activeTab, setActiveTab] = useState(0)
  const current = DOMAINS[activeTab]

  return (
    <Section id="spectrum" className="py-24 sm:py-32">
      <SectionHeading
        number="03"
        title="Systems & Disciplines"
        subtitle="Core focus across low-level instruction sets, kinematic graph neural algorithms, and deterministic state engines."
      />

      <div className="reveal mt-12 rounded-sm border border-white/10 bg-[#0f1118] shadow-2xl overflow-hidden">
        {/* Domain Tab Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-black/30">
          {DOMAINS.map((domain, index) => {
            const isSelected = activeTab === index
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-between p-4 sm:p-5 text-xs font-medium text-left transition-colors border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black font-semibold'
                    : 'text-body hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <span>{domain.label}</span>
                <span className={`text-[10px] ${isSelected ? 'text-black/60' : 'text-white/30'}`}>
                  0{index + 1}
                </span>
              </button>
            )
          })}
        </div>

        {/* Tab Content & Code Grid */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Domain Analysis */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[var(--accent-primary)]">
                  Focus Domain
                </span>
                <h3 className="text-white font-display text-2xl sm:text-3xl font-bold tracking-tight">
                  {current.headline}
                </h3>
              </div>

              <p className="text-body text-sm sm:text-base leading-relaxed">
                {current.summary}
              </p>

              {/* Mathematical Formula Callout */}
              {current.mathFormula && (
                <div className="rounded-sm border border-white/10 bg-white/[0.01] p-4 text-xs space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">
                    Governing Complexity
                  </span>
                  <div className="text-[var(--accent-primary)] font-mono font-medium pt-0.5">
                    {current.mathFormula}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Representative Project Jump Action */}
              <div className="rounded-sm border border-white/10 bg-white/[0.01] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-primary)]">
                    Related Project
                  </span>
                  <p className="font-display text-sm font-semibold text-white">
                    {current.featuredProject.title}
                  </p>
                  <p className="text-xs text-soft max-w-sm">
                    {current.featuredProject.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => smoothScrollTo('#projects')}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors shrink-0 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowUpRightIcon className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Right: Code Implementation Frame */}
            <div className="rounded-sm border border-white/10 bg-[#07080c] overflow-hidden shadow-2xl">
              <div className="border-b border-white/10 bg-[#0c0e14] px-4 py-2.5 flex items-center justify-between font-mono text-xs text-soft">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
                  <span className="text-white/80">{current.snippet.lang}</span>
                </div>
              </div>
              <pre className="p-5 overflow-x-auto font-mono text-xs text-emerald-400/90 leading-relaxed">
                <code>{current.snippet.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
