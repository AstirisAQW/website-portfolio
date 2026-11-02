import type { ImageRef } from './image'

export interface Project {
  id: string
  title: string
  description: string
  githubUrl: string
  image: ImageRef
}