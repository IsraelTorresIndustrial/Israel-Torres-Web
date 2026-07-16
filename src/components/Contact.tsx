import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { MessageCircle, Linkedin } from 'lucide-react';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contacto" className="py-24 md:py-32 bg-petrol text-white">
      <div className="max-w-[1240px] mx-auto px-5 md:px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Conversemos
          </h3>
          <p className="text-gray-300 mb-12 text-lg max-w-[680px]">
            Busco seguir participando en proyectos donde estrategia, datos y tecnología deban trabajar juntos para resolver problemas reales de negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-[680px]">
            <a
              href="https://wa.me/56942174418"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-2xl text-sm font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3.5 rounded-2xl text-sm font-semibold hover:bg-white/20 transition-colors w-full sm:w-auto backdrop-blur-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <div className="text-sm font-mono text-gray-400">
            <p className="text-white font-semibold mb-2">Santiago, Chile</p>
            <p>Disponible para oportunidades profesionales y proyectos de consultoría.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
