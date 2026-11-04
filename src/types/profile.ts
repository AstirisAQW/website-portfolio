export interface Education {
  id: string
  name: string
  logo: string
  group: 'Education'
  school: string
  year: string
  honors: string
}

export interface Certification {
  id: string
  name: string
  logo: string
  group: 'Certificates'
  issuer: string
  year: string
}
