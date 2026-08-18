import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileCode,
  FileText,
  Layers,
  LayoutDashboard,
  ListTodo,
  Monitor,
  Send,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data';

function MockupWindow({
  label,
  children,
  dark = false,
  badge = 'Simulación Interactiva',
}: {
  label: string;
  children: ReactNode;
  dark?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`window-shadow relative overflow-hidden rounded-[1.4rem] border transition-all ${
        dark ? 'border-white/10 bg-night text-white' : 'border-line bg-paper text-ink'
      }`}
    >
      <div
        className={`flex h-11 items-center justify-between border-b px-4 ${
          dark ? 'border-white/10 bg-void/80' : 'border-line bg-canvas/90'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cognac/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-electric/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
        </div>
        <div className="flex items-center gap-2">
          <span className={`font-mono text-[9px] uppercase tracking-[0.14em] ${dark ? 'text-white/45' : 'text-muted'}`}>
            {label}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider ${
              dark ? 'bg-cyan/10 text-cyan border border-cyan/20' : 'bg-cognac/10 text-cognac border border-cognac/20'
            }`}
          >
            {badge}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}

// 1. Presentation Mockup: Generación HTML -> PPTx con LLMs
function PresentationMockup() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'slide' | 'code'>('slide');
  const [exported, setExported] = useState(false);

  const slides = [
    {
      title: 'Executive Point of View',
      badge: '01 · Storyline',
      headline: 'La información genera valor real cuando destraba una decisión comercial.',
      tension: 'Más reportes no implican claridad. La orquestación debe resumir, respaldar y guiar la acción.',
      points: ['Estructura corporativa', 'Trazabilidad de datos', 'Acción explícita'],
    },
    {
      title: 'Competitive Benchmark',
      badge: '02 · Análisis de Mercado',
      headline: 'Comparativa de beneficios y fricciones en medios de pago regionales.',
      tension: 'Detectar brechas de valor frente a la competencia permite diseñar journeys de mayor retención.',
      points: ['Benchmark de beneficios', 'Análisis de pricing', 'Ventaja competitiva'],
    },
    {
      title: 'System Architecture',
      badge: '03 · AI Workflow',
      headline: 'Orquestación de prompts con directrices HTML y exportación nativa a PPTx.',
      tension: 'Eliminar el cuello de botella visual manteniendo consistencia de marca y editabilidad total.',
      points: ['Lineamientos HTML', 'Conversión a PPTx', 'Logos & Tipografía'],
    },
  ];

  const current = slides[activeSlide];

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  };

  return (
    <MockupWindow label="Presentation Intelligence (LLM → PPTx)" dark>
      <div className="grid min-h-[420px] grid-cols-[80px_1fr] sm:grid-cols-[115px_1fr]">
        <aside className="border-r border-white/10 bg-void/60 p-2.5 sm:p-3 flex flex-col justify-between">
          <div>
            <div className="mb-3 flex items-center gap-1.5 text-white/50">
              <Monitor className="h-3.5 w-3.5 text-cyan" />
              <span className="hidden font-mono text-[9px] uppercase tracking-wider sm:inline">Deck Map</span>
            </div>
            <div className="space-y-2">
              {slides.map((s, index) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`w-full text-left aspect-video rounded-lg border p-1.5 transition-all ${
                    activeSlide === index
                      ? 'border-cognac bg-cognac/15 shadow-sm'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <span className={`block font-mono text-[8px] font-bold ${activeSlide === index ? 'text-amber' : 'text-white/40'}`}>
                    0{index + 1}
                  </span>
                  <div className={`mt-1 h-1 rounded ${activeSlide === index ? 'w-3/4 bg-cognac' : 'w-1/2 bg-white/20'}`} />
                  <div className="mt-1 h-0.5 w-full rounded bg-white/10" />
                </button>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t border-white/10 hidden sm:block">
            <span className="block font-mono text-[7px] uppercase text-white/35">Engine</span>
            <span className="mt-0.5 inline-flex items-center gap-1 font-mono text-[8px] text-cyan">
              <CheckCircle2 className="h-2.5 w-2.5" /> LLM Conectado
            </span>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col bg-panel/60 p-3 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-cyan font-semibold">{current.badge}</p>
              <p className="mt-0.5 text-xs font-semibold text-white">{current.title}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-white/10 bg-white/[0.04] p-0.5">
                <button
                  type="button"
                  onClick={() => setViewMode('slide')}
                  className={`rounded px-2.5 py-1 font-mono text-[8px] uppercase transition-all ${
                    viewMode === 'slide' ? 'bg-cognac font-bold text-void' : 'text-white/50 hover:text-white'
                  }`}
                >
                  Vista Slide
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('code')}
                  className={`rounded px-2.5 py-1 font-mono text-[8px] uppercase transition-all ${
                    viewMode === 'code' ? 'bg-cognac font-bold text-void' : 'text-white/50 hover:text-white'
                  }`}
                >
                  <FileCode className="inline h-2.5 w-2.5 mr-1" /> HTML Code
                </button>
              </div>
              <button
                type="button"
                onClick={handleExport}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cognac to-amber px-3 py-1.5 font-mono text-[8px] uppercase font-bold text-void transition-transform hover:scale-[1.02] shadow-sm"
              >
                <Download className="h-3 w-3" /> Exportar PPTx
              </button>
            </div>
          </div>

          {exported && (
            <div className="mb-3 rounded-lg border border-cyan/30 bg-cyan/15 px-3 py-2 text-xs text-cyan flex items-center justify-between">
              <span className="font-mono text-[10px]">✨ PPTx generado con branding, colores corporativos y tipografías editables.</span>
              <CheckCircle2 className="h-4 w-4" />
            </div>
          )}

          {viewMode === 'slide' ? (
            <div className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-void/70 p-3 sm:p-4">
              <div className="aspect-video w-full max-w-[520px] overflow-hidden rounded-md bg-paper p-4 text-ink shadow-2xl sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-amber font-bold">
                      Strategic Presentation Blueprint
                    </span>
                    <span className="font-mono text-[8px] text-muted">Slide 0{activeSlide + 1}</span>
                  </div>
                  <h4 className="mt-2.5 max-w-[90%] font-display text-sm font-semibold leading-snug tracking-[-0.02em] sm:text-base text-ink">
                    {current.headline}
                  </h4>
                </div>

                <div className="my-2 grid grid-cols-[1.1fr_0.9fr] gap-2">
                  <div className="rounded-lg bg-ink p-2.5 text-white">
                    <p className="font-mono text-[7px] uppercase tracking-wider text-cyan font-semibold">Tensión Clave</p>
                    <p className="mt-1 text-[8px] leading-relaxed text-white/70">{current.tension}</p>
                  </div>
                  <div className="grid gap-1">
                    {current.points.map((pt, i) => (
                      <div key={pt} className="flex items-center gap-1.5 rounded-md border border-line bg-canvas px-2 py-1">
                        <span
                          className={`h-1 w-1 rounded-full ${
                            i === 0 ? 'bg-amber' : i === 1 ? 'bg-electric' : 'bg-cyan'
                          }`}
                        />
                        <span className="font-mono text-[7px] uppercase text-ink font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-line pt-1.5 text-[7px] font-mono text-muted">
                  <span>Editable en PowerPoint</span>
                  <span className="text-amber font-semibold">100% Brand Consistent</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 rounded-xl border border-white/10 bg-void/90 p-4 font-mono text-[9px] text-cyan/90 overflow-x-auto">
              <pre className="text-white/70 leading-relaxed">
                {`<!-- LLM Structured HTML Presentation Canvas -->
<section class="slide-container" data-slide="${activeSlide + 1}">
  <header>
    <span class="badge">${current.badge}</span>
    <h2>${current.title}</h2>
  </header>
  <main>
    <div class="tension">${current.tension}</div>
    <ul>${current.points.map((p) => `\n      <li>${p}</li>`).join('')}
    </ul>
  </main>
</section>`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </MockupWindow>
  );
}

// 2. Copilot Mockup: RAG con 200+ casos QA
function KnowledgeMockup() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const sampleQuestions = [
    {
      q: '¿Qué condiciones aplican a la campaña de cashback en compras internacionales?',
      answer:
        'Aplica para tarjetas Platinum y Black activas. Requiere compras sobre $50 USD en comercios adheridos. El tope mensual es de $100 USD por cuenta, acreditado en el siguiente ciclo de facturación.',
      source: 'Doc-Visa-Políticas-Regional.pdf · Secc. 3.4',
      confidence: '99.6% Fidelidad QA',
      category: 'Medios de Pago · Cashback',
    },
    {
      q: '¿Cuáles son los beneficios de seguros y asistencia médica en viajes al exterior?',
      answer:
        'Los titulares cuentan con cobertura de emergencia médica hasta $150.000 USD al pagar el 100% del pasaje con la tarjeta. Incluye pérdida de equipaje y repatriación.',
      source: 'Manual-Beneficios-Internacionales.docx · p. 18',
      confidence: '98.8% Fidelidad QA',
      category: 'Beneficios & Protección',
    },
    {
      q: '¿Cuál es el protocolo comercial para reactivar a un cliente inactivo hace >90 días?',
      answer:
        'Se activa el flujo de Lifecycle "Reactivación Fase 1": oferta de tasa preferencial + bonificación en primera compra tras 7 días de contacto.',
      source: 'Playbook-Lifecycle-CRM.pdf · p. 42',
      confidence: '99.1% Fidelidad QA',
      category: 'CRM Lifecycle',
    },
  ];

  const active = sampleQuestions[selectedQuestion];

  return (
    <MockupWindow label="Copiloto Comercial (RAG)" badge="200+ Casos QA">
      <div className="min-h-[420px] bg-canvas p-3 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-paper px-4 py-2.5 shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink font-display text-xs font-bold text-amber">
              CI
            </span>
            <div>
              <p className="font-display text-xs font-semibold text-ink">Copiloto de Políticas Comerciales & Beneficios</p>
              <p className="font-mono text-[8px] uppercase text-muted">Fuentes Oficiales · Respuestas Trazables</p>
            </div>
          </div>
          <span className="rounded-full bg-cyan/10 px-3 py-1 font-mono text-[8px] uppercase text-cyan border border-cyan/20 font-semibold">
            {active.confidence}
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-[0.85fr_1.35fr]">
          <aside className="rounded-xl border border-line bg-paper p-3 shadow-sm space-y-2">
            <p className="font-mono text-[8px] uppercase text-muted font-bold">Consultas Piloto:</p>
            {sampleQuestions.map((item, index) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setSelectedQuestion(index)}
                className={`w-full rounded-lg border p-2.5 text-left transition-all ${
                  selectedQuestion === index
                    ? 'border-cognac bg-amber/[0.06] shadow-sm'
                    : 'border-line bg-canvas hover:border-line/80'
                }`}
              >
                <span className="block font-mono text-[7px] uppercase text-muted">{item.category}</span>
                <p className="mt-0.5 line-clamp-2 text-[9px] font-semibold text-ink leading-tight">{item.q}</p>
              </button>
            ))}
          </aside>

          <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-sm">
            <div className="flex-1 space-y-3 bg-canvas/60 p-3 sm:p-4">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-3.5 py-2 text-[9px] leading-relaxed text-white">
                {active.q}
              </div>

              <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-line bg-paper p-3.5 shadow-sm">
                <div className="flex items-center gap-1.5 text-amber font-mono text-[8px] uppercase font-semibold">
                  <Sparkles className="h-3 w-3 text-amber" /> Respuesta Validada por RAG
                </div>
                <p className="mt-2 text-[9px] leading-5 text-ink/80">{active.answer}</p>
                <div className="mt-2.5 flex items-center gap-1.5 rounded border border-line bg-canvas px-2 py-1 font-mono text-[7px] text-muted">
                  <FileText className="h-2.5 w-2.5 text-amber shrink-0" />
                  <span className="truncate">Fuente: {active.source}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-line p-2 bg-paper flex items-center gap-2">
              <span className="flex-1 text-[8px] text-muted px-2">Continuar consulta...</span>
              <Send className="h-3 w-3 text-amber mr-1" />
            </div>
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

// 3. CRM Mockup: Funnel de Ciclo de Vida
function ControlMockup() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      name: 'Adquisición',
      metric: '+24%',
      label: 'Nuevos Clientes',
      sub: 'Captación digital y bienvenida conectada a segmentaciones de Data Science.',
    },
    {
      name: 'Activación',
      metric: '68%',
      label: 'Uso Primeros 30 Días',
      sub: 'Incentivos de primera compra y enrolamiento automático a beneficios.',
    },
    {
      name: 'Uso & Recurrencia',
      metric: '3.4x',
      label: 'Frecuencia Mensual',
      sub: 'Campañas segmentadas por categoría de gasto (viajes, compras recurrentes).',
    },
    {
      name: 'Reactivación',
      metric: '14.2%',
      label: 'Recuperación de Cuentas',
      sub: 'Flujos automatizados para clientes sin actividad en 60 a 90 días.',
    },
  ];

  const current = stages[activeStage];

  return (
    <MockupWindow label="CRM & Customer Lifecycle" dark badge="Iniciativas Regionales Visa">
      <div className="min-h-[420px] bg-night p-4 sm:p-5 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-cognac/15 text-amber">
              <LayoutDashboard className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-xs font-semibold">Orquestación del Customer Journey</p>
              <p className="font-mono text-[8px] uppercase text-white/40">Supervisión entre Data Science, BI y Marketing</p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[8px] uppercase text-cyan">
            Power BI Dashboard View
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {stages.map((st, index) => (
            <button
              key={st.name}
              type="button"
              onClick={() => setActiveStage(index)}
              className={`rounded-xl border p-2.5 text-left transition-all ${
                activeStage === index
                  ? 'border-cognac bg-cognac/15 shadow-sm'
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
              }`}
            >
              <span className={`font-mono text-[7px] uppercase ${activeStage === index ? 'text-amber font-bold' : 'text-white/40'}`}>
                Fase 0{index + 1}
              </span>
              <p className="mt-0.5 font-display text-xs font-semibold">{st.name}</p>
              <p className={`mt-1 font-display text-base font-bold ${activeStage === index ? 'text-cyan' : 'text-white/60'}`}>
                {st.metric}
              </p>
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <h5 className="font-display text-sm font-semibold text-white">{current.name}</h5>
            <span className="font-mono text-[8px] text-amber font-semibold">{current.label}</span>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">{current.sub}</p>
        </div>
      </div>
    </MockupWindow>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { featuredProjects, otherProjects } = portfolioData;
  const project = featuredProjects[activeIndex];

  return (
    <section id="proyectos" className="relative overflow-hidden bg-void py-20 text-white md:py-28">
      <div className="signal-grid absolute inset-0 opacity-40" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="max-w-[760px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">
            03 / Selected Work
          </p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl text-white">
            Soluciones y prototipos que se pueden probar.
          </h2>
        </div>

        {/* 3 Casos Protagonistas */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible" role="tablist">
            {featuredProjects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`group min-w-[220px] rounded-xl border p-4 text-left transition-all lg:w-full ${
                  activeIndex === index
                    ? 'border-cognac bg-cognac/15 shadow-md'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                <span className={`font-mono text-[9px] uppercase font-bold ${activeIndex === index ? 'text-amber' : 'text-white/40'}`}>
                  0{index + 1}
                </span>
                <p className="mt-3 font-display text-sm font-semibold text-white leading-snug">{item.short}</p>
                <p className="mt-1 line-clamp-2 text-xs text-white/50">{item.tagline}</p>
              </button>
            ))}
          </div>

          {/* Panel Activo */}
          <article className="min-w-0 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-3 sm:p-5 lg:p-7 shadow-xl">
            {project.visual === 'presentation' && <PresentationMockup />}
            {project.visual === 'knowledge' && <KnowledgeMockup />}
            {project.visual === 'control' && <ControlMockup />}

            <div className="grid gap-6 px-2 pt-8 md:px-3 lg:grid-cols-[1fr_1fr] lg:gap-10">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white leading-tight">
                  {project.short}
                </h3>
                <p className="mt-2 text-sm font-medium text-amber">{project.tagline}</p>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-wider text-cyan font-bold">Problema</p>
                    <p className="mt-1 text-xs text-white/65 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-wider text-cyan font-bold">Qué construí</p>
                    <p className="mt-1 text-xs text-white/65 leading-relaxed">{project.build}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 flex flex-col justify-between">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-amber font-bold mb-3">
                    Qué demuestra este caso:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.demonstrates.map((d) => (
                      <span
                        key={d}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wide text-white/70"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {project.evidence && (
                  <div className="mt-6 rounded-xl border border-cyan/20 bg-cyan/[0.06] p-3">
                    <span className="font-mono text-[8px] uppercase text-cyan font-bold">Evidencia Clave</span>
                    <p className="mt-0.5 font-display text-sm font-semibold text-white">{project.evidence}</p>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>

        {/* Otros Proyectos Desarrollados (Línea Discreta) */}
        <div className="mt-18 border-t border-white/10 pt-12">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-6">
            Otros Proyectos & Herramientas Desarrolladas
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherProjects.map((op) => (
              <div key={op.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <span className="font-mono text-[8px] uppercase text-cyan">{op.tag}</span>
                <h4 className="mt-2 font-display text-sm font-semibold text-white">{op.title}</h4>
                <p className="mt-2 text-xs text-white/55 leading-relaxed">{op.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
