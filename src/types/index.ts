export type TemplateType = 'minimal' | 'modern' | 'creative' | 'professional' | 'dark' | 'cyberpunk'

export interface PortfolioConfig {
  name: string
  email: string
  tagline: string
  website: string
  about: string
  tecnologies: string
  featuredProjects: string
}

export interface UserData {
  username:string
  name: string
  avatar_url: string
  templateId?: string
  email?: string
  tagline?: string
  website?: string
  about?: string
  tech: string
  projects: string
}