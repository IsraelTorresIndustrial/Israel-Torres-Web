import { CheckCircle2, Cpu, Database, Layers, LineChart, Users } from 'lucide-react';
import { portfolioData } from '../data';

export function Capabilities() {
  const { capabilityMatrix } = portfolioData;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <LineChart className="h-5 w-5 text-gold-deep" />;
      case 1:
        return <Layers className="h-5 w-5 text-gold-deep" />;
      case 2:
        return <Users className="h-5 w-5 text-gold-deep" />;
      case 3:
        return <Cpu className="h-5 w-5 text-gold-deep" />;
      default:
        return <Database className="h-5 w-5 text-gold-deep" />;
    }
  };

  return (
    <section id="capacidades" className="relative overflow-hidden bg-paper py-16 md:py-24 border-b border-line">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-[840px] border-b border-line pb-10">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-deep">
            03 / Matriz de Capacidades
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
            Capacidades Demostradas con Evidencia
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base md:leading-7">
            Cada área de dominio está vinculada a entregables tangibles e iniciativas corporativas reales, sustentadas transversalmente por analítica de datos e inteligencia comercial.
          </p>
        </div>

        {/* Capability Proof Matrix (2x2 Grid with Manifestation & Evidence) */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilityMatrix.map((item, idx) => (
            <div
              key={item.pillar}
              className="rounded-2xl border border-line bg-canvas p-6 md:p-7 flex flex-col justify-between shadow-xs transition-all hover:border-gold/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold/30 bg-paper shadow-xs">
                      {getIcon(idx)}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-muted">0{idx + 1}</span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-gold-deep font-bold">
                    Pilar de Dominio
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {item.pillar}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 font-medium">
                  {item.howItManifests}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {/* Direct Evidence Connection */}
                <div className="rounded-lg border border-line bg-paper p-3 text-xs flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
                  <div>
                    <span className="font-mono text-[8px] uppercase font-bold text-slate-500 block">Evidencia en el Portfolio:</span>
                    <span className="text-slate-800 font-semibold">{item.evidence}</span>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-paper px-2 py-0.5 font-mono text-[8px] uppercase font-medium text-slate-600 border border-line"
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
        <div className="mt-8 rounded-xl border border-gold/30 bg-canvas p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-gold-deep shrink-0" />
            <div>
              <p className="font-display text-sm md:text-base font-bold text-ink">
                Capa Transversal: Analítica de Datos, Modelamiento & BI
              </p>
              <p className="text-xs text-slate-600">
                Power BI, SQL, Python, segmentación de clientes y análisis transaccional operan como base objetiva para fundamentar cada decisión estratégica y entrenar flujos con IA.
              </p>
            </div>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-gold-deep font-bold whitespace-nowrap">
            Base Analítica
          </span>
        </div>

      </div>
    </section>
  );
}
