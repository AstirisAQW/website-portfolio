import { Section } from './Section'
import { ProfileBio } from './ProfileBio'

export function AboutSection() {
  return (
    <Section id="about" className="pt-24 sm:pt-32 pb-20">
      <ProfileBio />
    </Section>
  )
}
