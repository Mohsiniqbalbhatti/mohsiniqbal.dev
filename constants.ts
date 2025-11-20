import { Project, Skill, Experience } from './types';

export const NAME = "Mohsin Iqbal";
export const TITLE = "Creative Software Engineer";
export const BIO_SHORT = "I build immersive web experiences and intelligent systems.";
export const BIO_LONG = `I am a passionate Full Stack Engineer specializing in React, 3D web technologies, and AI integration. With over 5 years of experience, I bridge the gap between functional engineering and creative design, delivering performant applications that leave a lasting impression.`;

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'MongoDB / Postgres', level: 75, category: 'DataBase' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Three.js / FramerMotion', level: 85, category: 'Frontend' },
  { name: 'GoLang', level: 88, category: 'Backend' },
  { name: 'Docker / AWS', level: 70, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nebula Dashboard",
    description: "A real-time data visualization platform for crypto analytics using D3 and WebGL.",
    tech: ["React", "D3.js", "WebGL", "Node.js"],
    image: "https://picsum.photos/600/400?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "Echo AI Chat",
    description: "A multimodal chat interface leveraging Gemini Pro for image and text analysis.",
    tech: ["TypeScript", "Gemini API", "Tailwind"],
    image: "https://picsum.photos/600/400?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "Voxel Architect",
    description: "Browser-based 3D voxel editor built with React Three Fiber.",
    tech: ["R3F", "Zustand", "IndexedDB"],
    image: "https://picsum.photos/600/400?random=3",
    link: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "Igknight Tech",
    period: "Jul 2025 - Present",
    description: "Full-time · Lahore, Punjab, Pakistan · On-site. Contributing to core product development and software engineering initiatives."
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "Mar 2024 - Sep 2025",
    description: "Developed and maintain Full Stack applications using MERN stack, Next.js and TypeScript. Used Tailwind CSS and Bootstrap for stylings."
  },
  {
    role: "Mern stack Developer",
    company: "Stack System Technologies",
    period: "Sep 2024 - Apr 2025",
    description: "Part-time · London, United Kingdom. Specialized in Express.js, Tailwind, and backend integration."
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Mohsiniqbalbhatti",
  linkedin: "https://www.linkedin.com/in/mohsin-iqbal-bhatti/",
  email: "mailto:mohsiniqbalbhatti0024@gmail.com"
};
