import { SITE } from '../../content/site'
import { LiveClock } from './LiveClock'

export function StatusStrip() {
  return (
    <div className="hero-strip relative flex justify-between items-center gap-4 py-2 px-4 bg-panel border border-line rounded-strip font-mono text-[12px] leading-[1.4] will-change-transform">
      <span className="flex items-center flex-wrap gap-2">
        <span className="h-[10px] w-[10px] rounded-full bg-ok" aria-hidden="true" />
        <strong className="text-ink font-semibold">{SITE.statusText}</strong>
        <span className="text-faint" aria-hidden="true">
          ·
        </span>
        <span className="text-soft">{SITE.location}</span>
      </span>
      <LiveClock />
    </div>
  )
}
