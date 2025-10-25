'use client';

import { useState, useEffect } from 'react';

const tabs = [
  { id: 'home', label: 'Home.kt', href: '#home' },
  { id: 'about', label: 'AboutMe.kt', href: '#about' },
  { id: 'experience', label: 'Experience.kt', href: '#experience' },
  { id: 'projects', label: 'Projects.kt', href: '#projects' },
  { id: 'contact', label: 'Contact.xml', href: '#contact' },
];

export default function AndroidStudioNav() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => ({
        id: tab.id,
        element: document.getElementById(tab.id),
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveTab(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: string, href: string) => {
    setActiveTab(tabId);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3C3F41] border-b border-[#323232] shadow-lg">
      <div className="flex items-center h-10 px-2">
        {/* Android Studio Logo/Icon */}
        <div className="flex items-center px-3 mr-2">
          <svg className="w-5 h-5 text-[#3DDC84]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.523 15.341c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21m-3.041 0c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21M1.571 19.447c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162M1.571 15.341c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162z"/>
          </svg>
        </div>

        {/* File Tabs */}
        <div className="flex items-center flex-1 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.href)}
              className={`
                relative px-4 h-full text-sm whitespace-nowrap transition-colors duration-200
                ${activeTab === tab.id
                  ? 'bg-[#4E5254] text-[#A9B7C6]'
                  : 'bg-[#3C3F41] text-[#787878] hover:bg-[#4A4A4A]'
                }
                ${index > 0 ? 'border-l border-[#323232]' : ''}
              `}
            >
              <span className="font-mono text-xs">{tab.label}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3DDC84]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Close/Minimize buttons (decorative) */}
        <div className="flex items-center gap-1 px-2">
          <div className="w-3 h-3 rounded-full bg-[#3DDC84] opacity-50"></div>
        </div>
      </div>
    </nav>
  );
}
