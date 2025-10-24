'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#2B2B2B] text-[#A9B7C6] pt-10">
      {/* Line numbers sidebar (decorative) */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#313335] border-r border-[#323232] flex flex-col items-center pt-20 text-[#606366] font-mono text-xs">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div key={num} className="h-8 flex items-center">
            {num}
          </div>
        ))}
      </div>

      <div className={`relative z-10 max-w-5xl mx-auto px-6 md:px-20 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Code-style hero content */}
        <div className="font-mono text-sm md:text-base space-y-2 mb-8">
          <p className="text-[#CC7832]">
            <span className="text-[#CC7832]">package</span> <span className="text-[#A9B7C6]">com.portfolio</span>
          </p>
          <p className="text-[#808080]">// Android Developer Portfolio</p>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#808080]">// </span>
            <span className="text-[#A9B7C6]">Hello, World!</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            <span className="text-[#CC7832]">I'm </span>
            <span className="text-[#3DDC84] font-bold">Samarth Chaplot</span>
            <span className="text-[#CC7832]">,</span>
          </p>
          <p className="text-xl md:text-2xl text-[#A9B7C6]">
            <span className="text-[#808080]">// </span>a passionate <span className="text-[#3DDC84]">Android Developer</span>
          </p>
        </div>

        {/* Code snippet style */}
        <div className="font-mono text-sm md:text-base space-y-2 mb-12 bg-[#313335] p-6 rounded border border-[#323232]">
          <p>
            <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">expertise</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span>
          </p>
          <p className="pl-4">
            <span className="text-[#6A8759]">"Kotlin"</span><span className="text-[#CC7832]">,</span> <span className="text-[#6A8759]">"Jetpack Compose"</span><span className="text-[#CC7832]">,</span>
          </p>
          <p className="pl-4">
            <span className="text-[#6A8759]">"Android SDK"</span><span className="text-[#CC7832]">,</span> <span className="text-[#6A8759]">"Clean Architecture"</span>
          </p>
          <p>
            <span className="text-[#A9B7C6]">)</span>
          </p>
        </div>

        {/* Run App Button */}
        <button
          onClick={scrollToProjects}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] font-semibold rounded transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
        >
          {/* Ripple effect container */}
          <span className="relative z-10 flex items-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>Run App</span>
          </span>
          
          {/* Ripple background */}
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </button>

        {/* Social Links */}
        <div className="mt-12 flex gap-6">
          <a
            href="https://github.com/sam-arth07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#787878] hover:text-[#3DDC84] transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/samarth-chaplot-130b88256"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#787878] hover:text-[#3DDC84] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#3DDC84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
