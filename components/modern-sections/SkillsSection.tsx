'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Kotlin', level: 95, color: '#7F52FF' },
  { name: 'Jetpack Compose', level: 90, color: '#3DDC84' },
  { name: 'Android Studio', level: 92, color: '#3DDC84' },
  { name: 'Firebase', level: 85, color: '#FFCA28' },
  { name: 'React', level: 80, color: '#61DAFB' },
  { name: 'JavaScript', level: 85, color: '#F7DF1E' },
  { name: 'Node.js', level: 75, color: '#68A063' },
  { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
  { name: 'Git', level: 90, color: '#F05032' },
  { name: 'Python', level: 70, color: '#3776AB' },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen py-20 md:py-32 xl:py-40 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24"
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto">
        <motion.div style={{ opacity }}>
          <motion.div
            style={{ y }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            >
              <span className="text-white">Technical</span>
              <br />
              <span className="bg-gradient-to-r from-[#3DDC84] to-[#4AE490] bg-clip-text text-transparent">
                Skills
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/60 text-base md:text-lg xl:text-xl max-w-2xl xl:max-w-3xl mx-auto"
            >
              Technologies and tools I work with
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-[#3DDC84] text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color} 0%, #3DDC84 100%)`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 backdrop-blur-md bg-gradient-to-br from-[#3DDC84]/10 to-transparent border border-[#3DDC84]/20 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-[#3DDC84] to-[#4AE490] bg-clip-text text-transparent">
                LeetCode Stats
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Solved', value: '150' },
                { label: 'Easy', value: '80' },
                { label: 'Medium', value: '55' },
                { label: 'Hard', value: '15' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3DDC84] to-[#4AE490] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <div className="text-3xl font-bold text-[#3DDC84]">1650</div>
                <div className="text-white/50 text-sm mt-1">Contest Rating</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <div className="text-3xl font-bold text-[#3DDC84]">125,000</div>
                <div className="text-white/50 text-sm mt-1">Global Ranking</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-50" />
    </section>
  );
}
