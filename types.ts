
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}
