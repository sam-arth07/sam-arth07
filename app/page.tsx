import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import MifosContributions from '@/components/MifosContributions';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <MifosContributions />
      <Skills />
      <Contact />
    </main>
  );
}
