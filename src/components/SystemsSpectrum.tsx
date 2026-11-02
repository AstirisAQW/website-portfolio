import { useState } from 'react'
import { ArrowUpRightIcon, CpuIcon, LayersIcon, SparklesIcon } from './Icons'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { smoothScrollTo } from '../utils/lenis'

interface DomainInfo {
  id: string
  codePrefix: string
  label: string
  shortTitle: string
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
    codePrefix: 'SYS-01',
    label: 'SYSTEMS & BARE-METAL ARCHITECTURE',
    shortTitle: 'SYSTEMS',
    icon: CpuIcon,
    headline: 'Low-Level MIPS Assembly & Stack Allocation',
    summary:
      'Direct manipulation of CPU registers, activation record stack frame management, and recursion optimization. Eliminates runtime garbage collection overhead through deterministic memory layouts.',
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
      description: 'Single-player blackjack engine engineered purely in bare-metal MIPS assembly without runtimes.',
    },
  },
  {
    id: 'ml',
    codePrefix: 'ML-02',
    label: 'TEMPORAL GRAPH ML & KINEMATICS',
    shortTitle: 'GRAPH ML',
    icon: SparklesIcon,
    headline: 'Node Embedding Kinematics & Anomaly Detection',
    summary:
      'Modeling dynamic graph evolution by treating node embedding trajectories as physical kinematic systems. Computes instantaneous velocity and acceleration vectors to identify topological anomalies.',
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
      description: 'Post-hoc anomaly detection module for temporal graphs tracking node embedding kinematics.',
    },
  },
  {
    id: 'web',
    codePrefix: 'WEB-03',
    label: 'DETERMINISTIC AUTOMATA & PLATFORMS',
    shortTitle: 'FULL-STACK',
    icon: LayersIcon,
    headline: 'Finite State Automata & Reactive Runtimes',
    summary:
      'Building state machines with verifiable formal language transitions, interactive browser-based graph visualizations, and production relational schema architectures.',
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
    <Section id="spectrum" className="py-28">
      <SectionHeading
        number="03"
        title="Architecture Matrix & Disciplines"
        subtitle="Deconstructing core technical competencies: from bare-metal instruction sets to kinematic graph neural algorithms and deterministic state engines."
      />

      <div className="card-architectural mt-12 border border-white/10 shadow-2xl">
        {/* Technical Top Header Bar */}
        <div className="border-b border-white/10 bg-white/[0.02] px-6 py-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[var(--accent-primary)] font-bold">
              [{current.codePrefix}]
            </span>
            <span className="text-white/30">|</span>
            <span className="text-white font-semibold tracking-wider">
              PARADIGM MATRIX // SPECIFICATION SHEET
            </span>
          </div>

          <div className="flex items-center gap-3 text-soft text-[11px]">
            <span>PRECISION: DETERMINISTIC</span>
            <span className="text-white/20">•</span>
            <span>SPEC: REVISION 2026.1</span>
          </div>
        </div>

        {/* Paradigm Tab Switcher (Architectural Inverted Tabs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-black/40">
          {DOMAINS.map((domain, index) => {
            const isSelected = activeTab === index
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-between p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-left transition-all border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black font-bold'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
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

        {/* Tab Content & Blueprint Code Grid */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Domain Analysis */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="font-mono text-xs text-[var(--accent-primary)]">
                  // {current.codePrefix} DEFINITION
                </div>
                <h3 className="text-ink font-display text-2xl sm:text-3xl font-bold tracking-tight">
                  {current.headline}
                </h3>
              </div>

              <p className="text-body font-sans text-sm sm:text-base leading-relaxed">
                {current.summary}
              </p>

              {/* Mathematical Formula Callout */}
              {current.mathFormula && (
                <div className="border border-white/10 bg-white/[0.02] p-4 font-mono text-xs space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                    GOVERNING MODEL / COMPLEXITY
                  </span>
                  <div className="text-[var(--accent-primary)] font-medium pt-0.5">
                    {current.mathFormula}
                  </div>
                </div>
              )}

              {/* Technologies Array */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                  TECHNICAL COMPETENCIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-white/80"
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>
              </div>

              {/* Representative Project Jump Action */}
              <div className="border border-white/10 bg-white/[0.02] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-primary)]">
                    CONNECTED REPOSITORY
                  </span>
                  <p className="font-display text-sm font-bold text-white">
                    {current.featuredProject.title}
                  </p>
                  <p className="font-sans text-xs text-soft max-w-sm">
                    {current.featuredProject.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => smoothScrollTo('#projects')}
                  className="group inline-flex items-center gap-1.5 border border-white/30 bg-white/[0.05] px-4 py-2 font-mono text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all shrink-0 cursor-pointer"
                >
                  <span>[ VIEW WORK ]</span>
                  <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Right: Real Code Implementation Frame */}
            <div className="border border-white/15 bg-[#050609] overflow-hidden shadow-2xl">
              <div className="border-b border-white/10 bg-[#090b10] px-4 py-2.5 flex items-center justify-between font-mono text-xs text-soft">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[var(--accent-primary)]" />
                  <span className="text-white font-medium">{current.snippet.lang}</span>
                </div>
                <span className="text-[10px] text-white/30">READONLY // ARCHIVE</span>
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
