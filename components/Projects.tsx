'use client';

const projects = [
  {
    id: 1,
    title: 'Mifos Mobile',
    description: 'A mobile banking application for financial inclusion, built with Kotlin and modern Android architecture components.',
    technologies: ['Kotlin', 'MVVM', 'Retrofit', 'Coroutines', 'Room'],
    githubLink: 'https://github.com/openMF/mifos-mobile',
    playStoreLink: null
  },
  {
    id: 2,
    title: 'E-Commerce Android App',
    description: 'Full-featured shopping application with payment integration, real-time notifications, and smooth animations.',
    technologies: ['Kotlin', 'Firebase', 'Jetpack Compose', 'Hilt', 'Flow'],
    githubLink: '#',
    playStoreLink: null
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Productivity app with offline-first architecture, featuring task tracking, reminders, and cloud sync.',
    technologies: ['Java', 'SQLite', 'WorkManager', 'LiveData'],
    githubLink: '#',
    playStoreLink: null
  },
  {
    id: 4,
    title: 'Weather Forecast',
    description: 'Real-time weather application with beautiful UI, location-based forecasts, and detailed weather insights.',
    technologies: ['Kotlin', 'OpenWeather API', 'Glide', 'Material Design'],
    githubLink: '#',
    playStoreLink: null
  },
  {
    id: 5,
    title: 'Social Media Client',
    description: 'Modern social networking app with posts, stories, real-time chat, and media sharing capabilities.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'CameraX'],
    githubLink: '#',
    playStoreLink: null
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Health and fitness application tracking workouts, steps, calories, and providing personalized insights.',
    technologies: ['Kotlin', 'Health Connect', 'MPAndroidChart', 'Room'],
    githubLink: '#',
    playStoreLink: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#2B2B2B] text-[#A9B7C6] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header as Comment */}
        <div className="mb-12 font-mono text-sm md:text-base">
          <p className="text-[#CC7832]">
            <span>package</span> <span className="text-[#A9B7C6]">com.portfolio.projects</span>
          </p>
          <p className="text-[#808080] mt-2 text-xl">// Android Projects Showcase</p>
          <p className="text-[#808080] mt-2">
            // Production-ready applications built with modern Android technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#313335] rounded-lg border border-[#323232] overflow-hidden hover:border-[#3DDC84] transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* App Icon/Screenshot Placeholder */}
              <div className="h-48 bg-linear-to-br from-[#3DDC84] to-[#2BAF66] flex items-center justify-center relative overflow-hidden">
                {/* Android Robot Icon */}
                <svg className="w-24 h-24 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21m-3.041 0c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21M1.571 19.447c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162M1.571 15.341c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162z"/>
                </svg>
                {/* Decorative pattern */}
                <div className="absolute inset-0 bg-linear-to-br from-transparent to-black opacity-20"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#A9B7C6] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#808080] text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-mono bg-[#2B2B2B] text-[#3DDC84] rounded border border-[#323232]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-[#323232]">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#2B2B2B] hover:bg-[#3DDC84] hover:text-[#2B2B2B] text-[#3DDC84] border border-[#3DDC84] rounded transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="font-mono text-xs">GitHub</span>
                  </a>
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] rounded transition-all duration-300 text-sm font-semibold"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <span className="font-mono text-xs">Play Store</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
