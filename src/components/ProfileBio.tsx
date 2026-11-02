import { Picture } from './Picture'
import { SITE } from '../content/site'
import { smoothScrollTo } from '../utils/lenis'

export function ProfileBio() {
  return (
    <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
      {/* Left Column: Essential Editorial Intro */}
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-white font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {SITE.name}
          </h1>
          <p className="text-[var(--accent-primary)] text-lg sm:text-xl font-medium">
            {SITE.role}
          </p>
        </div>

        <p className="text-body text-base sm:text-lg leading-relaxed">
          {SITE.shortBio}
        </p>

        {/* Focal Actions: One Primary Button, One Secondary Text Link */}
        <div className="flex items-center gap-6 pt-2">
          <button
            type="button"
            onClick={() => smoothScrollTo('#projects')}
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200 cursor-pointer"
          >
            View Projects
          </button>

          <a
            href={SITE.resumeUrl}
            download
            className="text-sm font-medium text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Download Resume &darr;
          </a>
        </div>
      </div>

      {/* Right Column: Clean, Unadorned 4:5 Portrait */}
      <div className="flex justify-start lg:justify-end">
        <div className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm overflow-hidden rounded-sm shadow-xl">
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
