import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { SITE } from '../content/site'

const SKILL_ROWS = [
  { label: 'Languages', items: SITE.skills.languages },
  { label: 'Frameworks & libraries', items: SITE.skills.frameworks },
  { label: 'Tools', items: SITE.skills.tools },
]

export function SkillsSection() {
  return (
    <Section id="skills" className="py-24 sm:py-32">
      <SectionHeading title="Skills" />
      <div className="reveal mt-12 space-y-6">
        {SKILL_ROWS.map(({ label, items }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-4">
            <span className="text-soft text-sm font-medium w-48 shrink-0 pt-1">{label}</span>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="border border-line bg-paper px-2.5 py-1 text-xs text-body rounded-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

