import { SECTIONS } from '../content/sections'
import { smoothScrollTo } from '../utils/lenis'

interface ScrollRailProps {
  activeSection: string
}

export function ScrollRail({ activeSection }: ScrollRailProps) {
  return (
    <nav
      aria-label="Section Index Rail"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 select-none"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => smoothScrollTo(`#${section.id}`)}
            className="group flex items-center gap-3 cursor-pointer py-1"
            title={`${section.number} // ${section.tagline}`}
          >
            {/* Label in architectural monospace */}
            <span
              className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border transition-all duration-200 ${
                isActive
                  ? 'border-white bg-white text-black font-bold opacity-100 translate-x-0'
                  : 'border-white/10 bg-[#0e1017] text-white/50 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              [{section.number} // {section.label}]
            </span>

            {/* Indicator Indicator */}
            <div className="relative flex items-center justify-center">
              <span
                className={`transition-all duration-300 ${
                  isActive
                    ? 'h-2 w-2 rounded-none'
                    : 'h-1 w-1 bg-white/20 group-hover:bg-white/60 group-hover:scale-125'
                }`}
                style={{
                  backgroundColor: isActive ? 'var(--accent-primary)' : undefined,
                  boxShadow: isActive ? '0 0 8px var(--accent-primary)' : undefined,
                }}
              />
            </div>
          </button>
        )
      })}
    </nav>
  )
}
