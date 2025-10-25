'use client';

import { useEffect, useState } from 'react';

interface LinkedInData {
  about: string;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    duration: string;
  }>;
}

export default function AboutSection() {
  const [data, setData] = useState<LinkedInData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, using hardcoded data. LinkedIn scraping requires API access or external service
    const mockData: LinkedInData = {
      about: "Passionate Android Developer with expertise in Kotlin, Jetpack Compose, and modern Android development practices. Focused on creating exceptional mobile experiences with clean architecture and Material Design principles.",
      experience: [
        {
          title: "Android Developer Intern",
          company: "Tech Company",
          duration: "2023 - Present",
          description: "Developing native Android applications using Kotlin and Jetpack Compose"
        },
        {
          title: "Mobile Development Enthusiast",
          company: "Personal Projects",
          duration: "2022 - Present",
          description: "Building innovative Android applications and contributing to open source"
        }
      ],
      education: [
        {
          school: "University",
          degree: "Computer Science",
          duration: "2020 - 2024"
        }
      ]
    };

    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </section>
    );
  }

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#3DDC84]">About Me</h2>
        
        {/* About */}
        <div className="mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">{data?.about}</p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Experience</h3>
          <div className="space-y-8">
            {data?.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-[#3DDC84] pl-6 relative">
                <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-[#3DDC84]" />
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <p className="text-gray-400 mb-2">{exp.company} • {exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <div className="space-y-6">
            {data?.education.map((edu, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold">{edu.school}</h4>
                <p className="text-gray-400 mb-1">{edu.degree}</p>
                <p className="text-gray-500 text-sm">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
