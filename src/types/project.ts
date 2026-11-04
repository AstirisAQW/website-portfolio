import type { ImageRef } from './image'

export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  githubUrl: string
  tags: string[]
  image: ImageRef
}
