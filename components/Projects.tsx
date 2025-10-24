'use client';

import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Mifos Mobile',
    description: 'A mobile banking application for financial inclusion, built with Kotlin and modern Android architecture components.',
    technologies: ['Kotlin', 'MVVM', 'Retrofit', 'Coroutines', 'Room'],
    category: 'Android',
    featured: true,
    link: 'https://github.com/openMF/mifos-mobile'
  },
  {
    id: 2,
    title: 'E-Commerce Android App',
    description: 'Full-featured shopping application with payment integration, real-time notifications, and smooth animations.',
    technologies: ['Kotlin', 'Firebase', 'Jetpack Compose', 'Hilt', 'Flow'],
    category: 'Android',
    featured: true,
    link: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Productivity app with offline-first architecture, featuring task tracking, reminders, and cloud sync.',
    technologies: ['Java', 'SQLite', 'WorkManager', 'LiveData'],
    category: 'Android',
    featured: false,
    link: '#'
  },
  {
    id: 4,
    title: 'Weather Forecast',
    description: 'Real-time weather application with beautiful UI, location-based forecasts, and detailed weather insights.',
    technologies: ['Kotlin', 'OpenWeather API', 'Glide', 'Material Design'],
    category: 'Android',
    featured: false,
    link: '#'
  },
  {
    id: 5,
    title: 'Social Media Client',
    description: 'Modern social networking app with posts, stories, real-time chat, and media sharing capabilities.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'CameraX'],
    category: 'Android',
    featured: false,
    link: '#'
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Health and fitness application tracking workouts, steps, calories, and providing personalized insights.',
    technologies: ['Kotlin', 'Health Connect', 'MPAndroidChart', 'Room'],
    category: 'Android',
    featured: false,
    link: '#'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Android Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing my expertise in Android development with production-ready applications
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'featured'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Featured
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21m-3.041 0c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21M1.571 19.447c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162M1.571 15.341c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162z"/>
                </svg>
              </div>

              <div className="p-6">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-600 bg-emerald-100 rounded-full mb-3">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
