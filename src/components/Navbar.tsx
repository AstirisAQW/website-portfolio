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
    smoothScrollTo(`#${sectionId}`, -72)
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090c]/90 border-b border-white/10 shadow-2xl backdrop-blur-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Scroll Depth Line at the top edge */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--accent-primary)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identification */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('about')
          }}
          className="group flex items-center gap-2 cursor-pointer font-mono text-xs uppercase tracking-wider"
        >
          <span className="text-[var(--accent-primary)] font-bold">[{SITE.name}]</span>
          <span className="text-white/30 hidden sm:inline">// CS '26</span>
        </a>

        {/* Desktop Navigation Links & Presets */}
        <div className="hidden items-center gap-6 md:flex font-mono text-xs">
          <nav aria-label="Main Navigation" className="flex items-center gap-5">
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
                  className={`relative py-1 transition-colors uppercase tracking-wider ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] text-white/30 mr-1.5">{item.number}</span>
                  <span>[{item.label}]</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px]"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="h-4 w-px bg-white/10" />

          {/* Palette Selector */}
          <PaletteSwitcher />

          {/* CV Action */}
          <a
            href={SITE.resumeUrl}
            download
            className="group flex items-center gap-1.5 border border-white/20 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
          >
            <DownloadIcon className="h-3 w-3" />
            <span>[GET CV]</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <PaletteSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? 'mobile-menu' : undefined}
            className="border border-white/15 bg-white/[0.03] text-white p-2"
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
          className="border-b border-white/10 bg-[#0c0e14] px-5 pt-4 pb-6 shadow-2xl md:hidden font-mono text-xs"
        >
          <div className="space-y-1">
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
                  className={`flex w-full items-center justify-between p-3 uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'border border-white bg-white text-black font-bold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    <span>[{item.label}]</span>
                  </div>
                  <span className="text-[10px] text-white/40">{item.number}</span>
                </a>
              )
            })}
          </div>

          <div className="pt-4 border-t border-white/10 mt-3">
            <a
              href={SITE.resumeUrl}
              download
              className="flex w-full items-center justify-center gap-2 border border-white bg-white p-3 font-mono text-xs uppercase tracking-wider font-bold text-black"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              <span>[DOWNLOAD RESUME PDF]</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
