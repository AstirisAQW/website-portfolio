import type { ImageRef } from './image'

export interface SiteConfig {
  hero: {
    name: string
    role: string
    shortBio: string
    availability: string
    location: string
    timeZone: string
    badge: string
  }
  links: {
    github: string
    linkedin: string
    email: string
    githubIconUrl: string
    linkedinIconUrl: string
  }
  resume: {
    url: string
    fileName: string
    summary: string
  }
  images: {
    portrait: ImageRef
    star: ImageRef
    texture: string
  }
  copyrightYear: string
}
