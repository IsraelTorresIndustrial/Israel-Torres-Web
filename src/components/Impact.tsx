import { motion } from 'motion/react';
import { portfolioData } from '../data';

export function Impact() {
  const { metrics } = portfolioData;
  return (
    <section id="impacto" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-5 md:px-6">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="grid grid-cols-2 md:grid-cols-4 gap-y-12"
        >
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`flex flex-col px-4 md:px-8 ${
                index % 2 !== 0 ? '' : 'border-r border-gray-100 md:border-r-0'
              } ${
                index !== metrics.length - 1 ? 'md:border-r md:border-gray-200' : ''
              }`}
            >
              <span className="text-4xl md:text-5xl font-mono font-medium text-night mb-2">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-night mb-1">{metric.label}</span>
              <span className="text-sm text-gray-600 leading-relaxed">{metric.description}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
