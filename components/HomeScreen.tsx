'use client';

import { User, Grid3x3, MessageSquare, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface HomeScreenProps {
  onNavigate: (section: string) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const { theme } = useTheme();
  
  const apps = [
    { id: 'about', label: 'About Me', icon: User, color: '#4CAF50' },
    { id: 'projects', label: 'Projects', icon: Grid3x3, color: '#2196F3' },
    { id: 'experience', label: 'Experience', icon: MessageSquare, color: '#FF9800' },
    { id: 'contact', label: 'Contact', icon: Mail, color: '#F44336' },
  ];

  const bgColor = theme === 'dark' 
    ? 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e]' 
    : 'bg-gradient-to-b from-blue-50 to-blue-100';
  
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`h-full ${bgColor} p-6 flex flex-col`}>
      {/* Time Widget */}
      <div className={`text-center mb-8 ${textColor}`}>
        <div className="text-6xl font-light mb-1">
          {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
        </div>
        <div className="text-sm opacity-70">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* App Icons Grid */}
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-2 gap-6 w-full">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => onNavigate(app.id)}
              className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: app.color }}
              >
                <app.icon className="w-8 h-8 text-white" />
              </div>
              <span className={`text-sm font-medium ${textColor}`}>{app.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className={`mt-auto mb-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-white/80'} backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-3`}>
        <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Search</span>
      </div>
    </div>
  );
}
