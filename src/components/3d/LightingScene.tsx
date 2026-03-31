'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// LED Light Beam Effect
function LEDBeam({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const beamRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (beamRef.current) {
      const intensity = 0.3 + Math.sin(state.clock.getElapsedTime() * 2 + delay) * 0.3;
      if (beamRef.current.material instanceof THREE.MeshBasicMaterial) {
        beamRef.current.material.opacity = intensity;
      }
    }
  });

  return (
    <mesh ref={beamRef} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.05, 0.15, 4, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

// Smart Grid Network
function SmartGrid() {
  const gridRef = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const gridSize = 8;
    const divisions = 16;
    const step = gridSize / divisions;

    // Horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const y = -gridSize / 2 + i * step;
      points.push(new THREE.Vector3(-gridSize / 2, y, 0));
      points.push(new THREE.Vector3(gridSize / 2, y, 0));
    }

    // Vertical lines
    for (let i = 0; i <= divisions; i++) {
      const x = -gridSize / 2 + i * step;
      points.push(new THREE.Vector3(x, -gridSize / 2, 0));
      points.push(new THREE.Vector3(x, gridSize / 2, 0));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, []);

  useFrame((state) => {
    if (gridRef.current && gridRef.current.material instanceof THREE.LineBasicMaterial) {
      gridRef.current.material.opacity = 0.15 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  return (
    <lineSegments ref={gridRef} geometry={geometry} position={[0, 0, -3]}>
      <lineBasicMaterial color="#06b6d4" transparent opacity={0.15} />
    </lineSegments>
  );
}

// Energy Flow Particles (representing smart automation data)
function EnergyFlow() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 150;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 1.5 + Math.random() * 2.5;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 5;
      
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = height;
      positions[i3 + 2] = Math.sin(angle) * radius;
      
      speeds[i] = 0.5 + Math.random() * 1;
      
      // Cyan, purple, green color scheme for LED/EV/Smart
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i3] = 0.02; colors[i3 + 1] = 0.71; colors[i3 + 2] = 0.83; // cyan
      } else if (colorChoice < 0.7) {
        colors[i3] = 0.66; colors[i3 + 1] = 0.33; colors[i3 + 2] = 0.97; // purple
      } else {
        colors[i3] = 0.06; colors[i3 + 1] = 0.73; colors[i3 + 2] = 0.51; // green
      }
    }
    
    return { positions, colors, speeds };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const speeds = particles.speeds;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.getElapsedTime() * speeds[i] + i) * 0.002;
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
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Central LED Control Hub
function ControlHub() {
  const hubRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (hubRef.current) {
      hubRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={hubRef}>
        {/* Central core */}
        <mesh>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            wireframe
          />
        </mesh>
        
        {/* Inner glow sphere */}
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* Orbiting connection nodes */}
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i * Math.PI) / 2) * 1.2,
              Math.sin((i * Math.PI) / 2) * 0.3,
              Math.sin((i * Math.PI) / 2) * 1.2,
            ]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#a855f7" : "#10b981"}
              emissive={i % 2 === 0 ? "#a855f7" : "#10b981"}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
        
        <pointLight position={[0, 0, 0]} intensity={1.2} color="#06b6d4" distance={6} />
      </group>
    </Float>
  );
}

// Lighting rings representing integrated systems
function SystemRing({ radius, color, speed, offset }: { radius: number; color: string; speed: number; offset: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current && ringRef.current.material instanceof THREE.MeshBasicMaterial) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * speed + offset;
      ringRef.current.material.opacity = 0.25 + Math.sin(state.clock.getElapsedTime() * 1.5 + offset) * 0.15;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  );
}

export default function LightingScene() {
  return (
    <Canvas 
      className="absolute inset-0" 
      camera={{ position: [0, 0, 5], fov: 65 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 4, 4]} intensity={0.6} color="#06b6d4" />
      <pointLight position={[-4, -4, -4]} intensity={0.4} color="#a855f7" />
      <pointLight position={[0, 4, -4]} intensity={0.3} color="#10b981" />
      
      <ControlHub />
      
      <SystemRing radius={1.4} color="#06b6d4" speed={0.25} offset={0} />
      <SystemRing radius={2.0} color="#a855f7" speed={-0.18} offset={Math.PI / 3} />
      <SystemRing radius={2.5} color="#10b981" speed={0.15} offset={Math.PI / 2} />
      
      <EnergyFlow />
      <SmartGrid />
      
      <LEDBeam position={[1.5, 0, 0]} color="#06b6d4" delay={0} />
      <LEDBeam position={[-1.5, 0, 0]} color="#a855f7" delay={1} />
      <LEDBeam position={[0, 1.5, 0]} color="#10b981" delay={2} />
    </Canvas>
  );
}
