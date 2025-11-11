export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'dev' | 'ops' | 'database' | 'gis' | 'ide';
  icon?: string;
  description?: string;
}

export interface Technology {
  name: string;
  icon?: string;
  url?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  technologies: Technology[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'fullstack' | 'mobile' | 'tool' | 'professional';
  features: ProjectFeature[];
  technologies: Technology[];
  status: 'completed' | 'ongoing' | 'planned';
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export interface ProfessionalContribution {
  company: string;
  role: string;
  period: string;
  projects: Project[];
  description: string;
}

export interface ExternalLink {
  platform: string;
  url: string;
  icon: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  description: string;
  avatarUrl: string;
  location: string;
  email: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  professionalContributions: ProfessionalContribution[];
  externalLinks: ExternalLink[];
}