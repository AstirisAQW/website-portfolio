import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Logo } from './Logo'
import { CERTIFICATIONS, EDUCATION } from '../content/profile'
import { SKILL_GROUPS, SKILLS } from '../content/skills'

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const groups = gsap.utils.toArray<HTMLElement>('.logo-list-group')
        groups.forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>('.logo-list-item')
          if (!items.length) return

          gsap.from(items, {
            y: 18,
            opacity: 0,
            duration: 0.65,
            stagger: 0.04,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
            },
          })
        })
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="about" className="pt-8 pb-0 scroll-mt-4">
      <h2 className="reveal text-[2.1rem] mb-4">About</h2>

      {/* Education */}
      <h3 className="reveal text-[1.25rem] mt-9 mb-3">Education</h3>
      <ul className="logo-list-group">
        {EDUCATION.map((edu) => (
          <li
            key={edu.id}
            className="logo-list-item flex items-center gap-3 py-[0.35rem] will-change-transform"
          >
            <Logo src={edu.logo} name="USTP" size="lg" />
            <span>
              <strong className="font-semibold text-ink">{edu.name}</strong>
              <br />
              {edu.school}, {edu.year}
              <br />
              {edu.honors}
            </span>
          </li>
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
                  className="logo-list-item flex items-center gap-[0.6rem] py-[0.35rem] will-change-transform"
                >
                  <Logo src={skill.logo} name={skill.name} size="sm" />
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
          <li
            key={cert.id}
            className="logo-list-item flex items-center gap-3 py-[0.35rem] will-change-transform"
          >
            <Logo src={cert.logo} name={cert.issuer} size="lg" />
            <span>
              <strong className="font-semibold text-ink">{cert.name}</strong>
              <br />
              {cert.issuer}, {cert.year}
            </span>
          </li>
        ))}
      </ul>

      {/* Section Divider */}
      <div
        aria-hidden="true"
        className="section-divider mt-[4.5rem] h-[1px] w-full origin-left bg-line will-change-transform"
      />
    </section>
  )
}
