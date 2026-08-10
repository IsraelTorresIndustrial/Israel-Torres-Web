import { ArrowDownRight, ArrowUpRight, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

const systemNodes = [
  { label: 'Estrategia', className: 'left-[5%] top-[17%]' },
  { label: 'Datos', className: 'right-[5%] top-[18%]' },
  { label: 'Diseño', className: 'left-[2%] bottom-[22%]' },
  { label: 'Tecnología', className: 'right-[1%] bottom-[24%]' },
];

export function Hero() {
  const { personalInfo, metrics } = portfolioData;

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-void text-white">
      <div className="signal-grid absolute inset-0 opacity-75" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light" aria-hidden="true" />
      <div className="absolute -right-36 top-[-100px] h-[620px] w-[620px] rounded-full bg-violet/30 blur-[150px]" aria-hidden="true" />
      <div className="absolute -left-20 top-[42%] h-[420px] w-[420px] rounded-full bg-fuchsia/10 blur-[140px]" aria-hidden="true" />
      <div className="absolute bottom-[-180px] left-[42%] h-[430px] w-[430px] rounded-full bg-electric/15 blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-10 pt-28 md:px-8 lg:pt-32">
        <div className="grid min-h-[670px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="relative z-10 py-10">
            <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">
              <span className="inline-flex items-center gap-2 text-magenta">
                <span className="pulse-signal h-2 w-2 rounded-full bg-fuchsia shadow-[0_0_18px_rgba(255,0,110,.9)]" />
                Disponible para desafíos con impacto
              </span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {personalInfo.location}</span>
            </div>

            <p className="mb-5 font-mono text-xs uppercase tracking-[0.19em] text-cyan/80">{personalInfo.eyebrow}</p>
            <h1 className="text-balance max-w-[800px] font-display text-[clamp(3rem,6.8vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Voy un paso <span className="gradient-text">más allá</span> del entregable.
            </h1>
            <p className="mt-9 max-w-[710px] text-base leading-8 text-white/62 md:text-lg">{personalInfo.description}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#laboratorio" className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(255,0,110,.24)] transition-transform hover:-translate-y-0.5">
                Explorar lo que construyo <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/[0.06]">
                <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            <div className="gradient-border system-glow relative aspect-[1/1.04] rounded-[2rem] bg-panel p-1">
              <div className="relative h-full overflow-hidden rounded-[1.8rem] bg-night">
                <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-fuchsia" />
                    <span className="h-2 w-2 rounded-full bg-violet" />
                    <span className="h-2 w-2 rounded-full bg-electric" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">israel.systems / live</span>
                </div>

                <div className="relative h-[calc(100%-3.5rem)] overflow-hidden">
                  <div className="soft-grid absolute inset-0 opacity-30" />
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 480" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M68 105 C155 90 160 204 245 215 S352 122 436 110" fill="none" stroke="rgba(255,42,133,.48)" strokeWidth="1.5" strokeDasharray="5 7" />
                    <path d="M58 354 C142 365 163 280 245 260 S352 360 440 348" fill="none" stroke="rgba(86,215,255,.38)" strokeWidth="1.5" strokeDasharray="5 7" />
                  </svg>

                  {systemNodes.map((node) => (
                    <div key={node.label} className={`absolute ${node.className}`}>
                      <div className="rounded-xl border border-white/12 bg-white/[0.06] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-white/55 backdrop-blur-sm">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan" />{node.label}
                      </div>
                    </div>
                  ))}

                  <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
                    <div className="float-slow relative grid h-44 w-44 place-items-center rounded-full border border-magenta/35 bg-gradient-to-br from-fuchsia/15 via-violet/15 to-electric/15 shadow-[0_0_80px_rgba(255,0,110,.16)] backdrop-blur-md sm:h-52 sm:w-52">
                      <div className="absolute inset-3 rounded-full border border-dashed border-white/15" />
                      <div className="relative text-center">
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan">El núcleo</p>
                        <p className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">Hacerlo<br />más útil</p>
                        <p className="mt-3 font-mono text-[8px] uppercase tracking-wider text-white/35">y dejarlo mejor</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
                    {['Entender', 'Construir', 'Evolucionar'].map((label, index) => (
                      <div key={label} className={`rounded-lg border px-2 py-2 text-center font-mono text-[8px] uppercase tracking-wider ${index === 1 ? 'border-fuchsia/35 bg-fuchsia/10 text-magenta' : 'border-white/10 bg-white/[0.035] text-white/40'}`}>{label}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/10 bg-paper px-5 py-4 text-ink shadow-2xl sm:-left-9">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">Ahora construyendo</p>
              <p className="mt-1 font-display text-sm font-semibold">Data Consultant · Artefact</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`py-7 ${index % 2 === 1 ? 'border-l border-white/10 pl-5' : 'pr-5'} md:border-l md:px-7 first:md:border-l-0 first:md:pl-0`}>
              <div className="flex items-baseline gap-2"><span className="font-display text-3xl font-semibold text-white md:text-4xl">{metric.value}</span><span className="font-mono text-[9px] uppercase tracking-wider text-magenta">{metric.label}</span></div>
              <p className="mt-2 max-w-[230px] text-[11px] leading-5 text-white/35">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
