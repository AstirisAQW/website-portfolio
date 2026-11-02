import { useEffect, useState } from 'react'
import { PALETTES, applyPalette, getInitialPalette, type Palette } from '../utils/theme'

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
        aria-label="Select accent theme"
        title={`Theme: ${current.name}`}
        className="group flex items-center gap-2 border border-white/15 bg-white/[0.03] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white hover:border-white/40 transition-colors cursor-pointer"
      >
        <span
          className="h-2 w-2 rounded-none transition-colors"
          style={{ backgroundColor: current.primary }}
        />
        <span className="hidden sm:inline font-medium">[{current.label}]</span>
        <span className="text-white/40 text-[10px]">▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="border border-white/20 bg-[#0c0e14] absolute right-0 mt-2 z-50 w-48 p-1 shadow-2xl font-mono text-xs">
            <div className="px-3 py-1.5 text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10">
              ACCENT PRESET
            </div>
            <div className="space-y-0.5 mt-1">
              {PALETTES.map((p) => {
                const isActive = current.id === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelect(p)}
                    className={`flex w-full items-center justify-between px-3 py-2 text-left uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-white text-black font-bold'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-none"
                        style={{ backgroundColor: p.primary }}
                      />
                      <span>{p.name}</span>
                    </div>
                    {isActive && <span>✓</span>}
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
