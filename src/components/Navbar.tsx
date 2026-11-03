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
    <header className="fixed top-0 right-0 left-0 z-50 bg-nav border-b border-nav-muted/20 text-nav-ink">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Brand Name */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('about')
          }}
          className="text-nav-ink font-display text-2xl tracking-tight hover:text-nav-accent transition-colors"
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
                  className={`relative py-1 font-medium transition-colors ${
                    isActive
                      ? 'text-nav-ink font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-nav-accent'
                      : 'text-nav-muted hover:text-nav-ink'
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
            className="text-sm font-medium text-nav-ink border border-nav-ink hover:bg-nav-ink hover:text-nav px-4 py-1.5 rounded-sm transition-colors"
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
            className="text-nav-ink hover:text-nav-accent p-2 transition-colors"
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
          className="border-b border-nav-muted/20 bg-nav px-6 py-6 md:hidden text-sm"
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
                    isActive ? 'text-nav-accent font-semibold' : 'text-nav-muted hover:text-nav-ink'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="pt-4 border-t border-nav-muted/20 mt-4">
            <a
              href={SITE.resumeUrl}
              download
              className="block text-center rounded-sm border border-nav-ink px-4 py-2.5 text-sm font-medium text-nav-ink hover:bg-nav-ink hover:text-nav transition-colors"
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
