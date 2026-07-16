import { motion } from 'motion/react';
import { portfolioData } from '../data';

export function Process() {
  const { process } = portfolioData;
  return (
    <section id="metodo" className="py-24 bg-night text-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 md:px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Método de trabajo</h2>
          <h3 className="text-lg text-gray-400">De entender el problema a construir una solución útil.</h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Horizontal desktop, Vertical mobile) */}
          <div className="absolute top-0 left-[23px] lg:left-0 lg:top-[24px] w-px h-full lg:w-full lg:h-px bg-petrol/50 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {process.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="flex lg:flex-col gap-6 lg:gap-8"
              >
                {/* Node */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-night border-2 border-petrol flex items-center justify-center z-10 mt-0 lg:mt-0">
                  <span className="text-cyan font-mono text-sm">{p.step}</span>
                  {/* Active highlight dot */}
                  <div className="absolute inset-0 bg-cyan/10 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 pb-8 lg:pb-0">
                  <h4 className="text-lg font-display font-bold mb-3">{p.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 lg:mb-8">{p.desc}</p>
                  
                  <div className="mt-auto">
                    <span className="text-xs font-semibold text-cyan mb-1.5 block">Entregable:</span>
                    <p className="text-gray-300 text-sm">{p.deliverable}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
