import { ArrowDown, ArrowUpRight, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

const routeNodes = [
  { label: 'Negocio', x: '10%', y: '52%' },
  { label: 'Datos', x: '39%', y: '18%' },
  { label: 'Tecnología', x: '62%', y: '62%' },
  { label: 'Mejora', x: '86%', y: '28%' },
];

export function Hero() {
  const { personalInfo, metrics } = portfolioData;

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-night text-white">
      <div className="signal-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-soft-light" aria-hidden="true" />
      <div className="absolute -right-44 top-8 h-[520px] w-[520px] rounded-full bg-leaf/20 blur-[130px]" aria-hidden="true" />
      <div className="absolute -left-24 bottom-0 h-[340px] w-[340px] rounded-full bg-acid/10 blur-[110px]" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-screen max-w-[1280px] grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pb-14 lg:pt-28">
        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
            <span className="inline-flex items-center gap-2 text-acid">
              <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_16px_rgba(216,244,93,0.8)]" />
              Disponible para nuevos desafíos
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> {personalInfo.location}
            </span>
          </div>

          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-white/55">{personalInfo.eyebrow}</p>
          <h1 className="text-balance max-w-[790px] font-display text-[clamp(2.85rem,6.2vw,6.35rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
            Convierto problemas difusos en{' '}
            <span className="relative inline-block text-acid">
              soluciones útiles.
              <svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9C68 3 199 2 298 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-9 max-w-[690px] text-base leading-7 text-white/68 md:text-lg md:leading-8">
            {personalInfo.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#casos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-6 py-3.5 text-sm font-extrabold text-night transition-transform hover:-translate-y-0.5"
            >
              Ver cómo aporto <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.045] p-5 shadow-[0_35px_100px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Mi forma de aportar</p>
                <p className="mt-2 text-lg font-bold">Conectar para avanzar</p>
              </div>
              <span className="rounded-full border border-acid/30 bg-acid/10 px-3 py-1 font-mono text-[10px] uppercase text-acid">Sistema abierto</span>
            </div>

            <div className="relative h-[56%] rounded-3xl border border-white/10 bg-night/35">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 260" preserveAspectRatio="none" aria-hidden="true">
                <path d="M44 135 C110 130, 115 48, 172 48 S250 170, 273 164 S340 80, 382 74" fill="none" stroke="rgba(216,244,93,.58)" strokeWidth="2" strokeDasharray="5 7" />
              </svg>
              {routeNodes.map((node, index) => (
                <div key={node.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: node.x, top: node.y }}>
                  <span className={`block h-3 w-3 rounded-full border-2 border-night ${index === routeNodes.length - 1 ? 'bg-acid shadow-[0_0_20px_rgba(216,244,93,.8)]' : 'bg-white'}`} />
                  <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-wider text-white/55">
                    {node.label}
                  </span>
                </div>
              ))}
              <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-acid/30 bg-night shadow-[0_0_50px_rgba(216,244,93,.12)]">
                <span className="text-center font-mono text-[10px] uppercase leading-4 tracking-wider text-acid">Aprender<br />Construir<br />Mejorar</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {['Versátil', 'Curioso', 'Práctico'].map((trait) => (
                <div key={trait} className="rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center font-mono text-[10px] uppercase tracking-wider text-white/55">
                  {trait}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-night/10 bg-paper px-5 py-4 text-night shadow-xl sm:-left-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone">Actualmente</p>
            <p className="mt-1 text-sm font-extrabold">Data Consultant · Artefact</p>
          </div>
        </div>

        <div className="col-span-full mt-8 grid grid-cols-2 border-t border-white/10 pt-8 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`py-4 ${index % 2 === 0 ? 'pr-4' : 'border-l border-white/10 pl-4'} md:border-l md:border-white/10 md:px-6 first:md:border-l-0 first:md:pl-0`}>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl text-acid md:text-4xl">{metric.value}</span>
                <span className="text-sm font-bold text-white">{metric.label}</span>
              </div>
              <p className="mt-2 max-w-[220px] text-xs leading-5 text-white/45">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
