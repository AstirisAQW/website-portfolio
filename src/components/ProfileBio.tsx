import { Picture } from './Picture'
import { SocialLinks } from './SocialLinks'
import { SubHeading } from './SubHeading'
import { SITE } from '../content/site'

export function ProfileBio() {
  return (
    <div className="space-y-8">
      <SubHeading>About Me</SubHeading>

      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="flex shrink-0 flex-col items-start">
          <div className="bg-sand border-edge h-48 w-44 rounded border p-1.5 shadow-xs">
            <Picture
              {...SITE.portrait}
              className="h-full w-full rounded-xs"
              imgClassName="object-cover"
            />
          </div>
          <SocialLinks className="mt-3" />
        </div>

        <div className="text-body space-y-4 text-sm leading-relaxed sm:text-base">
          {SITE.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
