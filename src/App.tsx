import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Capabilities } from './components/Capabilities';
import { Credentials } from './components/Credentials';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink selection:bg-fuchsia selection:text-white">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Impact />
        <Projects />
        <Experience />
        <Capabilities />
        <Credentials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
