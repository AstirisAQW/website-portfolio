import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from './Icons'
import { SECTIONS, type SectionId } from '../content/sections'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
          ? 'bg-[#090a0d]/90 border-b border-white/10 backdrop-blur-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand Name */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('about')
          }}
          className="text-white font-medium text-sm tracking-tight hover:text-[var(--accent-primary)] transition-colors"
        >
          {SITE.name}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex text-sm">
          <nav aria-label="Main Navigation" className="flex items-center gap-7">
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
                  className={`transition-colors font-medium ${
                    isActive
                      ? 'text-white'
                      : 'text-body hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <a
            href={SITE.resumeUrl}
            download
            className="text-xs font-medium text-white/80 hover:text-white border border-white/20 hover:border-white px-3.5 py-1.5 rounded-sm transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? 'mobile-menu' : undefined}
            className="text-white p-2 hover:text-[var(--accent-primary)] transition-colors"
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
          className="border-b border-white/10 bg-[#0c0e14] px-6 py-6 shadow-2xl md:hidden text-sm"
        >
          <div className="space-y-3">
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
                  className={`block py-2 font-medium transition-colors ${
                    isActive ? 'text-[var(--accent-primary)]' : 'text-body hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="pt-4 border-t border-white/10 mt-4">
            <a
              href={SITE.resumeUrl}
              download
              className="block text-center rounded-sm bg-white px-4 py-2.5 text-xs font-medium text-black transition-colors hover:bg-neutral-200"
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
