'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import ExplorerSidebar from '@/components/ExplorerSidebar';
import MobileEmulatorFrame from '@/components/MobileEmulatorFrame';
import HomeScreen from '@/components/HomeScreen';
import AboutScreen from '@/components/AboutScreen';
import ExperienceScreen from '@/components/ExperienceScreen';
import ProjectsScreen from '@/components/ProjectsScreen';
import ContactScreen from '@/components/ContactScreen';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const sections = ['home', 'about', 'experience', 'projects', 'contact'];

  const handleSectionChange = (newSection: string) => {
    const currentIndex = sections.indexOf(activeSection);
    const newIndex = sections.indexOf(newSection);
    setDirection(newIndex > currentIndex ? 'left' : 'right');
    setActiveSection(newSection);
  };

  const renderSection = () => {
    const transitionClass = direction === 'left' 
      ? 'animate-slideInLeft' 
      : 'animate-slideInRight';

    switch (activeSection) {
      case 'home':
        return <HomeScreen key="home" onNavigate={handleSectionChange} />;
      case 'about':
        return <AboutScreen key="about" />;
      case 'experience':
        return <ExperienceScreen key="experience" />;
      case 'projects':
        return <ProjectsScreen key="projects" />;
      case 'contact':
        return <ContactScreen key="contact" />;
      default:
        return <HomeScreen key="home" onNavigate={handleSectionChange} />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#2B2B2B]">
      {/* Android Studio Top Bar */}
      <div className="bg-[#3C3F41] border-b border-[#323232] h-12 flex items-center px-4">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-1 hover:bg-[#4A4A4A] rounded transition-colors lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5 text-[#3DDC84]" />
          </button>
          
          <svg className="w-6 h-6 text-[#3DDC84]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.523 15.341c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21m-3.041 0c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21M1.571 19.447c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162M1.571 15.341c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162z"/>
          </svg>
          <span className="text-[#A9B7C6] font-semibold text-sm">Android Portfolio</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-[#787878] text-xs font-mono">
            <div className="w-2 h-2 rounded-full bg-[#3DDC84]"></div>
            <span>Running</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Explorer Sidebar */}
        <ExplorerSidebar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange}
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Emulator View */}
        <div className="flex-1 bg-[#2B2B2B] overflow-hidden">
          <MobileEmulatorFrame 
            onHomeClick={() => handleSectionChange('home')}
          >
            <div className="h-full">
              {renderSection()}
            </div>
          </MobileEmulatorFrame>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-[#3C3F41] border-t border-[#323232] h-6 hidden sm:flex items-center px-4 text-[#787878] text-xs font-mono">
        <div className="flex items-center gap-4">
          <span>Pixel 6 API 35</span>
          <span>•</span>
          <span className="text-[#3DDC84]">samarth-chaplot</span>
        </div>
      </div>
    </div>
  );
}

