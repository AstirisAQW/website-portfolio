import { Section } from './Section'
import { ProfileBio } from './ProfileBio'

export function AboutSection() {
  return (
    <Section id="about" className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      <ProfileBio />
    </Section>
  )
}
