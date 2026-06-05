// Import all components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechIcons from '@/components/TechIcons';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechIcons />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
