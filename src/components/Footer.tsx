import { SECTIONS } from '../content/sections'
import { SITE } from '../content/site'

export function Footer() {
  return (
    <footer className="bg-footer text-paper border-footer-line relative z-10 border-t px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 font-mono text-xs md:flex-row">
        <div>
          {SITE.years} © {SITE.name}
        </div>
        <nav aria-label="Footer" className="text-footer-link flex flex-wrap items-center gap-4">
          {SECTIONS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="capitalize underline hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
