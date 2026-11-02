import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { CertificationsList, EducationList, HonorsList } from './Credentials'

gsap.registerPlugin(ScrollTrigger)

export function CredentialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const blocks = containerRef.current?.querySelectorAll('.credential-card')
    if (!blocks || blocks.length === 0) return

    const ctx = gsap.context(() => {
      gsap.from(blocks, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="credentials" className="py-24">
      <SectionHeading
        number="04"
        title="Academic Honors & Credentials"
        subtitle="Scholarships, collegiate accolades from USTP, and verified industry networking certifications."
      />

      <div ref={containerRef} className="mt-12 space-y-12">
        <div className="credential-card">
          <EducationList />
        </div>
        <div className="credential-card">
          <HonorsList />
        </div>
        <div className="credential-card">
          <CertificationsList />
        </div>
      </div>
    </Section>
  )
}

