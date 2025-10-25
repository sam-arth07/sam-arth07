'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene3D from '@/components/Scene3D';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import GitHubSection from '@/components/sections/GitHubSection';
import LeetCodeSection from '@/components/sections/LeetCodeSection';
import ContactSection from '@/components/sections/ContactSection';
import { Sun, Moon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function NewPortfolio() {
  const [phoneRotation, setPhoneRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [phonePosition, setPhonePosition] = useState<[number, number, number]>([0, 0, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state: Phone in landscape orientation
      setPhoneRotation([0, 0, Math.PI / 2]);
      setPhonePosition([0, 0, 0]);

      // Scroll-driven rotation animation (landscape to portrait)
      const rotationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const rotation = Math.PI / 2 - (Math.PI / 2) * progress;
            setPhoneRotation([0, 0, rotation]);
          }
        }
      });

      // Position animation: Move phone to fixed position
      const positionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
          end: 'top top',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const x = -3 * progress; // Move to left side
            const y = 0;
            setPhonePosition([x, y, 0]);
          }
        }
      });

      // Fade in sections
      gsap.utils.toArray('.section-fade').forEach((section: any) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative ${darkMode ? 'bg-gradient-to-b from-black via-[#0a0a0a] to-black' : 'bg-gradient-to-b from-white via-gray-100 to-white'}`}
    >
      {/* 3D Scene Background */}
      <div className="fixed inset-0 -z-10">
        <Scene3D 
          rotation={phoneRotation}
          position={phonePosition}
          mousePosition={mousePosition}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      </div>

      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-blue-600" />
        )}
      </button>

      {/* Sections */}
      <div className="relative z-10">
        <HomeSection />
        <div className="section-fade">
          <AboutSection />
        </div>
        <div className="section-fade">
          <GitHubSection />
        </div>
        <div className="section-fade">
          <LeetCodeSection />
        </div>
        <div className="section-fade">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
