import { Section } from './Section'
import { ProfileBio } from './ProfileBio'

export function AboutSection() {
  return (
    <Section
      id="about"
      wrapperClassName="overflow-hidden border-b border-line"
      className="pt-28 sm:pt-36 pb-24 sm:pb-32"
    >
      <ProfileBio />
    </Section>
  )
}
