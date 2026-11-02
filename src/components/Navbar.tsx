import { useEffect, useState } from 'react'
import { CloseIcon, DownloadIcon, MenuIcon } from './Icons'
import { SECTIONS, type SectionId } from '../content/sections'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'
import { PaletteSwitcher } from './PaletteSwitcher'

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      const winHeight = document.documentElement.scrollHeight - window.innerHeight
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleNavClick = (sectionId: SectionId) => {
    setMenuOpen(false)
    smoothScrollTo(`#${sectionId}`, -68)
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080a11]/85 border-line border-b shadow-lg backdrop-blur-md'
          : 'bg-transparent border-transparent border-b'
      }`}
    >
      {/* Scroll Progress Bar at the top edge */}
      <div
        className="absolute top-0 left-0 h-[2.5px] transition-all duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'var(--accent-gradient, var(--accent-primary))',
          boxShadow: '0 0 10px var(--accent-glow)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand & Terminal Wordmark */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('about')
          }}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{
                backgroundColor: 'var(--accent-primary)',
                boxShadow: '0 0 8px var(--accent-primary)',
              }}
            />
            <span className="text-ink group-hover:text-[var(--accent-primary)] font-display text-lg font-bold tracking-tight transition-colors">
              {SITE.name}
            </span>
          </div>
          <span className="border-line bg-sand/60 text-soft hidden items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] md:inline-flex">
            <span>CS '26</span>
            <span className="text-muted">•</span>
            <span className="text-emerald-400">Available</span>
          </span>
        </a>

        {/* Desktop Navigation & Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="Main" className="flex items-center gap-6">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id as SectionId)
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
                    isActive ? 'text-ink font-semibold' : 'text-soft hover:text-ink'
                  }`}
                >
                  <span className="text-[10px] opacity-40 mr-1">{item.number}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all"
                      style={{
                        backgroundColor: 'var(--accent-primary)',
                        boxShadow: '0 0 8px var(--accent-primary)',
                      }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="h-4 w-px bg-line" />

          {/* Theme Palette Switcher */}
          <PaletteSwitcher />

          {/* Resume Download Action */}
          <a
            href={SITE.resumeUrl}
            download
            className="border-line glass-card hover:border-[var(--accent-border)] hover:text-ink text-soft inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition-all shadow-2xs"
          >
            <DownloadIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile controls: Palette Switcher & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <PaletteSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? 'mobile-menu' : undefined}
            className="border-line glass-card text-ink rounded-lg p-2 transition-colors"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className="bg-paper/95 border-line space-y-1.5 border-b px-4 pt-3 pb-5 shadow-2xl backdrop-blur-xl md:hidden animate-fade-in"
        >
          {SECTIONS.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id as SectionId)
                }}
                aria-current={isActive ? 'location' : undefined}
                className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-sand text-ink font-bold border border-line'
                    : 'text-body hover:bg-tint'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-[var(--accent-primary)]" />
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] text-muted">{item.number}</span>
              </a>
            )
          })}

          <div className="pt-2">
            <a
              href={SITE.resumeUrl}
              download
              className="border-line glass-card hover:border-[var(--accent-border)] flex w-full items-center justify-center gap-2 rounded-lg py-2.5 font-mono text-xs text-ink transition-colors"
            >
              <DownloadIcon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>Download Official Resume</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
