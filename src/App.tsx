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
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink selection:bg-acid selection:text-night">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
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
