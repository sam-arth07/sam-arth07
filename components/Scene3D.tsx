'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import Phone3D from './Phone3D';

interface Scene3DProps {
  rotation: [number, number, number];
  position: [number, number, number];
  mousePosition: { x: number; y: number };
}

export default function Scene3D({ rotation, position, mousePosition }: Scene3DProps) {
  return (
    <Canvas
      className="absolute inset-0 -z-10"
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#3DDC84" />
      <pointLight position={[10, -10, 5]} intensity={0.8} color="#4AE490" />
      <spotLight 
        position={[0, 15, 10]} 
        angle={0.4} 
        penumbra={1} 
        intensity={1.5} 
        castShadow 
        color="#ffffff"
      />

      <Suspense fallback={null}>
        <Phone3D rotation={rotation} position={position} mousePosition={mousePosition} />
      </Suspense>

      {/* Uncomment for development to enable camera controls */}
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </Canvas>
  );
}
