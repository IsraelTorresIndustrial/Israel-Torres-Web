import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Experience } from './components/Experience';
import { Capabilities } from './components/Capabilities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-exec/30 selection:text-night">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Projects />
        <Process />
        <Experience />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
