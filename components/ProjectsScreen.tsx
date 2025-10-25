'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AnimeWiki',
    shortDescription: 'Comprehensive anime discovery app',
    fullDescription: 'A comprehensive anime discovery application featuring offline support, dynamic theming, and real-time updates. Built with modern Android development practices.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt', 'MVVM'],
    githubLink: 'https://github.com/sam-arth07/AnimeWiki',
    image: 'https://github.com/user-attachments/assets/9cd8fbbb-7d5c-4651-80cf-fdd0c1344b36',
    rating: 4.5,
    downloads: '1K+',
    features: [
      'Offline-first architecture',
      'Dynamic theming support',
      'Real-time anime updates',
      'Advanced search & filters',
      'Watchlist management'
    ]
  },
  {
    id: 2,
    title: 'CurrencyApp',
    shortDescription: 'Cross-platform currency converter',
    fullDescription: 'Multi-platform currency exchange application supporting 170+ currencies with real-time exchange rates. Built using Kotlin Multiplatform.',
    technologies: ['KMP', 'Compose Multiplatform', 'Ktor', 'Realm'],
    githubLink: 'https://github.com/sam-arth07/CurrencyApp',
    image: 'https://github.com/user-attachments/assets/bc1daa6d-35d2-4746-a211-fa5200e8fb47',
    rating: 4.7,
    downloads: '500+',
    features: [
      'Support for 170+ currencies',
      'Real-time exchange rates',
      'Offline mode',
      'Historical charts',
      'Cross-platform (Android, iOS, Desktop)'
    ]
  },
  {
    id: 3,
    title: 'ToDo App',
    shortDescription: 'Material 3 task manager',
    fullDescription: 'Modern task management application with priority levels, search functionality, and Material 3 design system implementation.',
    technologies: ['Jetpack Compose', 'Room', 'Hilt', 'MVVM'],
    githubLink: 'https://github.com/sam-arth07/ToDo',
    image: 'https://github.com/user-attachments/assets/dbc00b38-06cb-425b-8717-44e384b79b77',
    rating: 4.3,
    downloads: '100+',
    features: [
      'Priority-based sorting',
      'Advanced search',
      'Material 3 theming',
      'Local data persistence',
      'Clean architecture'
    ]
  },
  {
    id: 4,
    title: 'Loan Manager',
    shortDescription: 'Financial institution management',
    fullDescription: 'Full-stack loan management system designed for financial institutions. Features comprehensive loan tracking, client management, and reporting.',
    technologies: ['Next.js', 'Prisma', 'MongoDB', 'TypeScript'],
    githubLink: 'https://github.com/sam-arth07/LoanManagerFrontend',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=150&fit=crop',
    rating: 4.6,
    downloads: '50+',
    features: [
      'Client management',
      'Loan tracking',
      'Payment scheduling',
      'Reporting & analytics',
      'Secure authentication'
    ]
  }
];

export default function ProjectsScreen() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const bgColor = theme === 'dark' ? '#2B2B2B' : '#F5F5F5';
  const cardBg = theme === 'dark' ? '#313335' : '#FFFFFF';
  const textColor = theme === 'dark' ? '#A9B7C6' : '#333333';
  const accentColor = '#3DDC84';

  if (selectedProject) {
    // Project Detail View
    return (
      <div className="h-full overflow-y-auto" style={{ backgroundColor: bgColor }}>
        {/* Header */}
        <div className="sticky top-0 z-10 px-4 py-3 flex items-center gap-3" style={{ backgroundColor: accentColor }}>
          <button 
            onClick={() => setSelectedProject(null)}
            className="p-1 hover:opacity-80"
          >
            <ChevronLeft className="w-6 h-6 text-[#2B2B2B]" />
          </button>
          <h1 className="text-lg font-bold text-[#2B2B2B]">App Details</h1>
        </div>

        <div className="p-4">
          {/* App Header */}
          <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: cardBg }}>
            <div className="flex gap-4 mb-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1" style={{ color: textColor }}>
                  {selectedProject.title}
                </h2>
                <p className="text-sm mb-2" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
                  {selectedProject.shortDescription}
                </p>
                <div className="flex items-center gap-4 text-xs" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
                  <span>⭐ {selectedProject.rating}</span>
                  <span>{selectedProject.downloads} downloads</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-lg font-semibold text-center text-sm"
                style={{ backgroundColor: accentColor, color: '#2B2B2B' }}
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* About */}
          <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: cardBg }}>
            <h3 className="text-sm font-bold mb-2" style={{ color: textColor }}>About this app</h3>
            <p className="text-sm leading-relaxed" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
              {selectedProject.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: cardBg }}>
            <h3 className="text-sm font-bold mb-3" style={{ color: textColor }}>Key Features</h3>
            <ul className="space-y-2">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
                  <span style={{ color: accentColor }}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="rounded-lg p-4" style={{ backgroundColor: cardBg }}>
            <h3 className="text-sm font-bold mb-3" style={{ color: textColor }}>Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ 
                    backgroundColor: theme === 'dark' ? '#2B2B2B' : '#F0F0F0',
                    color: accentColor
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Projects List View
  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor: bgColor }}>
      {/* Header */}
      <div className="sticky top-0 z-10 px-4 py-4" style={{ backgroundColor: accentColor }}>
        <h1 className="text-xl font-bold text-[#2B2B2B]">My Apps</h1>
        <p className="text-sm text-[#2B2B2B]/80">Portfolio Projects</p>
      </div>

      {/* Apps List */}
      <div className="p-4 space-y-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="w-full rounded-lg p-4 flex gap-4 hover:opacity-80 transition-all"
            style={{ backgroundColor: cardBg }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 text-left min-w-0">
              <h3 className="text-base font-bold mb-1 truncate" style={{ color: textColor }}>
                {project.title}
              </h3>
              <p className="text-sm mb-2 line-clamp-1" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
                {project.shortDescription}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: theme === 'dark' ? '#808080' : '#666' }}>
                <span>⭐ {project.rating}</span>
                <span>{project.downloads}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
