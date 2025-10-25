'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/sam-arth07', 
      label: 'GitHub',
      color: '#333'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/samarth-chaplot-130b88256/', 
      label: 'LinkedIn',
      color: '#0077B5'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/samarthchaplot', 
      label: 'Twitter',
      color: '#1DA1F2'
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div style={{ opacity }}>
          <motion.div
            style={{ y }}
            className="text-center space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Let&apos;s Create</span>
                <br />
                <span className="bg-gradient-to-r from-[#3DDC84] to-[#4AE490] bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                Have a project in mind? Let&apos;s collaborate and build exceptional Android
                experiences together.
              </p>
            </motion.div>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.a
                href="mailto:samarthchaplot7@gmail.com"
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#3DDC84] to-[#4AE490] rounded-full font-bold text-lg text-black overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Mail className="w-6 h-6" />
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  animate={isHovering ? { x: 5 } : { x: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Send className="w-6 h-6" />
                </motion.div>
                
                {/* Ripple effect */}
                {isHovering && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-white/30 rounded-full"
                  />
                )}
              </motion.a>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-white/40 text-sm mt-6"
              >
                samarthchaplot7@gmail.com
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <div className="p-4 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#3DDC84]/50 transition-colors">
                    <social.icon className="w-6 h-6 text-white/60 group-hover:text-[#3DDC84] transition-colors" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-black/90 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                      {social.label}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-16 border-t border-white/10"
            >
              <p className="text-white/40 text-sm">
                © 2024 Samarth Chaplot. All rights reserved.
              </p>
              <p className="text-white/30 text-xs mt-2">
                Built with Next.js, React Three Fiber & Framer Motion
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
