import { useRef } from 'react'
import { gsap } from '../motion/gsap'
import { DURATION_BASE, EASE_OUT } from '../motion/constants'
import { useMotion } from '../motion/useMotion'
import { CredentialRow } from './CredentialRow'
import { TechIcon } from './TechIcon'
import { CERTIFICATIONS, EDUCATION } from '../content/profile'
import { getSectionLabel } from '../content/sections'
import { SKILL_GROUPS, SKILLS } from '../content/skills'

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useMotion(sectionRef, () => {
    const groups = gsap.utils.toArray<HTMLElement>('.logo-list-group')
    groups.forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>('.logo-list-item')
      if (!items.length) return

      gsap.from(items, {
        y: 18,
        opacity: 0,
        duration: DURATION_BASE,
        stagger: 0.04,
        ease: EASE_OUT,
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
        },
      })
    })
  })

  return (
    <section ref={sectionRef} id="about" className="pt-8 pb-0 scroll-mt-4">
      <h2 className="reveal text-[2.1rem] mb-4">{getSectionLabel('about')}</h2>

      {/* Education */}
      <h3 className="reveal text-[1.25rem] mt-9 mb-3">Education</h3>
      <ul className="logo-list-group">
        {EDUCATION.map((edu) => (
          <CredentialRow
            key={edu.id}
            name={edu.name}
            logo={edu.logo}
            institution={edu.institution}
            organization={edu.school}
            year={edu.year}
            honors={edu.honors}
          />
        ))}
      </ul>

      {/* Three Skill Groups */}
      {SKILL_GROUPS.map((group) => {
        const items = SKILLS.filter((skill) => skill.group === group)
        return (
          <div key={group}>
            <h3 className="reveal text-[1.25rem] mt-9 mb-3">{group}</h3>
            <ul className="logo-list-group flex flex-wrap gap-y-2 gap-x-7">
              {items.map((skill) => (
                <li
                  key={skill.name}
                  className="logo-list-item flex items-center gap-[0.6rem] py-[0.35rem]"
                >
                  <TechIcon src={skill.logo} name={skill.name} size="sm" />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}

      {/* Certificates */}
      <h3 className="reveal text-[1.25rem] mt-9 mb-3">Certificates</h3>
      <ul className="logo-list-group">
        {CERTIFICATIONS.map((cert) => (
          <CredentialRow
            key={cert.id}
            name={cert.name}
            logo={cert.logo}
            institution={cert.institution}
            organization={cert.issuer}
            year={cert.year}
          />
        ))}
      </ul>

      {/* Section Divider */}
      <div
        aria-hidden="true"
        className="section-divider mt-[4.5rem] h-[1px] w-full origin-left bg-line"
      />
    </section>
  )
}
