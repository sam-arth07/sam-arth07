'use client';

import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 600);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Let's Create Something Exceptional
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Have a project in mind? Let's collaborate and build amazing Android experiences together.
        </p>
        
        <a
          href="mailto:samarthchaplot7@gmail.com"
          onClick={handleClick}
          className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#3DDC84] text-black font-semibold text-lg rounded-lg overflow-hidden transition-all hover:bg-[#3DDC84]/90 hover:shadow-lg hover:shadow-[#3DDC84]/50 active:scale-95"
        >
          {isRippling && (
            <span className="absolute inset-0 bg-white/30 animate-ping rounded-lg" />
          )}
          <Mail className="w-6 h-6" />
          <span>Get In Touch</span>
        </a>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            samarthchaplot7@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
