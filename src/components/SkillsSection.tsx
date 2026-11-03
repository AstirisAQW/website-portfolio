import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { SITE } from '../content/site'

const SKILL_COLUMNS = [
  { label: 'Languages', items: SITE.skills.languages },
  { label: 'Frameworks & libraries', items: SITE.skills.frameworks },
  { label: 'Tools', items: SITE.skills.tools },
]

export function SkillsSection() {
  return (
    <Section
      id="skills"
      wrapperClassName="border-b border-line"
      className="py-24 sm:py-36"
    >
      <SectionHeading title="Skills" />

      {/* 3-Column Editorial Index */}
      <div className="reveal mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-line">
        {SKILL_COLUMNS.map(({ label, items }, colIndex) => (
          <div
            key={label}
            className={
              colIndex === 0
                ? 'md:pr-10 lg:pr-12'
                : colIndex === 1
                  ? 'md:px-10 lg:px-12'
                  : 'md:pl-10 lg:pl-12'
            }
          >
            <h3 className="font-display text-3xl sm:text-4xl text-ink italic pb-6 border-b border-edge">
              {label}
            </h3>

            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li
                  key={item}
                  className="py-4 flex items-center justify-between text-base sm:text-lg text-body font-medium transition-colors hover:text-ink"
                >
                  <span>{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
