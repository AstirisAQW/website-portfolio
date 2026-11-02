import { useEffect, useState } from 'react'
import { PALETTES, applyPalette, getInitialPalette, type Palette } from '../utils/theme'
import { SparklesIcon } from './Icons'

export function PaletteSwitcher() {
  const [current, setCurrent] = useState<Palette>(getInitialPalette)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    applyPalette(current.id)
  }, [current.id])

  const handleSelect = (palette: Palette) => {
    setCurrent(palette)
    applyPalette(palette.id)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Change Accent Color Palette"
        title={`Current palette: ${current.name}`}
        className="glass-card hover:border-[var(--accent-border)] flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-ink transition-all shadow-sm cursor-pointer"
      >
        <span
          className="h-2.5 w-2.5 rounded-full shadow-xs transition-colors duration-300"
          style={{
            backgroundColor: current.primary,
            boxShadow: `0 0 8px ${current.primary}`,
          }}
        />
        <span className="hidden sm:inline font-medium text-xs">{current.label}</span>
        <SparklesIcon className="h-3 w-3 text-soft" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="border-line bg-paper/95 backdrop-blur-md absolute right-0 mt-2 z-50 w-44 rounded-xl border p-2 shadow-2xl animate-fade-in">
            <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-muted">
              Select Color Palette
            </div>
            <div className="space-y-1 mt-1">
              {PALETTES.map((p) => {
                const isActive = current.id === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelect(p)}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 font-mono text-xs transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-sand text-ink font-semibold'
                        : 'text-body hover:bg-tint hover:text-ink'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: p.primary,
                          boxShadow: isActive ? `0 0 6px ${p.primary}` : 'none',
                        }}
                      />
                      <span>{p.name}</span>
                    </div>
                    {isActive && <span className="text-[var(--accent-primary)] text-xs">✓</span>}
                  </button>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
