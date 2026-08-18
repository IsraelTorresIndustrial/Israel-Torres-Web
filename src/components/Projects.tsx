import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Download,
  FileCode,
  FileSpreadsheet,
  FileText,
  Layers,
  LayoutDashboard,
  ListTodo,
  MessagesSquare,
  Monitor,
  Play,
  RefreshCw,
  Send,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { portfolioData } from '../data';

type Project = (typeof portfolioData.projects)[number];

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
      tension: 'Eliminar el cuello de botella visual manteniendo 100% de consistencia de marca y editabilidad.',
      points: ['Lineamientos HTML', 'Conversión a PPTx', 'Logos & Tipografía'],
    },
    {
      title: 'Business Impact',
      badge: '04 · ROI & Delivery',
      headline: 'Reducción del 80% en tiempo de confección de presentaciones directivas.',
      tension: 'Equipos estratégicos liberados de tareas manuales para enfocarse en la toma de decisiones.',
      points: ['Velocidad de iteración', 'Calidad visual ejecutiva', 'Capacidad instalada'],
    },
  ];

  const current = slides[activeSlide];

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  };

  return (
    <MockupWindow label="HTML / LLM → PPT Engine" dark>
      <div className="grid min-h-[440px] grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr]">
        {/* Mapa de diapositivas */}
        <aside className="border-r border-white/10 bg-void/60 p-2.5 sm:p-3 flex flex-col justify-between">
          <div>
            <div className="mb-3 flex items-center gap-1.5 text-white/50">
              <Monitor className="h-3.5 w-3.5 text-cyan" />
              <span className="hidden font-mono text-[9px] uppercase tracking-wider sm:inline">Slides ({slides.length})</span>
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
            <span className="block font-mono text-[7px] uppercase text-white/35">Engine Status</span>
            <span className="mt-0.5 inline-flex items-center gap-1 font-mono text-[8px] text-cyan">
              <CheckCircle2 className="h-2.5 w-2.5" /> LLM Conectado
            </span>
          </div>
        </aside>

        {/* Panel central de preview */}
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
                  <FileCode className="inline h-2.5 w-2.5 mr-1" /> HTML Blueprint
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

          {/* Toast feedback */}
          {exported && (
            <div className="mb-3 rounded-lg border border-cyan/30 bg-cyan/15 px-3 py-2 text-xs text-cyan flex items-center justify-between animate-fadeIn">
              <span className="font-mono text-[10px]">✨ PPTx generado con branding, colores corporativos y tipografías editables.</span>
              <CheckCircle2 className="h-4 w-4" />
            </div>
          )}

          {viewMode === 'slide' ? (
            <div className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-void/70 p-3 sm:p-4">
              <div className="aspect-video w-full max-w-[540px] overflow-hidden rounded-md bg-paper p-4 text-ink shadow-2xl sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-amber font-bold">
                      Visa Regional Strategic Executive Deck
                    </span>
                    <span className="font-mono text-[9px] text-muted">Slide 0{activeSlide + 1} / 04</span>
                  </div>
                  <h4 className="mt-3 max-w-[90%] font-display text-sm font-semibold leading-snug tracking-[-0.02em] sm:text-lg text-ink">
                    {current.headline}
                  </h4>
                </div>

                <div className="my-2 grid grid-cols-[1.1fr_0.9fr] gap-2.5">
                  <div className="rounded-lg bg-ink p-3 text-white">
                    <p className="font-mono text-[8px] uppercase tracking-wider text-cyan font-semibold">Tensión Clave</p>
                    <p className="mt-1.5 text-[9px] leading-relaxed text-white/70">{current.tension}</p>
                  </div>
                  <div className="grid gap-1.5">
                    {current.points.map((pt, i) => (
                      <div key={pt} className="flex items-center gap-2 rounded-md border border-line bg-canvas px-2 py-1">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            i === 0 ? 'bg-amber' : i === 1 ? 'bg-electric' : 'bg-cyan'
                          }`}
                        />
                        <span className="font-mono text-[8px] uppercase text-ink font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-line pt-2 text-[8px] font-mono text-muted">
                  <span>Confidencial · Iniciativas Estratégicas</span>
                  <span className="text-amber font-semibold">Ready for C-Level Presentation</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 rounded-xl border border-white/10 bg-void/90 p-4 font-mono text-[10px] text-cyan/90 overflow-x-auto">
              <pre className="text-white/70 leading-relaxed">
                {`<!-- Executive Slide Template (Passed to LLM) -->
<section class="slide-container" data-slide="${activeSlide + 1}">
  <header class="branding-header">
    <span class="badge">${current.badge}</span>
    <h2 class="slide-title">${current.title}</h2>
  </header>
  <main class="grid-layout">
    <div class="tension-box" style="theme: slate-navy">
      <p class="copy">${current.tension}</p>
    </div>
    <ul class="pillars">
      ${current.points.map((p) => `<li><span class="bullet" /> ${p}</li>`).join('\n      ')}
    </ul>
  </main>
</section>
<!-- Export Engine: PPTx Builder v2.4 (Native editable objects) -->`}
              </pre>
            </div>
          )}

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ['Estructura LLM', 'Validada', CheckCircle2, 'text-cyan'],
              ['Diseño & Colores', '100% Brand', Sparkles, 'text-amber'],
              ['Exportación PPTx', 'Editable', Download, 'text-cyan'],
            ].map(([title, subtitle, Icon, color]) => {
              const Component = Icon as typeof CheckCircle2;
              return (
                <div key={String(title)} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                  <Component className={`h-3.5 w-3.5 ${color}`} />
                  <div>
                    <p className="font-mono text-[8px] uppercase text-white/40">{String(title)}</p>
                    <p className="font-mono text-[9px] text-white font-medium">{String(subtitle)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

// 2. Knowledge Mockup: Copiloto Comercial & RAG con 200+ casos QA
function KnowledgeMockup() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const sampleQuestions = [
    {
      q: '¿Qué condiciones aplican a la campaña de cashback en compras internacionales?',
      answer:
        'Aplica para tarjetas Platinum y Black activas. Requiere compras sobre $50 USD en comercios adheridos. El tope mensual es de $100 USD por cuenta, acreditado en el siguiente ciclo de facturación.',
      source: 'Doc-Visa-Políticas-Regional-2026.pdf · Secc. 3.4',
      confidence: '99.6%',
      action: 'Validar si la tarjeta del cliente cuenta con enrolamiento automático.',
      category: 'Medios de Pago · Cashback',
    },
    {
      q: '¿Cuáles son los beneficios de seguros y asistencia médica en viajes al exterior?',
      answer:
        'Los titulares cuentan con cobertura de emergencia médica hasta $150.000 USD al pagar el 100% del pasaje con la tarjeta. Incluye pérdida de equipaje y repatriación.',
      source: 'Manual-Beneficios-Internacionales-v2.docx · p. 18',
      confidence: '98.8%',
      action: 'Recordar al cliente activar el certificado de viaje antes del despegue.',
      category: 'Beneficios & Protección',
    },
    {
      q: '¿Cuál es el protocolo comercial para reactivar a un cliente inactivo hace >90 días?',
      answer:
        'Se activa el flujo de Lifecycle "Reactivación Fase 1": oferta de tasa preferencial + bonificación en primera compra tras 7 días de contacto.',
      source: 'Playbook-Lifecycle-CRM-Argentina-Chile.pdf · p. 42',
      confidence: '99.1%',
      action: 'Enviar notificación push segmentada por el Business Analyst.',
      category: 'CRM Lifecycle',
    },
  ];

  const active = sampleQuestions[selectedQuestion];

  return (
    <MockupWindow label="Commercial Intelligence Copilot (RAG)" badge="200+ Pruebas QA">
      <div className="min-h-[440px] bg-canvas p-3 sm:p-5">
        {/* Cabecera del Copiloto */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-paper px-4 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-display text-xs font-bold text-amber">
              CI
            </span>
            <div>
              <p className="font-display text-xs font-semibold text-ink">Copiloto de Políticas Comerciales & Beneficios</p>
              <p className="font-mono text-[8px] uppercase tracking-wider text-muted">
                RAG Activo · Fuentes Institucionales Validadas
              </p>
            </div>
          </div>
          <span className="rounded-full bg-cyan/10 px-3 py-1 font-mono text-[8px] uppercase text-cyan border border-cyan/20 font-semibold">
            Evidencia Conectada · QA Fidelidad: {active.confidence}
          </span>
        </div>

        {/* Layout en 3 columnas */}
        <div className="grid gap-3 md:grid-cols-[0.8fr_1.4fr_0.8fr]">
          {/* Preguntas de prueba interactivas */}
          <aside className="rounded-xl border border-line bg-paper p-3.5 shadow-sm">
            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-amber font-semibold">
              <ListTodo className="h-3.5 w-3.5" /> Casos de Prueba Piloto
            </div>
            <p className="mt-2 text-[10px] text-muted">Selecciona una consulta para ver la respuesta y trazabilidad:</p>
            <div className="mt-3 space-y-2">
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
                  <p className="mt-1 line-clamp-2 text-[9px] font-semibold text-ink leading-tight">{item.q}</p>
                </button>
              ))}
            </div>
          </aside>

          {/* Chat interactivo */}
          <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-sm">
            <div className="flex-1 space-y-3 bg-canvas/60 p-3 sm:p-4">
              {/* Mensaje de usuario */}
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-2.5 text-[10px] leading-relaxed text-white shadow-sm">
                {active.q}
              </div>

              {/* Respuesta RAG */}
              <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-line bg-paper p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber font-mono text-[8px] uppercase tracking-wider font-semibold">
                    <Sparkles className="h-3.5 w-3.5 text-amber" /> Respuesta Guiada por IA
                  </div>
                  <span className="font-mono text-[8px] text-cyan font-bold">Consistencia 100%</span>
                </div>
                <p className="mt-2.5 text-[10px] leading-5 text-ink/80">{active.answer}</p>

                {/* Cita de fuente */}
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-line bg-canvas px-2.5 py-1.5 font-mono text-[8px] text-muted">
                  <FileText className="h-3 w-3 text-amber shrink-0" />
                  <span className="truncate">Fuente citada: {active.source}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-line p-2.5 bg-paper">
              <div className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-3 py-2">
                <span className="flex-1 text-[9px] text-muted">Hacer otra consulta al copiloto...</span>
                <Send className="h-3.5 w-3.5 text-amber" />
              </div>
            </div>
          </div>

          {/* Panel lateral: Acción recomendada & Benchmark */}
          <aside className="rounded-xl border border-line bg-paper p-3.5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-line pb-2">
              <span className="font-mono text-[8px] uppercase tracking-wider text-amber font-semibold">Próxima Acción</span>
              <CheckCircle2 className="h-3.5 w-3.5 text-amber" />
            </div>
            <div className="rounded-lg bg-canvas p-2.5 border border-line">
              <p className="text-[9px] text-ink font-medium leading-relaxed">{active.action}</p>
            </div>

            <div className="rounded-lg bg-ink p-3 text-white">
              <p className="font-mono text-[8px] uppercase tracking-wider text-cyan font-semibold">Validación Sistemática</p>
              <p className="mt-1.5 text-[8px] leading-4 text-white/70">
                Auditado con más de 200 casos de prueba QA para prevenir respuestas no autorizadas.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </MockupWindow>
  );
}

// 3. Content Mockup: Agente de Piezas & Briefs para Marketing y PMs
function ContentMockup() {
  const [variant, setVariant] = useState(0);
  const [tab, setTab] = useState<'preview' | 'brief'>('preview');

  const variants = [
    {
      name: 'Enfoque Directo / Performance',
      subject: 'Activa tus compras internacionales sin comisión adicional',
      tagline: 'Beneficio exclusivo por tiempo limitado',
      body: 'Usa tu tarjeta en cualquier comercio del mundo y recibe un 5% de cashback en tu próximo resumen. Sin trámites adicionales.',
      cta: 'Ver Comercios Adheridos',
      target: 'Clientes Activos · Tarjetas Platinum / Black',
    },
    {
      name: 'Enfoque Beneficio & Storytelling',
      subject: 'Tu próximo destino tiene una ventaja que no puedes dejar pasar',
      tagline: 'Viaja con la tranquilidad de estar protegido',
      body: 'Asistencia médica internacional, seguro de equipaje y acumulación doble de puntos al pagar tus pasajes con Visa.',
      cta: 'Activar Certificado de Viaje',
      target: 'Viajeros Frecuentes · Segmento Premium',
    },
    {
      name: 'Enfoque Reactivación / Cercano',
      subject: 'Te extrañamos: tenemos una sorpresa especial para ti',
      tagline: 'Vuelve a disfrutar de tus beneficios',
      body: 'Realiza una compra de cualquier monto esta semana y accede a un bono directo de $10.000 en tu estado de cuenta.',
      cta: 'Aprovechar Bonificación',
      target: 'Cuentas Inactivas >60 días',
    },
  ];

  const active = variants[variant];

  return (
    <MockupWindow label="GenAI Marketing & PM Briefing Agent" badge="HTML + Brief Delivery">
      <div className="min-h-[440px] bg-canvas p-3 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-ink to-navy text-amber">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-xs font-semibold text-ink">Agente de Campañas & Maquetación HTML</p>
              <p className="font-mono text-[8px] uppercase text-muted">Brief estructurado + Pieza responsive para PMs</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-line bg-paper p-1">
            <button
              type="button"
              onClick={() => setTab('preview')}
              className={`rounded px-3 py-1 font-mono text-[8px] uppercase transition-all ${
                tab === 'preview' ? 'bg-ink font-bold text-white' : 'text-muted hover:text-ink'
              }`}
            >
              Email HTML Render
            </button>
            <button
              type="button"
              onClick={() => setTab('brief')}
              className={`rounded px-3 py-1 font-mono text-[8px] uppercase transition-all ${
                tab === 'brief' ? 'bg-ink font-bold text-white' : 'text-muted hover:text-ink'
              }`}
            >
              Brief para PM
            </button>
          </div>
        </div>

        {/* Selector de variantes generadas */}
        <div className="mb-3 grid grid-cols-3 gap-2">
          {variants.map((v, index) => (
            <button
              key={v.name}
              type="button"
              onClick={() => setVariant(index)}
              className={`rounded-lg border p-2 text-left transition-all ${
                variant === index ? 'border-cognac bg-amber/[0.08] shadow-sm' : 'border-line bg-paper hover:bg-canvas'
              }`}
            >
              <span className={`block font-mono text-[7px] uppercase ${variant === index ? 'text-amber font-bold' : 'text-muted'}`}>
                Variante 0{index + 1}
              </span>
              <p className="mt-0.5 truncate text-[9px] font-semibold text-ink">{v.name}</p>
            </button>
          ))}
        </div>

        {tab === 'preview' ? (
          <div className="rounded-xl border border-line bg-paper p-4 shadow-sm max-w-[560px] mx-auto">
            {/* Header del email */}
            <div className="border-b border-line pb-3 flex items-center justify-between">
              <div>
                <span className="font-mono text-[7px] uppercase tracking-wider text-amber font-bold">Visa Regional Campaign</span>
                <p className="text-[10px] font-bold text-ink mt-0.5">Asunto: {active.subject}</p>
              </div>
              <span className="rounded bg-canvas px-2 py-0.5 font-mono text-[7px] text-muted border border-line">HTML5 / CSS</span>
            </div>

            {/* Cuerpo del email renderizado */}
            <div className="py-4 space-y-3">
              <div className="rounded-lg bg-ink p-4 text-white">
                <span className="font-mono text-[8px] uppercase tracking-wider text-cyan font-semibold">{active.tagline}</span>
                <h5 className="mt-1 font-display text-base font-semibold">{active.subject}</h5>
              </div>
              <p className="text-[10px] leading-relaxed text-ink/80">{active.body}</p>
              <button
                type="button"
                className="w-full rounded-lg bg-gradient-to-r from-cognac to-amber py-2.5 font-display text-xs font-bold text-void shadow-sm"
              >
                {active.cta}
              </button>
            </div>

            <div className="border-t border-line pt-2 flex items-center justify-between font-mono text-[8px] text-muted">
              <span>Audiencia: {active.target}</span>
              <span className="text-amber font-semibold">Listo para Producción</span>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-line bg-paper p-4 shadow-sm space-y-3">
            <h5 className="font-display text-sm font-semibold text-ink">Brief Comercial Estructurado para Product Managers</h5>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-canvas p-3 border border-line">
                <p className="font-mono text-[8px] uppercase text-muted font-bold">Objetivo de la Campaña</p>
                <p className="mt-1 text-[9px] text-ink font-medium">Incrementar volumen transaccional en compras transfronterizas.</p>
              </div>
              <div className="rounded-lg bg-canvas p-3 border border-line">
                <p className="font-mono text-[8px] uppercase text-muted font-bold">Audiencia & Segmentación</p>
                <p className="mt-1 text-[9px] text-ink font-medium">{active.target}</p>
              </div>
              <div className="rounded-lg bg-canvas p-3 border border-line">
                <p className="font-mono text-[8px] uppercase text-muted font-bold">Canal Principal</p>
                <p className="mt-1 text-[9px] text-ink font-medium">Email HTML Responsive + Notificación In-App</p>
              </div>
              <div className="rounded-lg bg-canvas p-3 border border-line">
                <p className="font-mono text-[8px] uppercase text-muted font-bold">Métrica de Éxito (KPI)</p>
                <p className="mt-1 text-[9px] text-ink font-medium">+18% en tasa de activación de beneficios en 14 días.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </MockupWindow>
  );
}

// 4. Tracker Mockup: Academic Scrum Master Platform (USS)
function TrackerMockup() {
  const [selectedTeam, setSelectedTeam] = useState(0);

  const teams = [
    {
      name: 'Equipo 04 · FinTech & Pagos',
      grade: '6.7',
      status: 'En ritmo',
      statusColor: 'text-cyan bg-cyan/10 border-cyan/20',
      sprint: 'Sprint 04 · Prototipo Final',
      progress: 88,
      log: 'Revisión metodológica completada. Entregaron la arquitectura funcional y el modelo de datos sin observaciones.',
      pending: 'Pruebas de usuario con panel de 15 personas.',
    },
    {
      name: 'Equipo 12 · Logística & Sustentabilidad',
      grade: '4.9',
      status: 'Crítico / Atención',
      statusColor: 'text-amber bg-amber/10 border-amber/20',
      sprint: 'Sprint 04 · Prototipo Retrasado',
      progress: 52,
      log: 'Presentaron retraso en la integración de la base de datos. Se programó sesión de mentoría urgente con el docente.',
      pending: 'Reestructurar entregables antes del viernes.',
    },
    {
      name: 'Equipo 19 · Salud Conectada',
      grade: '6.1',
      status: 'En ritmo',
      statusColor: 'text-cyan bg-cyan/10 border-cyan/20',
      sprint: 'Sprint 04 · Validación QA',
      progress: 78,
      log: 'Bitácora al día. Excelente avance en el diseño de interfaces y definición de propuesta de valor.',
      pending: 'Cargar rúbrica de autoevaluación grupal.',
    },
  ];

  const current = teams[selectedTeam];

  return (
    <MockupWindow label="Academic Scrum Master OS" badge="30+ Equipos USS">
      <div className="min-h-[440px] bg-canvas p-3 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink text-white font-display text-xs font-bold">
              SM
            </span>
            <div>
              <p className="font-display text-xs font-semibold text-ink">Panel de Control & Ponderación de Notas</p>
              <p className="font-mono text-[8px] uppercase text-muted">Coordinación Ágil y Seguimiento Docente</p>
            </div>
          </div>
          <span className="rounded-full bg-paper border border-line px-3 py-1 font-mono text-[8px] uppercase text-ink font-semibold">
            30+ Equipos Monitoreados
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-[0.9fr_1.3fr]">
          {/* Lista de equipos */}
          <div className="space-y-2">
            <p className="font-mono text-[8px] uppercase text-muted font-bold">Seleccionar Equipo de la Cohorte:</p>
            {teams.map((t, index) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setSelectedTeam(index)}
                className={`w-full rounded-xl border p-3 text-left transition-all ${
                  selectedTeam === index ? 'border-cognac bg-paper shadow-sm' : 'border-line bg-canvas hover:bg-paper'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-ink">{t.name}</span>
                  <span className="font-mono text-[10px] font-bold text-amber">Nota: {t.grade}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-mono text-[8px] text-muted">{t.sprint}</span>
                  <span className={`rounded-full px-2 py-0.5 font-mono text-[7px] uppercase border ${t.statusColor}`}>
                    {t.status}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Detalle y Bitácora del equipo activo */}
          <div className="rounded-xl border border-line bg-paper p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-line pb-2">
              <div>
                <span className="font-mono text-[8px] uppercase text-muted">Ficha del Proyecto</span>
                <h5 className="font-display text-sm font-semibold text-ink">{current.name}</h5>
              </div>
              <div className="text-right">
                <span className="font-mono text-[8px] uppercase text-muted">Nota Ponderada</span>
                <p className="font-display text-lg font-bold text-amber">{current.grade} / 7.0</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-mono text-[8px] uppercase text-muted mb-1">
                <span>Avance del Semestre</span>
                <span>{current.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-canvas overflow-hidden border border-line">
                <div className="h-full rounded-full bg-gradient-to-r from-cognac to-amber" style={{ width: `${current.progress}%` }} />
              </div>
            </div>

            <div className="rounded-lg bg-canvas p-3 border border-line">
              <div className="flex items-center gap-2 text-amber font-mono text-[8px] uppercase font-bold">
                <MessagesSquare className="h-3.5 w-3.5" /> Bitácora de Sesión Scrum
              </div>
              <p className="mt-1.5 text-[9px] leading-relaxed text-ink/80">{current.log}</p>
            </div>

            <div className="rounded-lg bg-ink p-3 text-white flex items-start gap-2.5">
              <AlertTriangle className="h-3.5 w-3.5 text-amber shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[8px] uppercase text-cyan font-bold">Acción Docente Pendiente</p>
                <p className="mt-0.5 text-[8px] text-white/70">{current.pending}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

// 5. Control Mockup: CRM Lifecycle Visa & Roadmap
function ControlMockup() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      name: 'Adquisición',
      metric: '+24%',
      label: 'Nuevos Tarjetahabientes',
      sub: 'Campañas de captación digital y bienvenida en medios de pago.',
    },
    {
      name: 'Activación Temprana',
      metric: '68%',
      label: 'Uso en Primeros 30 Días',
      sub: 'Mecánicas de incentivo en primera compra y enrolamiento a beneficios.',
    },
    {
      name: 'Uso & Recurrencia',
      metric: '3.4x',
      label: 'Frecuencia Mensual',
      sub: 'Segmentación por categoría de gasto (viajes, compras diarias, suscripciones).',
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
    <MockupWindow label="Customer Lifecycle & Regional Roadmap" dark badge="Visa Chile & Argentina">
      <div className="min-h-[440px] bg-night p-4 sm:p-5 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-cognac/15 text-amber">
              <LayoutDashboard className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-xs font-semibold">Orquestación del Ciclo de Vida del Cliente</p>
              <p className="font-mono text-[8px] uppercase text-white/40">Iniciativas Regionales Visa · Tableros Power BI</p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[8px] uppercase text-cyan">
            Supervisión Data Science + BI
          </span>
        </div>

        {/* Selector de fases del Lifecycle */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {stages.map((st, index) => (
            <button
              key={st.name}
              type="button"
              onClick={() => setActiveStage(index)}
              className={`rounded-xl border p-3 text-left transition-all ${
                activeStage === index
                  ? 'border-cognac bg-cognac/15 shadow-sm'
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
              }`}
            >
              <span className={`font-mono text-[8px] uppercase ${activeStage === index ? 'text-amber font-bold' : 'text-white/40'}`}>
                Fase 0{index + 1}
              </span>
              <p className="mt-1 font-display text-xs font-semibold">{st.name}</p>
              <p className={`mt-2 font-display text-lg font-bold ${activeStage === index ? 'text-cyan' : 'text-white/60'}`}>
                {st.metric}
              </p>
            </button>
          ))}
        </div>

        {/* Detalle de la fase seleccionada */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div>
              <span className="font-mono text-[8px] uppercase text-cyan font-bold">Foco Estratégico</span>
              <h5 className="font-display text-sm font-semibold text-white mt-0.5">{current.name}</h5>
            </div>
            <span className="font-mono text-[9px] text-amber font-semibold">{current.label}</span>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">{current.sub}</p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="rounded-lg border border-white/10 bg-void/60 p-2.5">
              <span className="font-mono text-[7px] uppercase text-white/40">Rol Articulador</span>
              <p className="mt-1 text-[9px] text-white/80">Alineación entre modelos de Data Science y ejecuciones de Marketing.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-void/60 p-2.5">
              <span className="font-mono text-[7px] uppercase text-white/40">Monitoreo</span>
              <p className="mt-1 text-[9px] text-white/80">Tableros de funnels y conversión en Power BI para lectura ejecutiva.</p>
            </div>
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

function ProjectMockup({ visual }: { visual: Project['visual'] }) {
  if (visual === 'presentation') return <PresentationMockup />;
  if (visual === 'knowledge') return <KnowledgeMockup />;
  if (visual === 'control') return <ControlMockup />;
  if (visual === 'content') return <ContentMockup />;
  return <TrackerMockup />;
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = portfolioData.projects[activeIndex];

  return (
    <section id="proyectos" className="relative overflow-hidden bg-void py-20 text-white md:py-28">
      <div className="signal-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-electric/10 blur-[160px]" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">02 / Proyectos & Prototipos</p>
            <h2 className="text-balance mt-5 max-w-[620px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-7xl">
              De la idea al prototipo que se puede tocar.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-[710px] text-lg leading-8 text-white/65">
              No me interesa quedarme en presentaciones teóricas. Construyo maquetas funcionales, motores con LLMs y herramientas web para probar hipótesis, alinear equipos y acelerar decisiones de negocio.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-6">
          {/* Navegación lateral de proyectos */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible" role="tablist" aria-label="Seleccionar proyecto">
            {portfolioData.projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="project-panel"
                onClick={() => setActiveIndex(index)}
                className={`group min-w-[220px] rounded-xl border p-4 text-left transition-all lg:w-full ${
                  activeIndex === index
                    ? 'border-cognac bg-cognac/15 shadow-md'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`font-mono text-[9px] uppercase tracking-[0.14em] font-bold ${activeIndex === index ? 'text-amber' : 'text-white/40'}`}>
                    0{index + 1}
                  </span>
                  <ArrowRight className={`h-3.5 w-3.5 transition-transform ${activeIndex === index ? 'translate-x-0 text-amber' : '-translate-x-1 text-white/20 group-hover:translate-x-0'}`} />
                </div>
                <p className="mt-4 font-display text-sm font-semibold text-white leading-snug">{item.short}</p>
                <p className="mt-1.5 truncate font-mono text-[8px] uppercase text-white/40">{item.type}</p>
              </button>
            ))}
          </div>

          {/* Panel activo con Mockup interactivo y ficha técnica */}
          <article id="project-panel" role="tabpanel" className="min-w-0 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-3 sm:p-5 lg:p-7 shadow-xl">
            <ProjectMockup visual={project.visual} />

            <div className="grid gap-10 px-2 pb-3 pt-10 md:px-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
                  <span className="text-amber font-semibold">{project.status}</span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span>{project.context}</span>
                </div>
                <h3 className="text-balance mt-4 font-display text-2xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-4xl text-white">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-[680px] text-base leading-8 text-white/65">{project.thesis}</p>
                
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[8px] uppercase tracking-wider text-white/55">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                {[
                  ['Fricción que originó el proyecto', project.problem],
                  ['Lo que construí e implementé', project.build],
                  ['Capacidad y valor que deja instalado', project.value],
                ].map(([label, copy], index) => (
                  <div key={label} className={index < 2 ? 'border-b border-white/10 pb-6' : ''}>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-cyan font-semibold">{label}</p>
                    <p className="mt-2.5 text-sm leading-7 text-white/60">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-2 mt-4 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:mx-4 md:grid-cols-2 lg:grid-cols-4">
              {project.facts.map((fact) => (
                <div key={fact} className="bg-night px-4 py-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-white/50">{fact}</p>
                </div>
              ))}
            </div>

            <div className="mx-2 mt-6 flex flex-col gap-2 border-t border-white/10 pb-2 pt-5 text-sm leading-6 text-white/60 md:mx-4 sm:flex-row sm:items-start">
              <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-amber font-semibold sm:w-24">Mi rol</span>
              <span>{project.role}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
