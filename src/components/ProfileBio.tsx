import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Picture } from './Picture'
import { SocialLinks } from './SocialLinks'
import { ArrowDownIcon, DownloadIcon } from './Icons'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'

export function ProfileBio() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-meta', {
        y: -12,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-heading-line',
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          '-=0.4',
        )
        .from(
          '.hero-portrait-frame',
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5',
        )
        .from(
          '.hero-manifesto',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4',
        )
        .from(
          '.hero-ledger',
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.35',
        )
        .from(
          '.hero-cta-group',
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3',
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="space-y-12 lg:space-y-16">
      {/* Top Technical Metadata Strip */}
      <div className="hero-meta border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-soft">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-[var(--accent-primary)] animate-pulse" />
          <span className="text-white font-semibold">
            [STATUS: ACTIVE // OPEN FOR ROLES 2026]
          </span>
          <span className="text-white/20">|</span>
          <span className="text-white/70">USTP // CUM LAUDE</span>
        </div>

        <div className="text-[11px] text-white/50 hidden sm:block">
          LOC: 8.4857° N, 124.6567° E • PHT (UTC+8)
        </div>
      </div>

      {/* Hero Typographic Block */}
      <div className="space-y-3">
        <div className="hero-heading-line">
          <h1 className="text-ink font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.92]">
            JOSEPH
          </h1>
        </div>
        <div className="hero-heading-line flex flex-col md:flex-row md:items-baseline justify-between gap-4">
          <h1 className="text-ink font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.92] text-white/90">
            DEYSOLONG
          </h1>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[var(--accent-primary)] font-semibold border-l-2 border-[var(--accent-primary)] pl-3">
            SYSTEMS ARCHITECTURE & GRAPH ML
          </span>
        </div>
      </div>

      {/* Asymmetric Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_20rem] gap-12 lg:gap-16 items-start">
        {/* Left Column: Manifesto & Architectural Ledger */}
        <div className="space-y-8">
          <div className="hero-manifesto space-y-4">
            <p className="font-sans text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
              Computer Science graduate from the{' '}
              <strong className="text-white font-medium">
                University of Science and Technology of Southern Philippines
              </strong>
              . Engineering across bare-metal MIPS assembly, temporal graph kinematic algorithms,
              and modern full-stack application platforms.
            </p>
            <p className="font-sans text-sm sm:text-base text-body leading-relaxed max-w-2xl">
              I prioritize theoretical rigor, deterministic execution, and disciplined code
              craftsmanship over decorative styling. Comfortable in register allocation, algorithmic
              complexity optimization, and production web engineering.
            </p>
          </div>

          {/* Architectural System Ledger Table */}
          <div className="hero-ledger border border-white/10 bg-white/[0.02] font-mono text-xs">
            <div className="border-b border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-widest text-white/50">
              ENGINEERING SPECIFICATION & METRICS
            </div>
            <div className="divide-y divide-white/5">
              <div className="grid grid-cols-3 px-4 py-2.5">
                <span className="text-white/40 uppercase">DEGREE</span>
                <span className="col-span-2 text-white font-medium">B.S. in Computer Science (2026)</span>
              </div>
              <div className="grid grid-cols-3 px-4 py-2.5">
                <span className="text-white/40 uppercase">DISTINCTIONS</span>
                <span className="col-span-2 text-white font-medium">Cum Laude • DOST-SEI JLSS Scholar</span>
              </div>
              <div className="grid grid-cols-3 px-4 py-2.5">
                <span className="text-white/40 uppercase">CERTIFICATION</span>
                <span className="col-span-2 text-white font-medium">Cisco Certified (Networking Basics, 2024)</span>
              </div>
              <div className="grid grid-cols-3 px-4 py-2.5">
                <span className="text-white/40 uppercase">DOMAINS</span>
                <span className="col-span-2 text-white/80">Graph Kinematics • Assembly • React 19 • Supabase</span>
              </div>
            </div>
          </div>

          {/* Architectural Button Actions */}
          <div className="hero-cta-group flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => smoothScrollTo('#projects')}
              className="group relative inline-flex items-center gap-2 border border-white bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-black transition-all hover:bg-transparent hover:text-white cursor-pointer"
            >
              <span>[ VIEW SELECTED WORKS ]</span>
              <ArrowDownIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={() => smoothScrollTo('#spectrum')}
              className="group inline-flex items-center gap-2 border border-white/20 bg-transparent px-5 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-white/90 hover:border-white hover:text-white transition-all cursor-pointer"
            >
              <span>[ ARCHITECTURE MATRIX ]</span>
            </button>

            <a
              href={SITE.resumeUrl}
              download
              className="group inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-xs uppercase tracking-wider text-soft hover:text-white hover:border-white/30 transition-all"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              <span>[ RESUME PDF ]</span>
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Portrait Card */}
        <div className="hero-portrait-frame space-y-4">
          <div className="relative border border-white/15 bg-[#0b0d13] p-3 shadow-2xl">
            {/* Architectural Registration Corners */}
            <span className="absolute top-1 left-1 font-mono text-[9px] text-white/30 select-none">┌</span>
            <span className="absolute top-1 right-1 font-mono text-[9px] text-white/30 select-none">┐</span>
            <span className="absolute bottom-1 left-1 font-mono text-[9px] text-white/30 select-none">└</span>
            <span className="absolute bottom-1 right-1 font-mono text-[9px] text-white/30 select-none">┘</span>

            <div className="relative aspect-square w-full overflow-hidden border border-white/10 bg-black/40">
              <Picture
                {...SITE.portrait}
                className="h-full w-full object-cover"
                imgClassName="object-cover w-full h-full grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-white/50 px-1">
              <span>PLATE_01 // J. DEYSOLONG</span>
              <span className="text-[var(--accent-primary)]">USTP_2026</span>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.02] p-3">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
