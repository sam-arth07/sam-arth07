import AndroidStudioNav from '@/components/AndroidStudioNav';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import MifosContributions from '@/components/MifosContributions';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <AndroidStudioNav />
      <main className="min-h-screen">
        <Hero />
        <Skills />
        <MifosContributions />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
