'use client';

import { ReactNode, useRef } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface MobileEmulatorFrameProps {
  children: ReactNode;
  onHomeClick?: () => void;
  onMenuClick?: () => void;
}

export default function MobileEmulatorFrame({ children, onHomeClick, onMenuClick }: MobileEmulatorFrameProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    scrollToTop();
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const handleMenuClick = () => {
    toggleTheme();
    if (onMenuClick) {
      onMenuClick();
    }
  };

  // Theme colors
  const bgColor = theme === 'dark' ? '#2B2B2B' : '#F5F5F5';
  const statusBarBg = theme === 'dark' ? '#2B2B2B' : '#FFFFFF';
  const textColor = theme === 'dark' ? 'white' : 'black';

  return (
    <div className="flex items-center justify-center h-full w-full">
      {/* Phone Frame */}
      <div className="relative bg-[#1E1E1E] rounded-[40px] shadow-2xl" style={{ width: '375px', height: '812px', maxHeight: '90vh' }}>
        {/* Phone Border */}
        <div className="absolute inset-0 rounded-[40px] border-[14px] border-[#0A0A0A]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-[#0A0A0A] rounded-b-3xl z-20"></div>
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-8 text-xs z-10" style={{ backgroundColor: statusBarBg, color: textColor }}>
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-4 h-3" />
            </div>
          </div>

          {/* Screen Content */}
          <div ref={contentRef} className="absolute top-11 left-0 right-0 bottom-0 overflow-y-auto custom-scrollbar" style={{ backgroundColor: bgColor }}>
            {children}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20"></div>
      </div>

      {/* Emulator Controls (decorative) */}
      <div className="ml-6 space-y-3">
        <div className="flex flex-col gap-2">
          <div 
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#3C3F41] rounded-lg border border-[#323232] flex items-center justify-center cursor-pointer hover:bg-[#4A4A4A] transition-colors group relative"
            title="Scroll to Top"
          >
            <svg className="w-6 h-6 text-[#3DDC84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="absolute left-full ml-2 px-2 py-1 bg-[#2B2B2B] text-[#A9B7C6] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Scroll to Top
            </span>
          </div>
          <div 
            onClick={handleHomeClick}
            className="w-12 h-12 bg-[#3C3F41] rounded-lg border border-[#323232] flex items-center justify-center cursor-pointer hover:bg-[#4A4A4A] transition-colors group relative"
            title="Home"
          >
            <div className="w-6 h-6 rounded-full border-2 border-[#3DDC84]"></div>
            <span className="absolute left-full ml-2 px-2 py-1 bg-[#2B2B2B] text-[#A9B7C6] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Go Home
            </span>
          </div>
          <div 
            onClick={handleMenuClick}
            className="w-12 h-12 bg-[#3C3F41] rounded-lg border border-[#323232] flex items-center justify-center cursor-pointer hover:bg-[#4A4A4A] transition-colors group relative"
            title="Menu"
          >
            <svg className="w-6 h-6 text-[#3DDC84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="absolute left-full ml-2 px-2 py-1 bg-[#2B2B2B] text-[#A9B7C6] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Toggle Theme ({theme === 'dark' ? 'Light' : 'Dark'})
            </span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-[#323232]">
          <div className="text-[#787878] text-xs font-mono space-y-1">
            <div>Pixel 6</div>
            <div>API 35</div>
            <div className="text-[#3DDC84]">Running</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1E1E1E;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4A4A4A;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}
