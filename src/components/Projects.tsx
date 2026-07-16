import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { DemoModal } from './demos/DemoModal';
import { CRMPreview, CRMDemoExpanded } from './demos/CRMDemo';
import { LegalPreview, LegalDemoExpanded } from './demos/LegalDemo';
import { AcademicPreview, AcademicDemoExpanded } from './demos/AcademicDemo';
import { CommercialPreview, CommercialDemoExpanded } from './demos/CommercialDemo';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const { projects } = portfolioData;
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const getPreviewComponent = (index: number) => {
    switch (index) {
      case 0: return <CRMPreview />;
      case 1: return <LegalPreview />;
      case 2: return <AcademicPreview />;
      case 3: return <CommercialPreview />;
      default: return null;
    }
  };

  const getExpandedComponent = (index: number) => {
    switch (index) {
      case 0: return <CRMDemoExpanded />;
      case 1: return <LegalDemoExpanded />;
      case 2: return <AcademicDemoExpanded />;
      case 3: return <CommercialDemoExpanded />;
      default: return null;
    }
  };

  return (
    <section id="proyectos" className="py-24 bg-bg">
      <div className="max-w-[1240px] mx-auto px-5 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-night mb-4">Casos seleccionados</h2>
          <h3 className="text-lg text-gray-600">Proyectos donde combiné estrategia, datos y tecnología para resolver problemas concretos.</h3>
        </div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Visual Side (55%) */}
                <div className="w-full lg:w-[55%]">
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden aspect-[4/3] flex flex-col relative group">
                    {/* Browser/App Header */}
                    <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/80 shrink-0 relative z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    </div>
                    
                    {/* Content (Microdemo Preview) */}
                    <div className="flex-1 relative bg-gray-50/30 overflow-hidden">
                      {getPreviewComponent(index)}
                    </div>
                    
                    {/* Overlay for Confidential Status */}
                    {project.status === "Confidencial" && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-20 pointer-events-none">
                        <span className="bg-night text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide shadow-lg">
                          Caso confidencial
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Side (45%) */}
                <div className="w-full lg:w-[45%] flex flex-col">
                  <div className="flex flex-wrap gap-2 text-xs font-mono mb-6">
                     <span className="px-3 py-1.5 bg-night text-white rounded-md">Rol: {project.role}</span>
                     <span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md shadow-sm">{project.industry}</span>
                     <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md">{project.status}</span>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-display font-bold text-night mb-3">
                    {project.title}
                  </h4>
                  <p className="text-sm font-semibold text-exec mb-8">
                    {project.context}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h5 className="text-sm font-bold text-night mb-1.5">Desafío</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-night mb-1.5">Mi aporte</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.contribution}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-night mb-1.5">Solución y Resultado</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.solution} {project.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[11px] font-mono text-gray-500 bg-white px-2.5 py-1 border border-gray-200 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveDemo(index)}
                      className="flex-shrink-0 inline-flex items-center gap-2 bg-exec text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-exec/90 transition-colors"
                    >
                      Explorar solución <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {activeDemo !== null && (
        <DemoModal
          isOpen={true}
          onClose={() => setActiveDemo(null)}
          title={projects[activeDemo].title}
          role={projects[activeDemo].role}
        >
          {getExpandedComponent(activeDemo)}
        </DemoModal>
      )}
    </section>
  );
}
