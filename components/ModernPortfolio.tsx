'use client';

import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import Scene3D from '@/components/3d/Scene3D';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/modern-sections/HeroSection';
import AboutSection from '@/components/modern-sections/AboutSection';
import ProjectsSection from '@/components/modern-sections/ProjectsSection';
import SkillsSection from '@/components/modern-sections/SkillsSection';
import ContactSection from '@/components/modern-sections/ContactSection';

export default function ModernPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Track scroll position for 3D scene
    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      setScrollY(scroll);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      {/* 3D Background Scene */}
      <Scene3D scrollY={scrollY} />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Grain texture overlay for visual richness */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
