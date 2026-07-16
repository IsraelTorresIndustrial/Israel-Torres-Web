import { motion } from 'motion/react';
import { portfolioData } from '../data';

export function Capabilities() {
  const { capabilities } = portfolioData;
  return (
    <section id="capacidades" className="py-24 bg-bg border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-5 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-night mb-4">Capacidades</h2>
          <h3 className="text-lg text-gray-600">Conocimientos que aplico para diseñar, construir y mejorar soluciones.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          {Object.entries(capabilities).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm"
            >
              <h4 className="text-base font-bold text-night mb-6 pb-4 border-b border-gray-100">
                {category}
              </h4>
              <ul className="space-y-3.5">
                {skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gray-300 font-mono text-sm mt-0.5">→</span>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row items-baseline gap-4 md:gap-6"
        >
          <span className="text-sm font-bold text-gray-500 whitespace-nowrap uppercase tracking-wide">Herramientas</span>
          <div className="flex flex-wrap gap-2">
            {portfolioData.tools.map((tool, i) => (
              <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-mono rounded-lg">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
