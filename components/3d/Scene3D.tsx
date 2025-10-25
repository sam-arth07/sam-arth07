'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingPhone({ scrollY }: { scrollY: number }) {
  const phoneRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (phoneRef.current) {
      // Rotation based on time and scroll
      phoneRef.current.rotation.y = state.clock.elapsedTime * 0.2 + scrollY * 0.001;
      phoneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Position based on scroll
      phoneRef.current.position.y = -scrollY * 0.002;
    }
    
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={phoneRef}>
        {/* Phone body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.8, 3.6, 0.15]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>

        {/* Screen with distortion effect */}
        <mesh position={[0, 0, 0.076]}>
          <planeGeometry args={[1.65, 3.3]} />
          <MeshDistortMaterial
            ref={materialRef}
            color="#3DDC84"
            speed={2}
            distort={0.3}
            radius={1}
            emissive="#3DDC84"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Glow effect */}
        <mesh position={[0, 0, 0.1]} scale={1.1}>
          <planeGeometry args={[1.7, 3.4]} />
          <meshBasicMaterial color="#3DDC84" transparent opacity={0.15} />
        </mesh>

        {/* Camera notch */}
        <mesh position={[0, 1.5, 0.08]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.04, 0.2, 4, 8]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
      </group>
    </Float>
  );
}

function AnimatedSphere({ position, color, scrollY }: { position: [number, number, number], color: string, scrollY: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5 - scrollY * 0.001;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        speed={3}
        distort={0.4}
        radius={1}
        transparent
        opacity={0.3}
        wireframe
      />
    </Sphere>
  );
}

export default function Scene3D({ scrollY = 0 }: { scrollY?: number }) {
  const spheres = useMemo(() => [
    { position: [-4, 2, -5] as [number, number, number], color: '#3DDC84' },
    { position: [4, -2, -8] as [number, number, number], color: '#4AE490' },
    { position: [-3, -3, -6] as [number, number, number], color: '#60E6A0' },
    { position: [5, 3, -7] as [number, number, number], color: '#3DDC84' },
  ], []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
        
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={2} 
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#3DDC84" />
        <pointLight position={[10, -5, 5]} intensity={1} color="#4AE490" />
        <spotLight
          position={[0, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2.5}
          castShadow
          color="#ffffff"
        />

        {/* Main 3D phone model */}
        <FloatingPhone scrollY={scrollY} />

        {/* Animated background spheres */}
        {spheres.map((sphere, i) => (
          <AnimatedSphere key={i} {...sphere} scrollY={scrollY} />
        ))}

        {/* Stars background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
      </Canvas>
    </div>
  );
}
