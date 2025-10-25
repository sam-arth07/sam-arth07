'use client';

const projects = [
  {
    id: 1,
    title: 'AnimeWiki',
    description: 'Comprehensive anime discovery app with offline support and dynamic theming.',
    technologies: ['Kotlin', 'Compose', 'Room', 'Hilt'],
    githubLink: 'https://github.com/sam-arth07/AnimeWiki',
    image: 'https://github.com/user-attachments/assets/9cd8fbbb-7d5c-4651-80cf-fdd0c1344b36'
  },
  {
    id: 2,
    title: 'CurrencyApp',
    description: 'Cross-platform currency exchange with real-time rates for 170+ currencies.',
    technologies: ['KMP', 'Compose MP', 'Ktor', 'Realm'],
    githubLink: 'https://github.com/sam-arth07/CurrencyApp',
    image: 'https://github.com/user-attachments/assets/bc1daa6d-35d2-4746-a211-fa5200e8fb47'
  },
  {
    id: 3,
    title: 'ToDo App',
    description: 'Task management with priority levels, search, and Material 3 design.',
    technologies: ['Compose', 'Room', 'Hilt', 'MVVM'],
    githubLink: 'https://github.com/sam-arth07/ToDo',
    image: 'https://github.com/user-attachments/assets/dbc00b38-06cb-425b-8717-44e384b79b77'
  },
  {
    id: 4,
    title: 'Loan Manager',
    description: 'Full-stack loan management system for financial institutions.',
    technologies: ['Next.js', 'Prisma', 'MongoDB', 'TypeScript'],
    githubLink: 'https://github.com/sam-arth07/LoanManagerFrontend',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=150&fit=crop'
  }
];

export default function ProjectsMobile() {
  return (
    <div className="px-6 py-8">
      <div className="mb-6 font-mono text-sm">
        <p className="text-[#CC7832]">
          <span>package</span> <span className="text-[#A9B7C6]">com.portfolio.projects</span>
        </p>
        <p className="text-[#808080] mt-2">// Android Projects</p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#313335] rounded-lg border border-[#323232] overflow-hidden hover:border-[#3DDC84] transition-all shadow-lg"
          >
            {/* App Screenshot */}
            <div className="h-36 bg-gradient-to-br from-[#3DDC84] to-[#2BAF66] flex items-center justify-center relative overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg className="w-20 h-20 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21m-3.041 0c-.828-.524-2.233-1.426-2.233-2.21 0-.784.805-1.288 1.514-1.288.71 0 1.28.505 1.28 1.288h2.233c0-1.992-1.524-3.521-3.513-3.521s-3.514 1.529-3.514 3.521c0 1.992 1.524 3.521 3.514 3.521.71 0 1.28-.505 1.28-1.288 0-.784-1.405-1.686-2.233-2.21M1.571 19.447c1.313.834 6.171 3.904 10.429 3.904s9.116-3.07 10.429-3.904c.828-.524 0-1.686-.828-1.162-1.313.834-6.171 3.904-9.601 3.904-3.431 0-8.288-3.07-9.601-3.904-.828-.524-1.656.638-.828 1.162z"/>
                </svg>
              )}
            </div>

            {/* Project Details */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#A9B7C6] mb-3">
                {project.title}
              </h3>
              <p className="text-[#808080] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono bg-[#2B2B2B] text-[#3DDC84] rounded-md border border-[#3DDC84]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#323232]">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] rounded-lg transition-all text-sm font-semibold shadow-lg hover:shadow-xl"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="font-mono">View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
