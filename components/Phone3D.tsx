'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface Phone3DProps {
  rotation: [number, number, number];
  position: [number, number, number];
  mousePosition: { x: number; y: number };
}

export default function Phone3D({ rotation, position, mousePosition }: Phone3DProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Parallax effect on mouse movement
  useFrame(() => {
    if (meshRef.current) {
      const parallaxX = mousePosition.x * 0.1;
      const parallaxY = mousePosition.y * 0.1;
      
      meshRef.current.position.x = position[0] + parallaxX;
      meshRef.current.position.y = position[1] - parallaxY;
      meshRef.current.position.z = position[2];
    }
  });

  return (
    <group ref={meshRef} rotation={rotation}>
      {/* Phone body */}
      <RoundedBox args={[2, 4, 0.2]} radius={0.2} smoothness={4}>
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1}
        />
      </RoundedBox>

      {/* Phone screen */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[1.85, 3.7, 0.01]} />
        <meshStandardMaterial 
          color="#0f0f0f" 
          emissive="#1a1a1a" 
          emissiveIntensity={0.8}
          roughness={0.05}
          metalness={0.1}
        />
      </mesh>

      {/* Screen glow */}
      <mesh position={[0, 0, 0.12]}>
        <planeGeometry args={[1.8, 3.6]} />
        <meshBasicMaterial color="#3DDC84" transparent opacity={0.3} />
      </mesh>

      {/* Camera notch */}
      <mesh position={[0, 1.7, 0.11]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.03, 0.15, 4, 8]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>

      {/* Phone edge highlight */}
      <mesh position={[0, 0, 0]}>
        <RoundedBox args={[2.05, 4.05, 0.21]} radius={0.2} smoothness={4}>
          <meshBasicMaterial color="#3DDC84" transparent opacity={0.1} wireframe />
        </RoundedBox>
      </mesh>
    </group>
  );
}
