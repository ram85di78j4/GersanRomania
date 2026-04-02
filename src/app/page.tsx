import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Technologies from '@/components/sections/Technologies';
import EVCharging from '@/components/sections/EVCharging';
import News from '@/components/sections/News';
import Contact from '@/components/sections/Contact';

export const revalidate = 60;

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Technologies />
      <EVCharging />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
