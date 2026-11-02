import { Section } from './Section'
import { SITE } from '../content/site'
import { CertificationsList, EducationList, HonorsList } from './Credentials'
import { ProfileBio } from './ProfileBio'

export function AboutSection() {
  return (
    <Section id="about" className="pt-28 pb-16">
      <div className="border-line space-y-2 border-b pb-6">
        <h1 className="text-ink text-3xl font-bold tracking-tight sm:text-4xl">{SITE.name}</h1>
        {SITE.title && <p className="text-body text-sm sm:text-base">{SITE.title}</p>}
      </div>

      <div className="mt-10 space-y-14">
        <ProfileBio />
        <EducationList />
        <HonorsList />
        <CertificationsList />
      </div>
    </Section>
  )
}