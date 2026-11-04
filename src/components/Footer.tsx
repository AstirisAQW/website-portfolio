import { SITE } from '../content/site'

export function Footer() {
  return (
    <footer className="border-t border-line py-8 px-6 text-center text-soft">
      <p className="mx-auto mb-0">{SITE.name}</p>
    </footer>
  )
}
