import { motion } from 'motion/react';
import { portfolioData } from '../data';

export function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section className="relative min-h-[calc(100vh-72px)] mt-[72px] bg-night overflow-hidden flex flex-col justify-center items-center py-20">
      {/* Abstract Tech Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        {/* Strategic Path Visual Element (Estrategia -> Datos -> Solución -> Impacto) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none hidden md:block">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <path d="M 20% 80% Q 30% 20% 50% 50% T 80% 20%" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
          {/* Nodes */}
          <div className="absolute top-[78%] left-[19.5%] flex flex-col items-center">
            <div className="w-2 h-2 bg-exec rounded-full shadow-[0_0_8px_#2563EB]"></div>
            <span className="text-[10px] font-mono text-gray-500 mt-2 uppercase">Estrategia</span>
          </div>
          <div className="absolute top-[35%] left-[39%] flex flex-col items-center">
            <div className="w-2 h-2 bg-cyan rounded-full shadow-[0_0_8px_#38BDF8]"></div>
            <span className="text-[10px] font-mono text-gray-500 mt-2 uppercase">Datos</span>
          </div>
          <div className="absolute top-[49%] left-[49.5%] flex flex-col items-center">
            <div className="w-2 h-2 bg-exec rounded-full shadow-[0_0_8px_#2563EB]"></div>
            <span className="text-[10px] font-mono text-gray-500 mt-2 uppercase">Solución</span>
          </div>
          <div className="absolute top-[19%] left-[79.5%] flex flex-col items-center">
            <div className="w-2 h-2 bg-amber rounded-full shadow-[0_0_8px_#F59E0B]"></div>
            <span className="text-[10px] font-mono text-gray-500 mt-2 uppercase">Impacto</span>
          </div>
        </div>
      </div>

      <div className="max-w-[880px] mx-auto px-6 md:px-12 relative z-10 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="font-mono text-cyan text-sm tracking-wide bg-petrol/30 px-4 py-1.5 rounded-full border border-petrol/50">
            {personalInfo.title}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6 tracking-tight max-w-[880px]"
        >
          {personalInfo.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 font-normal mb-10 max-w-[680px] leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 justify-center"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center bg-exec hover:bg-exec/90 text-white px-8 py-3.5 rounded-2xl text-sm font-semibold transition-colors shadow-sm"
          >
            Ver proyectos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          {portfolioData.heroTags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-gray-400 tracking-wide">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
