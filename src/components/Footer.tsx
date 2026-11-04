import { SITE } from '../content/site'

export function Footer() {
  return (
    <footer className="py-5 px-6 text-center text-[0.9rem] text-soft">
      <p className="mx-auto mb-0">
        © {SITE.copyrightYear} {SITE.name}
      </p>
    </footer>
  )
}
