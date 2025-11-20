import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

interface SkillsProps {
  id?: string;
}

const Skills: React.FC<SkillsProps> = ({ id = 'about' }) => {
  // Transform skills for Radar Chart
  const chartData = SKILLS.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Technical Arsenal
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I believe in choosing the right tool for the job. My stack is centered around the JavaScript ecosystem, specifically React and Node.js, but my curiosity pushes me to explore low-level graphics with WebGL and cutting-edge AI integration.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {SKILLS.slice(0, 4).map((skill, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-colors">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm">{skill.name}</span>
                    <span className="text-indigo-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] w-full bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-4 flex items-center justify-center shadow-2xl relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10" />
             <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#444" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#aaa', fontSize: 12 }} />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;