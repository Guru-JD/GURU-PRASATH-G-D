export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  status?: string;
  description: string;
  highlights: string[];
  documentUrl?: string;
  documentLabel?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon?: string;
    tagline?: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location?: string;
  category: 'institutional' | 'independent' | 'departmental';
  description: string;
  responsibilities: string[];
  skillsUsed: string[];
}

export interface ProjectViewDetail {
  url: string;
  caption: string;
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  role: string[];
  highlight: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  features: string[];
  role: string[];
  description: string;
  image: string;
  images?: ProjectViewDetail[];
  architectureDetails: {
    frontend: string;
    backend: string;
    database: string;
    testing: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface ShortFilm {
  id: string;
  title: string;
  roles: string[];
  posterImage: string;
  synopsis: string;
  releaseYear?: string;
  keyContributions: string[];
  awardOrBadge?: string;
  youtubeUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  prize: string;
  year?: string;
  description: string;
  badgeColor: string;
  driveUrl?: string;
  fileId?: string;
  credentialId?: string;
}

export interface LeadershipRole {
  id: string;
  title: string;
  institution: string;
  period: string;
  responsibilities: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Tech' | 'Design' | 'Media' | 'AI';
  description: string;
  iconName: string;
  deliverables: string[];
  typicalTimeline: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FutureGoal {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  category: string;
  credentialId?: string;
  description?: string;
  skills?: string[];
  certificateImage?: string;
  certificateType?: string;
  driveUrl?: string;
  fileId?: string;
}

export interface LanguageItem {
  name: string;
  proficiency?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Behind the Scenes' | 'Cinematography' | 'On Set' | 'Lighting & Rigging' | 'Events & Workshops' | 'Editing & Color' | 'Production';
  imageUrl: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  date?: string;
  location?: string;
  description: string;
  projectTag?: string;
  cameraGear?: string;
  tags: string[];
  // Extended work & multi-photo breakdown
  roleScope?: string[];
  keyContributions?: string[];
  workflowStages?: { stage: string; detail: string }[];
  galleryPhotos?: {
    url: string;
    caption: string;
    tag?: string;
    badge?: string;
  }[];
  clientOrOrg?: string;
  impactMetrics?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organizationOrProject: string;
  avatarText?: string;
  rating: number;
  content: string;
  tag: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

