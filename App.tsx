import React from 'react';
import Scene from './components/Scene';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Experience from './components/Experience';
import { NAME, TITLE, BIO_SHORT, SOCIAL_LINKS } from './constants';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the navbar height to offset the scroll position
      const navHeight = 80; // approx height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Fixed Background 3D Scene */}
      <Scene />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black/20 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center gap-4">
          <h1 
            className="text-2xl font-bold tracking-tighter cursor-pointer hover:text-indigo-400 transition-colors" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {NAME}.
          </h1>
          {/* Navbar Status Badge */}
          <div className="hidden md:flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Open for Work</span>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('hero')} className="hover:text-indigo-400 transition-colors">Start</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-indigo-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-indigo-400 transition-colors">History</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-400 transition-colors">Work</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-400 transition-colors">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
             <span className="text-sm text-indigo-400 font-mono tracking-widest uppercase">Portfolio 2025</span>
             <div className="w-1 h-1 bg-gray-600 rounded-full" />
             <div className="flex items-center gap-2 bg-green-900/20 border border-green-500/30 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-400 tracking-wide">Available for hire</span>
             </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-2 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            {TITLE}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed pb-2">
            {BIO_SHORT}
          </p>

          {/* Socials */}
          <div className="flex justify-center gap-6 mt-12">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 hover:scale-110 transform duration-200">
                <Github className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 hover:scale-110 transform duration-200">
                <Linkedin className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.email} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 hover:scale-110 transform duration-200">
                <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
        >
            <ChevronDown className="w-8 h-8 text-gray-500" />
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-[#050505] to-[#050505]">
        <Skills id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
        
        {/* Footer */}
        <footer className="py-12 border-t border-white/10 bg-black text-center">
            <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} {NAME}. Built with vibe coding & snacks
            </p>
        </footer>
      </div>

      {/* AI Assistant Fab */}
      <ChatBot />

    </div>
  );
}

export default App;