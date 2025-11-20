import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

interface SkillsProps {
  id?: string;
}

// Helper to distribute points on a sphere (Fibonacci Sphere)
const getSpherePositions = (count: number, radius: number) => {
  const positions: [number, number, number][] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
    const r = Math.sqrt(1 - y * y); // radius at y
    const theta = phi * i; // golden angle increment

    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    positions.push([x * radius, y * radius, z * radius]);
  }
  return positions;
};

const SkillBubble = ({ position, text, color }: { position: [number, number, number], text: string, color: string }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Make text always face camera
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh 
          onPointerOver={() => setHovered(true)} 
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.2 : 1}
        >
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshPhysicalMaterial 
            color={hovered ? "#6366f1" : "#ffffff"} // Indigo on hover
            roughness={0.1}
            metalness={0.1}
            transmission={0.6} // Glass effect
            thickness={1}
            transparent
            opacity={0.3}
          />
        </mesh>
        <Text
          position={[0, 0, 0.7]} // Slightly in front of sphere center
          fontSize={0.25}
          color={hovered ? "#ffffff" : "#e0e7ff"}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {text}
        </Text>
      </Float>
    </group>
  );
};

const RotatingCloud = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Calculate positions for all skills
  const positions = useMemo(() => getSpherePositions(SKILLS.length, 5.5), []);

  useFrame(() => {
    if (groupRef.current) {
      // Slow auto-rotation
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {SKILLS.map((skill, i) => (
        <SkillBubble 
          key={i} 
          position={positions[i]} 
          text={skill.name} 
          color="#6366f1"
        />
      ))}
    </group>
  );
};

const Skills: React.FC<SkillsProps> = ({ id = 'about' }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text & Top Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="z-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Technical Arsenal
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I believe in choosing the right tool for the job. While my core expertise lies in the <strong>React ecosystem</strong> and <strong>Cloud Architecture</strong>, I constantly expand my knowledge graph. 
              <br /><br />
              Explore the 3D cloud to see my full range of capabilities across Frontend, Backend, and DevOps.
            </p>
            
            {/* Top 4 Skills Progress Bars */}
            <div className="grid grid-cols-2 gap-4 mb-8">
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

            <div className="flex gap-2 text-sm text-gray-500">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">🖱️ Drag to rotate</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">✨ Hover to highlight</span>
            </div>
          </motion.div>

          {/* Right Side: 3D Interactive Skill Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[500px] w-full relative"
          >
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
             
             <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#818cf8" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c084fc" />
                
                <RotatingCloud />
                
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate={false} 
                    rotateSpeed={0.5}
                />
             </Canvas>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
