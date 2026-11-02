import { SECTIONS } from '../content/sections'
import { smoothScrollTo } from '../utils/lenis'

interface ScrollRailProps {
  activeSection: string
}

export function ScrollRail({ activeSection }: ScrollRailProps) {
  return (
    <nav
      aria-label="Section Navigation Rail"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3.5"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => smoothScrollTo(`#${section.id}`)}
            className="group flex items-center gap-3 cursor-pointer py-1"
            title={`${section.number} — ${section.tagline}`}
          >
            {/* Label pill on hover or when active */}
            <span
              className={`font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded transition-all duration-300 ${
                isActive
                  ? 'opacity-100 translate-x-0 bg-sand/80 text-ink border border-line shadow-xs font-semibold'
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-muted hover:text-body'
              }`}
            >
              {section.number} // {section.label}
            </span>

            {/* Glowing Indicator Dot */}
            <div className="relative flex items-center justify-center">
              {isActive && (
                <span
                  className="absolute h-4 w-4 rounded-full animate-ping opacity-75"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
              )}
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'h-3 w-3 shadow-sm'
                    : 'h-1.5 w-1.5 bg-muted/60 group-hover:bg-body group-hover:scale-125'
                }`}
                style={{
                  backgroundColor: isActive ? 'var(--accent-primary)' : undefined,
                  boxShadow: isActive ? '0 0 10px var(--accent-primary)' : undefined,
                }}
              />
            </div>
          </button>
        )
      })}
    </nav>
  )
}
