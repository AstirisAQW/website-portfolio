export interface Palette {
  id: string
  name: string
  label: string
  primary: string
  secondary: string
  glow: string
  subtle: string
  border: string
  gradient: string
}

export const PALETTES: Palette[] = [
  {
    id: 'cyan',
    name: 'Cyber Cyan',
    label: 'Cyan',
    primary: '#06b6d4',
    secondary: '#3b82f6',
    glow: 'rgba(6, 182, 212, 0.35)',
    subtle: 'rgba(6, 182, 212, 0.12)',
    border: 'rgba(6, 182, 212, 0.35)',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  },
  {
    id: 'violet',
    name: 'Hyper Violet',
    label: 'Violet',
    primary: '#a855f7',
    secondary: '#ec4899',
    glow: 'rgba(168, 85, 247, 0.35)',
    subtle: 'rgba(168, 85, 247, 0.12)',
    border: 'rgba(168, 85, 247, 0.35)',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
  },
  {
    id: 'emerald',
    name: 'Matrix Emerald',
    label: 'Emerald',
    primary: '#10b981',
    secondary: '#06b6d4',
    glow: 'rgba(16, 185, 129, 0.35)',
    subtle: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.35)',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
  },
  {
    id: 'amber',
    name: 'Solar Amber',
    label: 'Amber',
    primary: '#f59e0b',
    secondary: '#ef4444',
    glow: 'rgba(245, 158, 11, 0.35)',
    subtle: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.35)',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
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
    root.style.setProperty('--accent-gradient', selected.gradient)
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

