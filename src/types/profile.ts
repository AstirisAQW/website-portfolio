import type { ImageRef } from './image'

export interface Education {
  id: string
  degree: string
  description: string
}

export interface Honor {
  id: string
  title: string
  description: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  image: ImageRef
}
