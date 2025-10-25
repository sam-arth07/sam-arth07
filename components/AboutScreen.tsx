'use client';

import { User, Briefcase, GraduationCap, Code2, ChevronRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function AboutScreen() {
  const { theme } = useTheme();
  
  const bgColor = theme === 'dark' ? '#2B2B2B' : '#F5F5F5';
  const cardBg = theme === 'dark' ? '#313335' : '#FFFFFF';
  const textColor = theme === 'dark' ? '#A9B7C6' : '#333333';
  const accentColor = '#3DDC84';

  const skills = [
    'Kotlin', 'Java', 'Jetpack Compose', 'Room', 'Retrofit', 'Hilt', 'MVVM', 'Clean Architecture'
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor: bgColor }}>
      {/* Header */}
      <div className="sticky top-0 z-10 px-4 py-4" style={{ backgroundColor: accentColor }}>
        <h1 className="text-xl font-bold text-[#2B2B2B]">About Me</h1>
        <p className="text-sm text-[#2B2B2B]/80">Profile & Settings</p>
      </div>

      {/* Profile Card */}
      <div className="p-4">
        <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: accentColor }}>
              <User className="w-8 h-8 text-[#2B2B2B]" />
            </div>
            <div>
              <h2 className="text-lg font-bold" style={{ color: textColor }}>Samarth Chaplot</h2>
              <p className="text-sm" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>Android Developer</p>
            </div>
          </div>
        </div>

        {/* Settings List */}
        <div className="space-y-2">
          {/* Status */}
          <div className="rounded-lg overflow-hidden" style={{ backgroundColor: cardBg }}>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5" style={{ color: accentColor }} />
                <div className="text-left">
                  <p className="text-sm font-medium" style={{ color: textColor }}>Status</p>
                  <p className="text-xs" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
                    Student, Aspiring Android Developer
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5" style={{ color: theme === 'dark' ? '#808080' : '#999' }} />
            </button>
          </div>

          {/* Education */}
          <div className="rounded-lg overflow-hidden" style={{ backgroundColor: cardBg }}>
            <button className="w-full px-4 py-4 flex items-center justify-between hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5" style={{ color: accentColor }} />
                <div className="text-left">
                  <p className="text-sm font-medium" style={{ color: textColor }}>Education</p>
                  <p className="text-xs" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
                    VIT • B.Tech CSE • 2026
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5" style={{ color: theme === 'dark' ? '#808080' : '#999' }} />
            </button>
          </div>

          {/* Skills */}
          <div className="rounded-lg p-4" style={{ backgroundColor: cardBg }}>
            <div className="flex items-center gap-3 mb-3">
              <Code2 className="w-5 h-5" style={{ color: accentColor }} />
              <p className="text-sm font-medium" style={{ color: textColor }}>Skills</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ 
                    backgroundColor: theme === 'dark' ? '#2B2B2B' : '#F0F0F0',
                    color: accentColor,
                    border: `1px solid ${theme === 'dark' ? '#3DDC84' : '#3DDC84'}20`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Passion */}
          <div className="rounded-lg p-4" style={{ backgroundColor: cardBg }}>
            <p className="text-sm font-medium mb-2" style={{ color: textColor }}>Passion</p>
            <p className="text-sm leading-relaxed" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
              Creating intuitive Android apps that solve real-world problems with modern architecture patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
