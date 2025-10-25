'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center py-20 md:py-32 xl:py-40 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24"
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto w-full">
        <motion.div style={{ opacity }} className="grid md:grid-cols-2 gap-12 md:gap-16 xl:gap-20 items-center">
          {/* Left column - Text content */}
          <motion.div
            style={{ y }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                <span className="text-white">About</span>
                <br />
                <span className="bg-gradient-to-r from-[#3DDC84] to-[#4AE490] bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg xl:text-xl text-white/70 leading-relaxed"
            >
              I&apos;m a passionate Android Developer with expertise in{' '}
              <span className="text-[#3DDC84] font-semibold">Kotlin</span>,{' '}
              <span className="text-[#3DDC84] font-semibold">Jetpack Compose</span>, and modern
              Android development practices. I love creating exceptional mobile experiences with
              clean architecture and Material Design principles.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg xl:text-xl text-white/70 leading-relaxed"
            >
              With a strong foundation in software engineering and a keen eye for detail, I build
              applications that are not only functional but also beautiful and user-friendly.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { label: 'Projects', value: '20+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Experience', value: '2Y+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3DDC84] to-[#4AE490] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Experience & Education */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ['-100px', '100px']) }}
            className="space-y-8"
          >
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#3DDC84] mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-[#3DDC84]/30">
                  <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-[#3DDC84]" />
                  <h4 className="text-lg font-semibold text-white">Android Developer Intern</h4>
                  <p className="text-sm text-white/50 mt-1">Tech Company • 2023 - Present</p>
                  <p className="text-white/70 mt-2 text-sm">
                    Developing native Android applications using Kotlin and Jetpack Compose
                  </p>
                </div>
                <div className="relative pl-6 border-l-2 border-[#3DDC84]/30">
                  <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-[#4AE490]" />
                  <h4 className="text-lg font-semibold text-white">Mobile Development Enthusiast</h4>
                  <p className="text-sm text-white/50 mt-1">Personal Projects • 2022 - Present</p>
                  <p className="text-white/70 mt-2 text-sm">
                    Building innovative Android applications and contributing to open source
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#3DDC84] mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">University</h4>
                  <p className="text-sm text-white/50 mt-1">Computer Science</p>
                  <p className="text-xs text-white/40 mt-1">2020 - 2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-50" />
    </section>
  );
}
