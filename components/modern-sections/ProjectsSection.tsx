'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Android Portfolio App',
    description: 'Modern Android portfolio app built with Jetpack Compose and Material Design 3',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3'],
    github: 'https://github.com/sam-arth07/android-portfolio',
    stars: 12,
    forks: 3,
    color: '#3DDC84',
  },
  {
    id: 2,
    title: 'Recipe Sharing App',
    description: 'Recipe sharing application with offline support and beautiful UI',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    tags: ['Android', 'Room', 'MVVM'],
    github: 'https://github.com/sam-arth07/recipe-app',
    stars: 8,
    forks: 2,
    color: '#4AE490',
  },
  {
    id: 3,
    title: 'Weather Forecast',
    description: 'Weather app with location-based forecasts and clean architecture',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    tags: ['Kotlin', 'Retrofit', 'Coroutines'],
    github: 'https://github.com/sam-arth07/weather-forecast',
    stars: 15,
    forks: 5,
    color: '#60E6A0',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${project.color}20 0%, transparent 100%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-white group-hover:text-[#3DDC84] transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#3DDC84] transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#3DDC84] transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-[#3DDC84]/10 text-[#3DDC84] border border-[#3DDC84]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 pt-2 text-sm text-white/40">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {project.forks}
            </span>
          </div>
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${project.color}15, transparent 40%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-32 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ opacity }}>
          <motion.div
            style={{ y }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Featured</span>
              <br />
              <span className="bg-gradient-to-r from-[#3DDC84] to-[#4AE490] bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/60 text-lg max-w-2xl mx-auto"
            >
              A collection of my recent work showcasing Android development expertise
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-50" />
    </section>
  );
}
