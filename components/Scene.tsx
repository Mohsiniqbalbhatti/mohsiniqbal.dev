import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Fix: Add type definitions for React Three Fiber elements to resolve JSX errors
// We augment both global JSX and React.JSX to support various TypeScript/React configurations
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
      
      // Subtle scaling based on mouse position (parallax effect simulation)
      const mouseX = state.mouse.x * 0.5;
      const mouseY = state.mouse.y * 0.5;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouseX, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseY, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const ParticleRing = () => {
    const ref = useRef<THREE.Points>(null);
    
    // Define count as a constant to ensure integer divisions. 
    // We want 2000 particles, so we need 2000 * 3 coordinates.
    const pointCount = 2000;

    useFrame((state) => {
        if(ref.current) {
             ref.current.rotation.z += 0.001;
             ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
        }
    });

    const points = useMemo(() => {
        const p = new Float32Array(pointCount * 3);
        for (let i = 0; i < pointCount; i++) {
            const i3 = i * 3;
            p[i3] = (Math.random() - 0.5) * 15;     // x
            p[i3 + 1] = (Math.random() - 0.5) * 15; // y
            p[i3 + 2] = (Math.random() - 0.5) * 15; // z
        }
        return p;
    }, []);

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[points, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#00ffff"
                transparent
                opacity={0.6}
                sizeAttenuation={true}
            />
        </points>
    )
}

const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#00ffff" intensity={2} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSphere />
        <ParticleRing />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />
    </div>
  );
};

export default Scene;