import { Picture } from './Picture'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'

export function ProfileBio() {
  return (
    <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
      {/* Left Column: Essential Editorial Intro */}
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-ink font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {SITE.name}
          </h1>
          <p className="text-[var(--accent-primary)] text-lg sm:text-xl font-medium">
            {SITE.role}
          </p>
        </div>

        <p className="text-body text-base sm:text-lg leading-[1.6] max-w-[65ch]">
          {SITE.shortBio}
        </p>

        {/* Focal Action: One Primary Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => smoothScrollTo('#projects')}
            className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90 cursor-pointer shadow-[0_1px_2px_rgba(35,38,43,0.06),0_8px_24px_rgba(35,38,43,0.06)]"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Right Column: Clean, Unadorned 4:5 Portrait */}
      <div className="flex justify-start lg:justify-end">
        <div className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm overflow-hidden rounded-sm border border-line shadow-[0_1px_2px_rgba(35,38,43,0.06),0_8px_24px_rgba(35,38,43,0.06)] bg-card">
          <Picture
            {...SITE.portrait}
            className="h-full w-full"
            imgClassName="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}
