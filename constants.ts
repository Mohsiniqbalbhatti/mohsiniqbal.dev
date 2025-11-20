import { Project, Skill, Experience } from './types';
import adamsImage from './assets/adams.png';
import mofaImage from './assets/mofa.png';
import smmImage from './assets/smm.png';


export const NAME = "Mohsin Iqbal";
export const TITLE = "Creative Software Engineer";
export const BIO_SHORT = "I build immersive web experiences and intelligent systems.";
export const BIO_LONG = `I am a passionate Full Stack Engineer specializing in React, 3D web technologies, and AI integration. With over 5 years of experience, I bridge the gap between functional engineering and creative design, delivering performant applications that leave a lasting impression.`;

export const SKILLS: Skill[] = [
  // Top / Core Skills
  { name: 'React', level: 98, category: 'Frontend', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Go', level: 60, category: 'Backend', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
  { name: 'TypeScript', level: 95, category: 'Frontend', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Node.js', level: 90, category: 'Backend', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },

  // Cloud & Tools
  { name: 'Docker', level: 85, category: 'Tools', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'AWS', level: 80, category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Linux', level: 85, category: 'Tools', icon: 'https://cdn.simpleicons.org/linux/FCC624' },

  // Frontend
  { name: 'Next.js', level: 95, category: 'Frontend', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Three.js', level: 80, category: 'Frontend', icon: 'https://cdn.simpleicons.org/threedotjs/white' },
  { name: 'Tailwind', level: 98, category: 'Frontend', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'HTML5', level: 100, category: 'Frontend', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', level: 98, category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

  // Backend
  { name: 'PostgreSQL', level: 88, category: 'Backend', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MongoDB', level: 90, category: 'Backend', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'GraphQL', level: 85, category: 'Backend', icon: 'https://cdn.simpleicons.org/graphql/E10098' },
  { name: 'Python', level: 75, category: 'Backend', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  
  // Other
  { name: 'Git', level: 95, category: 'Tools', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'NestJS', level: 85, category: 'Backend', icon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AdamsConsultant.com",
    description: "Built a sleek, responsive static website for a study abroad consultancy using Next.js, TypeScript, and Tailwind CSS. Integrated Email.js for contact form automation and deployed on Vercel. The site is 100% mobile-responsive with modern, clean UI across all devices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Email.js", "Vercel"],
    image: adamsImage,
    link: "https://adamsconsultant.com/",
    github: "#"

  },
  {
    id: 2,
    title: "MOFA Attestation Services",
    description: "Developed a high-performance, SEO-friendly website for a professional document attestation company. Built a server-side rendered (SSR) application using Next.js with a fast, intuitive user journey and multi-step 'Get Quote' form. Achieves excellent performance scores and ranks well on search engines.",
    tech: ["Next.js", "React", "Tailwind CSS", "Email.JS", "SSR", "SEO"],
    image: mofaImage,
    link: "https://mofaapostille.com/",
    github: "#"

  },
  {
    id: 3,
    title: "SMM Panel",
    description: "Developed a full-featured SMM Panel for a client now earning $200+/mo through social media engagement services. The MERN-stack platform features a clean admin dashboard, order management, secure JWT authentication, funds & payment handling, and real-time order tracking. Fully responsive design ensures usability across devices.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    image: smmImage,
    link: "#",
    github: "https://github.com/Mohsiniqbalbhatti/smm"
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
