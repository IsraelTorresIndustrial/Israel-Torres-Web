import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Approach } from './components/Approach';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { Experience } from './components/Experience';
import { Process } from './components/Process';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink selection:bg-amber selection:text-void">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        {/* ACTO 1: Qué hago + Evidencia */}
        <Hero />
        
        {/* ACTO 2: Cómo convierto problemas en soluciones */}
        <Approach />
        
        {/* ACTO 3: Selected Work (3 Casos Protagonistas + Otros Proyectos) */}
        <Projects />
        
        {/* ACTO 4: Lo que conecto (3 Columnas de Capacidades) */}
        <Capabilities />
        
        {/* ACTO 5: Trayectoria (Timeline estructurada) */}
        <Experience />
        
        {/* ACTO 6: Cómo trabajo (Entender -> Estructurar -> Construir -> Medir) */}
        <Process />
        
        {/* ACTO 7: Formación & 16 Certificaciones Verificadas */}
        <Credentials />
        
        {/* ACTO 8: Conversemos */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
