import type { ImageRef } from './image'

export type ProjectCategory = 'systems' | 'ml' | 'web' | 'simulation'

export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  githubUrl: string
  liveUrl?: string
  category: ProjectCategory
  categoryLabel: string
  tags: string[]
  year: string
  highlights?: string[]
  image: ImageRef
}
