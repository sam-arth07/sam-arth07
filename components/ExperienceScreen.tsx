'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ExperienceScreen() {
  const { theme } = useTheme();
  
  const bgColor = theme === 'dark' ? '#2B2B2B' : '#F5F5F5';
  const myBubbleBg = theme === 'dark' ? '#3DDC84' : '#3DDC84';
  const otherBubbleBg = theme === 'dark' ? '#3C3F41' : '#E8E8E8';
  const textColor = theme === 'dark' ? '#A9B7C6' : '#333333';
  const accentColor = '#3DDC84';

  const messages = [
    { sender: 'other', text: 'Contributed to Mifos/android-client', time: 'Dec 2023' },
    { sender: 'me', text: 'Worked on core banking features for 50K+ users', time: '10:30' },
    { sender: 'me', text: 'Implemented loan management and offline-first architecture', time: '10:31' },
    { sender: 'other', text: 'Technologies used?', time: '10:32' },
    { sender: 'me', text: 'MVVM, Room DB, Retrofit, and Hilt for DI', time: '10:33' },
    { sender: 'other', text: 'Open Source Contributions', time: 'Jan 2024' },
    { sender: 'me', text: 'Merged multiple PRs addressing critical bugs and feature enhancements', time: '14:20' },
  ];

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: bgColor }}>
      {/* Header */}
      <div className="px-4 py-4" style={{ backgroundColor: accentColor }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2B2B2B' }}>
            <span className="text-white font-bold text-sm">OS</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#2B2B2B]">Open Source Log</h1>
            <p className="text-xs text-[#2B2B2B]/80">Experience & Contributions</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="max-w-[80%]">
              <div
                className={`rounded-2xl px-4 py-2.5 ${
                  message.sender === 'me' ? 'rounded-tr-sm' : 'rounded-tl-sm'
                }`}
                style={{
                  backgroundColor: message.sender === 'me' ? myBubbleBg : otherBubbleBg,
                  color: message.sender === 'me' ? '#2B2B2B' : textColor
                }}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              <p 
                className={`text-xs mt-1 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}
                style={{ color: theme === 'dark' ? '#808080' : '#999' }}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input (non-functional, decorative) */}
      <div className="p-3 border-t" style={{ 
        backgroundColor: theme === 'dark' ? '#313335' : '#FFFFFF',
        borderColor: theme === 'dark' ? '#3C3F41' : '#E0E0E0'
      }}>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{
          backgroundColor: theme === 'dark' ? '#2B2B2B' : '#F5F5F5'
        }}>
          <input
            type="text"
            placeholder="Type a message..."
            disabled
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: textColor }}
          />
          <button className="p-1" disabled>
            <svg className="w-5 h-5" fill="currentColor" style={{ color: accentColor }} viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
