import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Picture } from './Picture'
import { SITE } from '../content/site'

export function Hero() {
  const headerRef = useRef<HTMLElement>(null)
  const words = SITE.name.split(' ')

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

        tl.fromTo(
          '.hero-portrait-wrap',
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.95 }
        )
          .fromTo(
            '.hero-portrait-inner',
            { scale: 1.08 },
            { scale: 1, duration: 0.95 },
            0
          )
          .from(
            '.hero-word',
            {
              yPercent: 110,
              opacity: 0,
              duration: 0.8,
              stagger: 0.09,
            },
            0.15
          )
          .from(
            '.hero-sub',
            {
              y: 18,
              opacity: 0,
              duration: 0.7,
            },
            '-=0.45'
          )
          .from(
            '.hero-icon-item',
            {
              y: 16,
              opacity: 0,
              duration: 0.65,
              stagger: 0.08,
            },
            '-=0.45'
          )
      })
    },
    { scope: headerRef }
  )

  return (
    <header
      ref={headerRef}
      id="top"
      className="min-h-[90vh] flex items-center py-12"
    >
      <div className="mx-auto w-full max-w-[calc(1040px+3rem)] px-6 grid grid-cols-1 desk:grid-cols-[260px_1fr] gap-8 desk:gap-16 items-center text-center desk:text-left">
        {/* Left: Tall 3:4 Portrait (260px column on desktop, 240px centered on <860px) */}
        <div className="hero-portrait-wrap mx-auto w-[240px] desk:w-full aspect-[3/4] overflow-hidden border border-line bg-card will-change-transform">
          <div className="hero-portrait-inner h-full w-full will-change-transform">
            <Picture
              {...SITE.portrait}
              className="h-full w-full"
              imgClassName="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right: Name, Subtitle, Icon-Only Links Row */}
        <div>
          <h1
            aria-label={SITE.name}
            className="font-display text-[2.6rem] desk:text-[3.4rem] text-ink leading-[1.15]"
          >
            {words.map((word) => (
              <span
                key={word}
                className="inline-block overflow-hidden pb-1 mr-[0.22em] last:mr-0"
              >
                <span className="hero-word inline-block will-change-transform">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-sub font-display text-[1.4rem] text-soft mt-2 mb-0">
            {SITE.tagline}
          </p>

          {/* Icon-Only Link Row (30px icons) */}
          <ul className="mt-5 flex items-center justify-center desk:justify-start gap-5">
            <li className="hero-icon-item will-change-transform">
              <a
                href={SITE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center text-ink hover:opacity-75 transition-opacity"
              >
                <img
                  src={SITE.githubIconUrl}
                  alt="GitHub"
                  className="h-[30px] w-[30px] object-contain"
                />
              </a>
            </li>

            <li className="hero-icon-item will-change-transform">
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center text-ink hover:opacity-75 transition-opacity"
              >
                <img
                  src={SITE.linkedinIconUrl}
                  alt="LinkedIn"
                  className="h-[30px] w-[30px] object-contain"
                />
              </a>
            </li>

            <li className="hero-icon-item will-change-transform">
              <a
                href={SITE.email}
                aria-label="Email"
                className="inline-flex items-center justify-center text-ink hover:text-accent transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-[30px] w-[30px]"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3.5 7l8.5 6 8.5-6" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
