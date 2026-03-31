'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Lightweight energy flow particles
function EnergyParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 100;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 2 + Math.random() * 3;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 4;
      
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = height;
      positions[i3 + 2] = Math.sin(angle) * radius;
      
      // Color variation: cyan, purple, pink
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i3] = 0;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 1; // cyan
      } else if (colorChoice < 0.66) {
        colors[i3] = 0.66;
        colors[i3 + 1] = 0.33;
        colors[i3 + 2] = 0.97; // purple
      } else {
        colors[i3] = 0.93;
        colors[i3 + 1] = 0.28;
        colors[i3 + 2] = 0.58; // pink
      }
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.getElapsedTime() + i) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Abstract LED light rings
function LightRing({ radius, color, speed, offset }: { radius: number; color: string; speed: number; offset: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current && ringRef.current.material instanceof THREE.MeshBasicMaterial) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * speed + offset;
      ringRef.current.material.opacity = 0.3 + Math.sin(state.clock.getElapsedTime() * 2 + offset) * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.02, 16, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

// Central energy core
function EnergyCore() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.2}
        />
      </mesh>
      
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#06b6d4" distance={8} />
    </Float>
  );
}

export default function EnhancedScene() {
  return (
    <Canvas 
      className="absolute inset-0" 
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]} // Limit pixel ratio for performance
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a855f7" />
      
      <EnergyCore />
      
      <LightRing radius={1.5} color="#06b6d4" speed={0.3} offset={0} />
      <LightRing radius={2.2} color="#a855f7" speed={-0.2} offset={Math.PI / 3} />
      <LightRing radius={2.8} color="#ec4899" speed={0.25} offset={Math.PI / 2} />
      
      <EnergyParticles />
    </Canvas>
  );
}
