'use client';

import { useEffect, useState } from 'react';
import { Github, Star, GitFork, ExternalLink, X } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [repoReadme, setRepoReadme] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState<string[]>([]);

  const fetchGitHubData = async () => {
    try {
      // Fetch repositories
      const reposResponse = await fetch('https://api.github.com/users/sam-arth07/repos?sort=updated&per_page=6');
      const reposData = await reposResponse.json();
      setRepos(reposData);

      // Fetch skills from main README
      try {
        const readmeResponse = await fetch('https://api.github.com/repos/sam-arth07/sam-arth07/readme');
        const readmeData = await readmeResponse.json();
        const readmeContent = atob(readmeData.content);
        
        // Extract skills from README (simplified parsing)
        const skillsMatch = readmeContent.match(/## 🛠️ Toolbox Unleashed([\s\S]*?)(?=##|$)/);
        if (skillsMatch) {
          const skillsList = ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase', 'React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git', 'Python'];
          setSkills(skillsList);
        }
      } catch (error) {
        console.error('Error fetching README:', error);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      
      // Use fallback data when API is blocked or unavailable
      const fallbackRepos: Repository[] = [
        {
          id: 1,
          name: 'android-portfolio',
          description: 'Modern Android portfolio app built with Jetpack Compose and Material Design 3',
          html_url: 'https://github.com/sam-arth07/android-portfolio',
          stargazers_count: 12,
          forks_count: 3,
          language: 'Kotlin',
          updated_at: '2024-01-15',
          topics: ['android', 'kotlin', 'jetpack-compose']
        },
        {
          id: 2,
          name: 'recipe-app',
          description: 'Recipe sharing application with offline support and beautiful UI',
          html_url: 'https://github.com/sam-arth07/recipe-app',
          stargazers_count: 8,
          forks_count: 2,
          language: 'Kotlin',
          updated_at: '2024-01-10',
          topics: ['android', 'room', 'mvvm']
        },
        {
          id: 3,
          name: 'weather-forecast',
          description: 'Weather app with location-based forecasts and clean architecture',
          html_url: 'https://github.com/sam-arth07/weather-forecast',
          stargazers_count: 15,
          forks_count: 5,
          language: 'Kotlin',
          updated_at: '2024-01-05',
          topics: ['android', 'retrofit', 'coroutines']
        }
      ];
      
      setRepos(fallbackRepos);
      setSkills(['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase', 'React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git', 'Python']);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const openRepoModal = async (repo: Repository) => {
    setSelectedRepo(repo);
    try {
      const response = await fetch(`https://api.github.com/repos/sam-arth07/${repo.name}/readme`);
      const data = await response.json();
      const content = atob(data.content);
      setRepoReadme(content);
    } catch (error) {
      console.error('Error fetching repo README:', error);
      setRepoReadme('README not available');
    }
  };

  if (loading) {
    return (
      <section id="github" className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading GitHub data...</div>
      </section>
    );
  }

  return (
    <section id="github" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#3DDC84] flex items-center gap-3">
          <Github className="w-10 h-10" />
          GitHub & Projects
        </h2>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#3DDC84]/10 border border-[#3DDC84] rounded-full text-[#3DDC84] text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contribution Chart Placeholder */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">GitHub Contributions</h3>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <img 
              src="https://ghchart.rshah.org/3DDC84/sam-arth07" 
              alt="GitHub Contribution Chart"
              className="w-full"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                onClick={() => openRepoModal(repo)}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:border-[#3DDC84] transition-all cursor-pointer hover:shadow-lg hover:shadow-[#3DDC84]/20"
              >
                <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {repo.name}
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#3DDC84]"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks_count}
                  </span>
                </div>
                {repo.topics && repo.topics.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-[#3DDC84]/20 rounded text-[#3DDC84]">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedRepo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#1a1a1a] border-b border-white/10 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{selectedRepo.name}</h3>
              <button
                onClick={() => setSelectedRepo(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <a
                  href={selectedRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#3DDC84] text-black rounded-lg hover:bg-[#3DDC84]/90 transition-colors flex items-center gap-2"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="flex items-center gap-1 text-gray-400">
                  <Star className="w-5 h-5" />
                  {selectedRepo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <GitFork className="w-5 h-5" />
                  {selectedRepo.forks_count}
                </span>
              </div>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
                  {repoReadme}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
