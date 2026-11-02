import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Picture } from './Picture'
import { SocialLinks } from './SocialLinks'
import { ArrowDownIcon, DownloadIcon, SparklesIcon } from './Icons'
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

      tl.from('.hero-badge', {
        y: -14,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-title',
          {
            y: 28,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4',
        )
        .from(
          '.hero-sub',
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.5',
        )
        .from(
          '.hero-portrait',
          {
            scale: 0.94,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5',
        )
        .from(
          '.hero-bio',
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4',
        )
        .from(
          '.hero-tech-pills',
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.35',
        )
        .from(
          '.hero-actions',
          {
            y: 14,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3',
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="space-y-12">
      {/* Top Academic & Availability Terminal Pill */}
      <div className="hero-badge flex flex-wrap items-center gap-2">
        <div className="glass-card flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs border border-[var(--accent-border)] shadow-xs">
          <span
            className="h-2 w-2 rounded-full animate-ping"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          />
          <span className="text-ink font-semibold">
            Cum Laude • DOST-SEI JLSS Scholar
          </span>
          <span className="text-muted">•</span>
          <span className="text-soft">USTP Class of 2026</span>
        </div>
      </div>

      {/* Main Hero Header */}
      <div className="space-y-4">
        <h1 className="hero-title text-ink font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.98]">
          Joseph{' '}
          <span
            className="bg-clip-text text-transparent transition-all duration-500"
            style={{ backgroundImage: 'var(--accent-gradient)' }}
          >
            Deysolong
          </span>
        </h1>
        <p className="hero-sub text-soft font-mono text-base sm:text-lg lg:text-xl font-medium tracking-tight">
          <span className="text-[var(--accent-primary)] font-semibold">&gt;</span>{' '}
          Computer Scientist • Systems & Graph ML Engineer
        </p>
      </div>

      {/* Profile & Portrait Grid */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        {/* Portrait Card with Modern Glass Border */}
        <div className="hero-portrait flex flex-col items-start space-y-4">
          <div className="glass-card group relative w-52 sm:w-60 overflow-hidden rounded-2xl p-2.5 transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-lg">
            {/* Ambient subtle backlight */}
            <div
              className="absolute -inset-1 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            />
            <Picture
              {...SITE.portrait}
              className="aspect-square w-full rounded-xl object-cover"
              imgClassName="object-cover w-full h-full rounded-xl"
            />
            <div className="mt-2.5 flex items-center justify-between px-1">
              <span className="font-mono text-[11px] text-soft">J. Deysolong</span>
              <span className="font-mono text-[10px] text-muted flex items-center gap-1">
                <SparklesIcon className="h-3 w-3 text-[var(--accent-primary)]" />
                <span>USTP CS</span>
              </span>
            </div>
          </div>
          <SocialLinks className="pt-1" />
        </div>

        {/* Narrative & High-Tech Context */}
        <div className="space-y-6">
          <div className="hero-bio text-body font-sans text-base sm:text-lg leading-relaxed space-y-4">
            {SITE.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Technical Competencies Array */}
          <div className="hero-tech-pills space-y-2 pt-1">
            <span className="text-muted font-mono text-xs uppercase tracking-wider block">
              Core Technical Foundation
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                'MIPS Assembly',
                'PyTorch',
                'Graph Kinematics',
                'Algorithms',
                'React 19',
                'TypeScript',
                'Supabase',
                'Vis.js',
                'C / C++',
              ].map((tech) => (
                <span
                  key={tech}
                  className="glass-card hover:border-[var(--accent-border)] text-ink rounded-lg px-2.5 py-1 font-mono text-xs transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-actions flex flex-wrap items-center gap-3 pt-3">
            <button
              type="button"
              onClick={() => smoothScrollTo('#spectrum')}
              className="hover:scale-105 active:scale-95 text-white inline-flex items-center gap-2 rounded-xl px-5 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg cursor-pointer"
              style={{
                background: 'var(--accent-gradient)',
                boxShadow: '0 0 20px var(--accent-glow)',
              }}
            >
              <span>Explore Spectrum</span>
              <ArrowDownIcon className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => smoothScrollTo('#projects')}
              className="glass-card hover:border-[var(--accent-border)] hover:text-ink text-soft inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-mono text-xs font-semibold transition-all cursor-pointer"
            >
              <span>View Projects</span>
            </button>

            <a
              href={SITE.resumeUrl}
              download
              className="glass-card hover:border-[var(--accent-border)] hover:text-ink text-soft inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-mono text-xs font-semibold transition-all"
            >
              <DownloadIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
