import { Hero, Skills, Experience, Projects, Education, Contact, Footer } from './sections';
import { Navbar, ScrollToTop, AnimatedBackground } from './components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-800 relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
