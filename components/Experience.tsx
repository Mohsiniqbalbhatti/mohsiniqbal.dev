import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  id?: string;
}

const Experience: React.FC<ExperienceProps> = ({ id = 'experience' }) => {
  return (
    <section id={id} className="min-h-screen py-20 relative z-10 flex flex-col justify-center bg-gradient-to-b from-black via-zinc-900/20 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
            Work History
          </h2>
          <p className="mt-4 text-gray-400">My professional journey so far</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Continuous Center Line (Desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Date Side / Spacer */}
                <div className="hidden md:block w-1/2 px-10 py-6">
                    <div className={`flex items-center gap-2 text-indigo-400 font-mono text-sm ${
                        index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                        {index % 2 !== 0 && <span>{exp.period}</span>}
                        <Calendar className="w-4 h-4" />
                        {index % 2 === 0 && <span>{exp.period}</span>}
                    </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 bg-indigo-500 rounded-full md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,1)] z-10 ring-4 ring-black" />

                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:px-10">
                  <div className="bg-zinc-900/60 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
                    {/* Mobile Date */}
                    <div className="md:hidden mb-3 text-indigo-400 font-mono text-xs flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> {exp.period}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{exp.role}</h3>
                    <h4 className="text-base text-gray-400 mb-4 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> {exp.company}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;