'use client';

import { ReactNode } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface MobileEmulatorFrameProps {
  children: ReactNode;
}

export default function MobileEmulatorFrame({ children }: MobileEmulatorFrameProps) {
  return (
    <div className="flex items-center justify-center h-full p-8">
      {/* Phone Frame */}
      <div className="relative bg-[#1E1E1E] rounded-[40px] shadow-2xl" style={{ width: '375px', height: '812px' }}>
        {/* Phone Border */}
        <div className="absolute inset-0 rounded-[40px] border-[14px] border-[#0A0A0A]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-[#0A0A0A] rounded-b-3xl z-20"></div>
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-11 bg-[#2B2B2B] flex items-center justify-between px-8 text-white text-xs z-10">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-4 h-3" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="absolute top-11 left-0 right-0 bottom-0 bg-[#2B2B2B] overflow-y-auto custom-scrollbar">
            {children}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20"></div>
      </div>

      {/* Emulator Controls (decorative) */}
      <div className="ml-6 space-y-3">
        <div className="flex flex-col gap-2">
          <div className="w-12 h-12 bg-[#3C3F41] rounded-lg border border-[#323232] flex items-center justify-center cursor-pointer hover:bg-[#4A4A4A] transition-colors">
            <svg className="w-6 h-6 text-[#3DDC84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <div className="w-12 h-12 bg-[#3C3F41] rounded-lg border border-[#323232] flex items-center justify-center cursor-pointer hover:bg-[#4A4A4A] transition-colors">
            <div className="w-6 h-6 rounded-full border-2 border-[#3DDC84]"></div>
          </div>
          <div className="w-12 h-12 bg-[#3C3F41] rounded-lg border border-[#323232] flex items-center justify-center cursor-pointer hover:bg-[#4A4A4A] transition-colors">
            <svg className="w-6 h-6 text-[#3DDC84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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
