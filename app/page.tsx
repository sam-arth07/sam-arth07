'use client';

import { useState } from 'react';
import ExplorerSidebar from '@/components/ExplorerSidebar';
import MobileEmulatorFrame from '@/components/MobileEmulatorFrame';
import HeroMobile from '@/components/HeroMobile';
import SkillsMobile from '@/components/SkillsMobile';
import ExperienceMobile from '@/components/ExperienceMobile';
import ProjectsMobile from '@/components/ProjectsMobile';
import ContactMobile from '@/components/ContactMobile';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroMobile />;
      case 'about':
        return <SkillsMobile />;
      case 'experience':
        return <ExperienceMobile />;
      case 'projects':
        return <ProjectsMobile />;
      case 'contact':
        return <ContactMobile />;
      default:
        return <HeroMobile />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#2B2B2B]">
      {/* Android Studio Top Bar */}
      <div className="bg-[#3C3F41] border-b border-[#323232] h-12 flex items-center px-4">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-[#3DDC84]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.523 15.341c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21m-3.041 0c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21M1.571 19.447c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162M1.571 15.341c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162z"/>
          </svg>
          <span className="text-[#A9B7C6] font-semibold text-sm">Android Portfolio</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#787878] text-xs font-mono">
            <div className="w-2 h-2 rounded-full bg-[#3DDC84]"></div>
            <span>Running</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Explorer Sidebar */}
        <ExplorerSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        {/* Emulator View */}
        <div className="flex-1 bg-[#2B2B2B] overflow-hidden">
          <MobileEmulatorFrame 
            onHomeClick={() => setActiveSection('home')}
            onMenuClick={() => {}}
          >
            {renderSection()}
          </MobileEmulatorFrame>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-[#3C3F41] border-t border-[#323232] h-6 flex items-center px-4 text-[#787878] text-xs font-mono">
        <div className="flex items-center gap-4">
          <span>Pixel 6 API 35</span>
          <span>•</span>
          <span className="text-[#3DDC84]">samarth-chaplot</span>
        </div>
      </div>
    </div>
  );
}

