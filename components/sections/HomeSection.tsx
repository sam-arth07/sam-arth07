'use client';

import { ChevronDown } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white">
          Samarth Chaplot
        </h1>
        <h2 className="text-3xl md:text-5xl font-light mb-8 text-[#3DDC84]">
          Android Developer
        </h2>
        <blockquote className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 italic mb-12">
          "If I can't even protect my captain's dream, then whatever ambition I have is nothing but talk!"
          <footer className="text-sm mt-2 text-gray-400">— Roronoa Zoro, One Piece</footer>
        </blockquote>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#3DDC84]" />
        </div>
      </div>
    </section>
  );
}
