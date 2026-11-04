import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Logo } from './Logo'
import { SITE } from '../content/site'
import { CERTIFICATIONS, EDUCATION } from '../content/profile'
import { SKILL_GROUPS, SKILLS } from '../content/skills'

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const groups = gsap.utils.toArray<HTMLElement>('.logo-grid-group')
        groups.forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>('.logo-grid-item')
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
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-[4.5rem] border-b border-line scroll-mt-4"
    >
      <h2 className="reveal text-[2.2rem] mb-4">About</h2>

      <p className="reveal mb-0 max-w-[62ch] text-body">
        {SITE.shortBio}
      </p>

      {/* Education */}
      <h3 className="reveal text-[1.3rem] mt-9 mb-3">Education</h3>
      <ul className="reveal space-y-2">
        {EDUCATION.map((edu) => (
          <li key={edu.id} className="flex items-center gap-3 py-1.5">
            <Logo src={edu.logo} name={edu.school} size="lg" />
            <span className="leading-snug">
              <strong className="font-semibold text-ink">{edu.name}</strong>
              <br />
              <span>
                {edu.school}, {edu.year}
              </span>
              <br />
              <span className="text-soft">{edu.honors}</span>
            </span>
          </li>
        ))}
      </ul>

      {/* Three Skill Groups */}
      {SKILL_GROUPS.map((group) => {
        const items = SKILLS.filter((skill) => skill.group === group)
        return (
          <div key={group}>
            <h3 className="reveal text-[1.3rem] mt-9 mb-3">{group}</h3>
            <ul className="logo-grid-group grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-x-4 gap-y-1">
              {items.map((skill) => (
                <li
                  key={skill.name}
                  className="logo-grid-item flex items-center gap-2.5 py-1.5 text-body will-change-transform"
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
      <h3 className="reveal text-[1.3rem] mt-9 mb-3">Certificates</h3>
      <ul className="reveal space-y-2">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.id} className="flex items-center gap-3 py-1.5">
            <Logo src={cert.logo} name={cert.issuer} size="lg" />
            <span className="leading-snug">
              <strong className="font-semibold text-ink">{cert.name}</strong>
              <br />
              <span className="text-soft">
                {cert.issuer}, {cert.year}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
