import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from './Icons'
import { SECTIONS } from '../content/sections'

export function Navbar({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'bg-paper/95 border-line shadow-xs backdrop-blur-md' : 'bg-paper border-hairline'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <a
          href="#about"
          className="text-ink hover:text-accent font-serif text-lg font-bold tracking-tight transition-colors"
        >
          Website Portfolio
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`border-b-2 pb-1 font-serif text-sm capitalize transition-colors ${
                  isActive
                    ? 'border-accent text-ink font-bold'
                    : 'text-soft hover:border-clay border-transparent hover:text-black'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? 'mobile-menu' : undefined}
          className="text-body hover:bg-wash rounded-md p-1.5 md:hidden"
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="bg-paper border-line animate-fade-in space-y-1 border-b px-4 pt-2 pb-4 shadow-lg md:hidden"
        >
          {SECTIONS.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'location' : undefined}
                className={`flex w-full items-center gap-3 rounded px-3 py-2 font-serif text-sm capitalize ${
                  isActive ? 'bg-accent font-bold text-white' : 'text-body hover:bg-tint'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>
      )}
    </header>
  )
}