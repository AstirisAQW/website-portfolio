import type { ImageRef } from './image'

export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  githubUrl: string
  liveUrl?: string
  tags: string[]
  image: ImageRef
}
