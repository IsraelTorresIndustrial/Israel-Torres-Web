import { CheckCircle2, Cpu, Database, Layers, LineChart, Users } from 'lucide-react';
import { portfolioData } from '../data';

export function Capabilities() {
  const { capabilityMatrix } = portfolioData;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <LineChart className="h-5 w-5 text-gold-light" />;
      case 1:
        return <Layers className="h-5 w-5 text-gold-light" />;
      case 2:
        return <Users className="h-5 w-5 text-gold-light" />;
      case 3:
        return <Cpu className="h-5 w-5 text-gold-light" />;
      default:
        return <Database className="h-5 w-5 text-gold-light" />;
    }
  };

  return (
    <section id="capacidades" className="relative overflow-hidden bg-night py-16 md:py-24 text-white">
      {/* Ambient Monogram Arc in Deep Structure */}
      <div className="monogram-arc-dark -right-20 top-10 h-[480px] w-[480px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-[840px] border-b border-navy-800 pb-10">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-light">
            03 / Matriz de Capacidades
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
            Capacidades Demostradas con Evidencia
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base md:leading-7">
            Cada área de dominio está vinculada a entregables tangibles e iniciativas corporativas reales, sustentadas transversalmente por analítica de datos e inteligencia comercial.
          </p>
        </div>

        {/* Capability Proof Matrix (2x2 Grid with Manifestation & Evidence) */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilityMatrix.map((item, idx) => (
            <div
              key={item.pillar}
              className="rounded-xl border border-navy-800 bg-void/90 p-6 md:p-7 flex flex-col justify-between shadow-artifact-dark transition-all hover:border-gold/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold/30 bg-night shadow-xs">
                      {getIcon(idx)}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-slate-400">0{idx + 1}</span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-gold-light font-bold">
                    Pilar de Dominio
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {item.pillar}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 font-medium">
                  {item.howItManifests}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {/* Direct Evidence Connection */}
                <div className="rounded-lg border border-navy-800 bg-night p-3 text-xs flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-light" />
                  <div>
                    <span className="font-mono text-[8px] uppercase font-bold text-slate-400 block">Evidencia en el Portfolio:</span>
                    <span className="text-slate-100 font-semibold">{item.evidence}</span>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-night px-2 py-0.5 font-mono text-[8px] uppercase font-medium text-slate-300 border border-navy-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transversal Data Layer Banner with Golden Conduit */}
        <div className="mt-8 rounded-xl border border-gold/30 bg-void p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-gold-light shrink-0" />
            <div>
              <p className="font-display text-sm md:text-base font-bold text-white">
                Capa Transversal: Analítica de Datos, Modelamiento & BI
              </p>
              <p className="text-xs text-slate-300">
                Power BI, SQL, Python, segmentación de clientes y análisis transaccional operan como base objetiva para fundamentar cada decisión estratégica y entrenar flujos con IA.
              </p>
            </div>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-gold-light font-bold whitespace-nowrap">
            Base Analítica
          </span>
        </div>

      </div>
    </section>
  );
}
