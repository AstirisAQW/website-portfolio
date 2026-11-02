export interface Palette {
  id: string
  name: string
  label: string
  primary: string
  secondary: string
  glow: string
  subtle: string
  border: string
}

export const PALETTES: Palette[] = [
  {
    id: 'monochrome',
    name: 'Titanium Stark',
    label: 'Titanium',
    primary: '#ffffff',
    secondary: '#a1a1aa',
    glow: 'rgba(255, 255, 255, 0.25)',
    subtle: 'rgba(255, 255, 255, 0.08)',
    border: 'rgba(255, 255, 255, 0.3)',
  },
  {
    id: 'amber',
    name: 'Sodium Vapor',
    label: 'Amber',
    primary: '#f59e0b',
    secondary: '#d97706',
    glow: 'rgba(245, 158, 11, 0.25)',
    subtle: 'rgba(245, 158, 11, 0.08)',
    border: 'rgba(245, 158, 11, 0.35)',
  },
  {
    id: 'cyan',
    name: 'Cobalt Pulse',
    label: 'Cobalt',
    primary: '#38bdf8',
    secondary: '#6366f1',
    glow: 'rgba(56, 189, 248, 0.25)',
    subtle: 'rgba(56, 189, 248, 0.08)',
    border: 'rgba(56, 189, 248, 0.35)',
  },
  {
    id: 'emerald',
    name: 'Radar Green',
    label: 'Phosphor',
    primary: '#10b981',
    secondary: '#059669',
    glow: 'rgba(16, 185, 129, 0.25)',
    subtle: 'rgba(16, 185, 129, 0.08)',
    border: 'rgba(16, 185, 129, 0.35)',
  },
]

export function applyPalette(paletteId: string): Palette {
  const selected = PALETTES.find((p) => p.id === paletteId) ?? PALETTES[0]
  if (typeof document !== 'undefined') {
    const root = document.documentElement
    root.style.setProperty('--accent-primary', selected.primary)
    root.style.setProperty('--accent-secondary', selected.secondary)
    root.style.setProperty('--accent-glow', selected.glow)
    root.style.setProperty('--accent-subtle', selected.subtle)
    root.style.setProperty('--accent-border', selected.border)
    try {
      localStorage.setItem('portfolio-palette', selected.id)
    } catch {
      // Ignore storage errors in private browsing
    }
  }
  return selected
}

export function getInitialPalette(): Palette {
  if (typeof window === 'undefined') return PALETTES[0]
  try {
    const saved = localStorage.getItem('portfolio-palette')
    return PALETTES.find((p) => p.id === saved) ?? PALETTES[0]
  } catch {
    return PALETTES[0]
  }
}
