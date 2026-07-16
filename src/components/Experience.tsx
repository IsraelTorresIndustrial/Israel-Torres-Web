import { motion } from 'motion/react';
import { portfolioData } from '../data';

export function Experience() {
  const { experience } = portfolioData;
  return (
    <section id="experiencia" className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-5 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-night mb-4">Experiencia</h2>
          <h3 className="text-lg text-gray-600">Trayectoria en consultoría, datos, marketing y transformación digital.</h3>
        </div>

        <div className="relative border-l-2 border-gray-100 ml-2 md:ml-4 mb-20 space-y-16">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="pl-8 md:pl-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-white border-2 border-exec rounded-full -left-[7px] top-1.5" />
              
              <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between mb-2 gap-1 lg:gap-4">
                <h4 className="text-xl md:text-2xl font-display font-bold text-night">{job.role}</h4>
                <span className="text-sm font-mono text-gray-500 whitespace-nowrap mt-1 lg:mt-0">{job.period}</span>
              </div>
              <h5 className="text-exec font-semibold mb-4 text-base">{job.company}</h5>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[720px] mb-4">
                {job.description}
              </p>
              
              {job.highlights && job.highlights.length > 0 && (
                <ul className="space-y-2 mt-5 max-w-[720px]">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gray-300 font-mono text-sm mt-0.5">→</span>
                      <span className="text-sm md:text-base text-gray-600 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-gray-100">
          <h4 className="text-xl font-display font-bold text-night mb-10">Experiencia adicional</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.additionalExperience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-bg p-6 border border-gray-100 rounded-2xl"
              >
                <h5 className="font-bold text-night text-base mb-1">{exp.title}</h5>
                <p className="text-exec font-medium text-sm mb-4">{exp.company}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
