import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  LayoutDashboard,
  ListTodo,
  MessagesSquare,
  Monitor,
  Send,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { portfolioData } from '../data';

type Project = (typeof portfolioData.projects)[number];

function MockupWindow({ label, children, dark = false }: { label: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`window-shadow relative overflow-hidden rounded-[1.35rem] border ${dark ? 'border-white/10 bg-night' : 'border-line bg-paper'}`}>
      <div className={`flex h-11 items-center justify-between border-b px-4 ${dark ? 'border-white/10 bg-void/60' : 'border-line bg-canvas/80'}`}>
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-fuchsia" /><span className="h-2 w-2 rounded-full bg-violet" /><span className="h-2 w-2 rounded-full bg-electric" /></div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.14em] ${dark ? 'text-white/38' : 'text-muted'}`}>{label} · datos simulados</span>
      </div>
      {children}
    </div>
  );
}

function PresentationMockup() {
  return (
    <MockupWindow label="Executive Communication OS" dark>
      <div className="grid min-h-[410px] grid-cols-[68px_1fr] sm:grid-cols-[105px_1fr]">
        <aside className="border-r border-white/10 bg-void/50 p-2 sm:p-3">
          <div className="mb-4 flex items-center gap-2 text-white/60"><Monitor className="h-3.5 w-3.5" /><span className="hidden font-mono text-[9px] uppercase sm:block">Deck map</span></div>
          {[1, 2, 3, 4].map((slide) => (
            <div key={slide} className={`mb-2 aspect-video rounded border p-1 ${slide === 2 ? 'border-fuchsia bg-fuchsia/10' : 'border-white/10 bg-white/[0.035]'}`}>
              <div className={`h-1 rounded ${slide === 2 ? 'w-3/4 bg-magenta' : 'w-1/2 bg-white/15'}`} />
              <div className="mt-1 h-0.5 w-full rounded bg-white/10" />
              <div className="mt-1 h-0.5 w-2/3 rounded bg-white/10" />
            </div>
          ))}
        </aside>
        <div className="flex min-w-0 flex-col bg-panel/55 p-3 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-cyan">Slide 02 · Executive summary</p>
              <p className="mt-1 text-[10px] font-semibold text-white sm:text-xs">Storyline → Spec → Render → QA</p>
            </div>
            <span className="rounded-full border border-cyan/25 bg-cyan/10 px-2 py-1 font-mono text-[9px] uppercase text-cyan">Editable</span>
          </div>

          <div className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-void/55 p-3">
            <div className="aspect-video w-full max-w-[520px] overflow-hidden rounded-sm bg-white p-4 text-ink shadow-2xl sm:p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-fuchsia">Executive point of view</span>
                <span className="font-mono text-[9px] text-muted">02</span>
              </div>
              <h4 className="mt-3 max-w-[85%] font-display text-base font-semibold leading-[1.02] tracking-[-0.03em] sm:text-2xl">La información genera valor cuando cambia una decisión.</h4>
              <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-3">
                <div className="rounded-lg bg-ink p-3 text-white">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-cyan">Tensión</p>
                  <p className="mt-2 text-[9px] leading-relaxed text-white/65">Más datos no garantizan una lectura más clara. El sistema debe priorizar, explicar y dejar trazabilidad.</p>
                </div>
                <div className="grid gap-1.5">
                  {['Claim visible', 'Evidence linked', 'Action explicit'].map((item, index) => (
                    <div key={item} className="flex items-center gap-2 rounded-md border border-line px-2 py-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? 'bg-fuchsia' : index === 1 ? 'bg-electric' : 'bg-cyan'}`} />
                      <span className="font-mono text-[9px] uppercase text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {['Content check', 'Visual check', 'Editability'].map((item, index) => (
              <div key={item} className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.035] p-2">
                {index === 1 ? <Clock3 className="h-3 w-3 text-gold" /> : <CheckCircle2 className="h-3 w-3 text-cyan" />}
                <span className="font-mono text-[9px] uppercase text-white/45">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

function KnowledgeMockup() {
  return (
    <MockupWindow label="Commercial Intelligence Copilot">
      <div className="min-h-[430px] bg-[#f7f7fb] p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3">
          <div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#464eb8] font-display text-[10px] font-bold text-white">CI</span><div><p className="font-display text-xs font-semibold text-ink">Copiloto de conversación</p><p className="mt-0.5 font-mono text-[8px] uppercase tracking-wider text-muted">Ejecutivo · contexto activo</p></div></div>
          <span className="hidden rounded-full bg-cyan/10 px-3 py-1.5 font-mono text-[8px] uppercase text-electric sm:block">Evidencia conectada</span>
        </div>

        <div className="grid gap-3 md:grid-cols-[0.72fr_1.45fr_0.83fr]">
          <aside className="hidden rounded-xl border border-line bg-white p-4 md:block">
            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-fuchsia"><ListTodo className="h-3.5 w-3.5" /> Guía consultiva</div>
            <p className="mt-5 text-[11px] font-semibold leading-5 text-ink">Entender antes de recomendar</p>
            <div className="mt-4 space-y-2">
              {['Necesidad principal', 'Forma de uso', 'Producto actual', 'Siguiente pregunta'].map((item, index) => (
                <div key={item} className={`rounded-lg border p-2.5 ${index < 2 ? 'border-cyan/20 bg-cyan/5' : index === 2 ? 'border-fuchsia/25 bg-fuchsia/5' : 'border-line bg-canvas'}`}><div className="flex items-center gap-2"><span className={`grid h-4 w-4 place-items-center rounded-full text-[8px] ${index < 2 ? 'bg-cyan text-ink' : index === 2 ? 'bg-fuchsia text-white' : 'bg-mist text-muted'}`}>{index + 1}</span><span className="font-mono text-[7px] uppercase text-muted">{item}</span></div></div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-fuchsia/15 bg-fuchsia/5 p-3"><p className="font-mono text-[7px] uppercase text-fuchsia">Próxima acción</p><p className="mt-2 text-[9px] leading-4 text-muted">Validar si prioriza flexibilidad o acumulación.</p></div>
          </aside>

          <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-white">
            <div className="flex-1 space-y-3 bg-canvas/60 p-3 sm:p-4">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#464eb8] px-4 py-3 text-[10px] leading-5 text-white">Viajo varias veces al año y quiero ordenar mejor mis beneficios.</div>
              <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-line bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-fuchsia" /><span className="font-mono text-[8px] uppercase tracking-wider text-fuchsia">Respuesta guiada</span></div>
                <p className="mt-3 text-[10px] leading-5 text-muted">Antes de comparar, entendería qué valoras más: protección, flexibilidad o experiencias. Con eso puedo mostrar alternativas y explicar por qué podrían calzar contigo.</p>
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  {['Protección', 'Flexibilidad', 'Experiencias'].map((item, index) => <div key={item} className={`rounded-lg px-2 py-2 text-center font-mono text-[7px] uppercase ${index === 1 ? 'bg-fuchsia/8 text-fuchsia' : 'bg-[#464eb8]/7 text-[#464eb8]'}`}>{item}</div>)}
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-line pt-3 font-mono text-[7px] uppercase text-muted"><FileText className="h-3 w-3" /> Respuesta respaldada · vigencia requerida</div>
              </div>
            </div>
            <div className="border-t border-line p-3"><div className="flex items-center gap-2 rounded-xl border border-line px-3 py-2.5"><span className="flex-1 text-[9px] text-muted">Continuar conversación...</span><Send className="h-3.5 w-3.5 text-[#464eb8]" /></div></div>
          </div>

          <aside className="hidden rounded-xl border border-line bg-white p-4 sm:block">
            <div className="flex items-center justify-between"><span className="font-mono text-[8px] uppercase tracking-wider text-electric">Perfil vivo</span><UsersRound className="h-3.5 w-3.5 text-electric" /></div>
            <div className="mt-4 space-y-3">
              {[['Objetivo', 'Ordenar beneficios'], ['Prioridad', 'Flexibilidad'], ['Frecuencia', 'Viajes recurrentes']].map(([label, value]) => <div key={label} className="border-b border-line pb-3"><p className="font-mono text-[7px] uppercase text-muted">{label}</p><p className="mt-1 text-[9px] font-semibold text-ink">{value}</p></div>)}
            </div>
            <div className="mt-4"><div className="flex items-center justify-between"><span className="font-mono text-[7px] uppercase text-muted">Benchmark</span><BarChart3 className="h-3 w-3 text-violet" /></div><div className="mt-3 space-y-2">{[76, 58, 42].map((value, index) => <div key={value} className="flex items-center gap-2"><span className="w-8 font-mono text-[7px] text-muted">Opción {index + 1}</span><div className="h-1.5 flex-1 rounded bg-mist"><div className={`h-full rounded ${index === 0 ? 'bg-fuchsia' : index === 1 ? 'bg-electric' : 'bg-cyan'}`} style={{ width: `${value}%` }} /></div></div>)}</div></div>
            <div className="mt-4 rounded-lg bg-ink p-3 text-white"><p className="font-mono text-[7px] uppercase text-cyan">Control</p><p className="mt-2 text-[9px] leading-4 text-white/65">Sin recomendación hasta validar condiciones.</p></div>
          </aside>
        </div>
      </div>
    </MockupWindow>
  );
}

function ControlMockup() {
  const rows = [
    { name: 'Experiencia', start: 4, width: 52, color: 'bg-fuchsia' },
    { name: 'Datos', start: 18, width: 62, color: 'bg-electric' },
    { name: 'Tecnología', start: 34, width: 48, color: 'bg-cyan' },
    { name: 'Adopción', start: 57, width: 34, color: 'bg-violet' },
  ];
  return (
    <MockupWindow label="Project Control OS" dark>
      <div className="min-h-[410px] bg-[#0b0f1f] p-4 text-white sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-fuchsia/15 text-fuchsia"><LayoutDashboard className="h-4 w-4" /></span><div><p className="font-display text-xs font-semibold">Portafolio de iniciativas</p><p className="mt-1 font-mono text-[6px] uppercase text-white/30">Vista de coordinación</p></div></div>
          <span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[6px] uppercase text-white/35">Actualizado ahora</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ['En curso', '08', 'text-cyan'],
            ['Por decidir', '03', 'text-gold'],
            ['Bloqueos', '02', 'text-fuchsia'],
          ].map(([label, value, color]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><p className="font-mono text-[6px] uppercase text-white/35">{label}</p><p className={`mt-2 font-display text-xl font-semibold ${color}`}>{value}</p></div>
          ))}
        </div>
        <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><span className="font-display text-[10px] font-semibold">Roadmap integrado</span><span className="font-mono text-[6px] uppercase text-white/30">12 semanas</span></div>
          <div className="p-4">
            <div className="mb-3 ml-[72px] grid grid-cols-4 font-mono text-[5px] uppercase text-white/25"><span>S1</span><span>S4</span><span>S8</span><span>S12</span></div>
            <div className="space-y-3">
              {rows.map((row) => (
                <div key={row.name} className="grid grid-cols-[64px_1fr] items-center gap-2"><span className="truncate font-mono text-[6px] uppercase text-white/40">{row.name}</span><div className="relative h-3 rounded bg-white/[0.045]"><span className={`absolute top-0.5 h-2 rounded ${row.color}`} style={{ left: `${row.start}%`, width: `${row.width}%` }} /></div></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-gold/20 bg-gold/5 p-2 font-mono text-[6px] uppercase text-gold"><AlertTriangle className="h-3 w-3" /> Dependencia por resolver</div>
          <div className="flex items-center gap-2 rounded-lg border border-cyan/20 bg-cyan/5 p-2 font-mono text-[6px] uppercase text-cyan"><CheckCircle2 className="h-3 w-3" /> Próximo hito visible</div>
        </div>
      </div>
    </MockupWindow>
  );
}

function ContentMockup() {
  const steps = ['Brief', 'Concepto', 'Guion', 'Variantes', 'Entrega'];
  return (
    <MockupWindow label="GenIA Content x Creator">
      <div className="min-h-[410px] bg-[#f8f7fb] p-4 sm:p-5">
        <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-violet to-fuchsia text-white"><Sparkles className="h-4 w-4" /></span><div><p className="font-display text-xs font-semibold">Campaign flow</p><p className="font-mono text-[6px] uppercase text-muted">De brief a paquete creativo</p></div></div><span className="rounded-full bg-ink px-3 py-2 font-mono text-[7px] uppercase text-white">Exportar <Download className="ml-1 inline h-2.5 w-2.5" /></span></div>
        <div className="mt-5 grid grid-cols-5 gap-1.5">
          {steps.map((step, index) => <div key={step} className={`rounded-lg border px-1 py-2 text-center font-mono text-[5px] uppercase sm:text-[6px] ${index === 3 ? 'border-fuchsia bg-fuchsia/8 text-fuchsia' : index < 3 ? 'border-violet/15 bg-violet/5 text-violet' : 'border-line bg-white text-muted'}`}><span className="mr-1">{index + 1}</span>{step}</div>)}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-xl border border-line bg-white p-4">
            <p className="font-mono text-[6px] uppercase tracking-wider text-violet">Brief persistente</p>
            <h4 className="mt-3 font-display text-sm font-semibold">Una idea. Tres formas de contarla.</h4>
            <div className="mt-4 space-y-3">
              {['Objetivo', 'Audiencia', 'Promesa', 'Tono'].map((item, index) => <div key={item}><div className="flex justify-between font-mono text-[5px] uppercase text-muted"><span>{item}</span><span>{['Activar', 'Clientes', 'Simple', 'Cercano'][index]}</span></div><div className="mt-1 h-1 rounded bg-mist"><div className="h-full rounded bg-violet/35" style={{ width: `${78 - index * 8}%` }} /></div></div>)}
            </div>
          </div>
          <div className="rounded-xl border border-line bg-white p-4">
            <div className="flex items-center justify-between"><p className="font-mono text-[6px] uppercase tracking-wider text-fuchsia">Variaciones comparables</p><span className="font-mono text-[5px] uppercase text-muted">3 seleccionadas</span></div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ['Directa', 'bg-fuchsia'],
                ['Editorial', 'bg-electric'],
                ['Cercana', 'bg-cyan'],
              ].map(([name, color], index) => <div key={name} className={`overflow-hidden rounded-lg border ${index === 0 ? 'border-fuchsia' : 'border-line'}`}><div className={`aspect-square ${color} p-2`}><div className="h-1 w-1/2 rounded bg-white/75" /><div className="mt-1 h-1 w-3/4 rounded bg-white/45" /><div className="mt-5 h-8 rounded bg-white/15" /></div><div className="px-2 py-2 font-mono text-[5px] uppercase text-muted">{name}</div></div>)}
            </div>
            <div className="mt-3 flex items-center justify-between rounded-lg bg-canvas px-3 py-2"><span className="font-mono text-[6px] uppercase text-muted">Concepto y brief sincronizados</span><CheckCircle2 className="h-3 w-3 text-violet" /></div>
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

function TrackerMockup() {
  const teams = [
    { name: 'Equipo Norte', progress: 82, status: 'En ritmo', color: 'bg-cyan' },
    { name: 'Equipo Central', progress: 61, status: 'Revisar', color: 'bg-gold' },
    { name: 'Equipo Sur', progress: 74, status: 'En ritmo', color: 'bg-electric' },
  ];
  return (
    <MockupWindow label="Academic Scrum Tracker">
      <div className="min-h-[410px] bg-[#f6f2e7] p-4 sm:p-5">
        <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#173b5a] text-white"><UsersRound className="h-4 w-4" /></span><div><p className="font-display text-xs font-semibold text-[#173b5a]">Panel de equipos</p><p className="font-mono text-[6px] uppercase text-muted">Seguimiento y acompañamiento</p></div></div><span className="rounded-full bg-[#173b5a] px-3 py-1.5 font-mono text-[6px] uppercase text-white">Modo reunión</span></div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            [UsersRound, 'Equipos', '30+'],
            [MessagesSquare, 'Reuniones', 'Hoy'],
            [ListTodo, 'Hitos', 'Visibles'],
          ].map(([Icon, label, value]) => {
            const Component = Icon as typeof UsersRound;
            return <div key={String(label)} className="rounded-xl border border-[#ded4b9] bg-white/70 p-3"><Component className="h-3.5 w-3.5 text-[#b89b4f]" /><p className="mt-3 font-mono text-[5px] uppercase text-muted">{String(label)}</p><p className="mt-1 font-display text-sm font-semibold text-[#173b5a]">{String(value)}</p></div>;
          })}
        </div>
        <div className="mt-3 rounded-xl border border-[#ded4b9] bg-white/75 p-4">
          <div className="flex items-center justify-between"><p className="font-display text-[10px] font-semibold text-[#173b5a]">¿Quién necesita acompañamiento?</p><BarChart3 className="h-3.5 w-3.5 text-[#b89b4f]" /></div>
          <div className="mt-4 space-y-3">
            {teams.map((team) => <div key={team.name} className="grid grid-cols-[88px_1fr_48px] items-center gap-2"><span className="truncate font-mono text-[6px] uppercase text-muted">{team.name}</span><div className="h-2 rounded-full bg-[#e8e0ca]"><div className={`h-full rounded-full ${team.color}`} style={{ width: `${team.progress}%` }} /></div><span className="text-right font-mono text-[5px] uppercase text-muted">{team.status}</span></div>)}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-[#ded4b9] bg-white/70 p-3"><p className="font-mono text-[5px] uppercase text-muted">Próxima conversación</p><p className="mt-2 text-[9px] font-semibold text-[#173b5a]">Validar propuesta de valor</p></div>
          <div className="rounded-lg border border-[#ded4b9] bg-white/70 p-3"><p className="font-mono text-[5px] uppercase text-muted">Evidencia pendiente</p><p className="mt-2 text-[9px] font-semibold text-[#173b5a]">Subir prueba con usuarios</p></div>
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
      <div className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-violet/15 blur-[150px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-magenta">02 / Proyectos</p>
            <h2 className="text-balance mt-5 max-w-[620px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-7xl">Maquetas de ideas que ya se pueden tocar.</h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-[710px] text-lg leading-8 text-white/60">Cada sistema empezó con una fricción concreta y creció mientras aprendía de ella. Estas maquetas reconstruyen la lógica de los productos con información simulada para cuidar cualquier dato sensible.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-5">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible" role="tablist" aria-label="Seleccionar proyecto">
            {portfolioData.projects.map((item, index) => (
              <button key={item.id} type="button" role="tab" aria-selected={activeIndex === index} aria-controls="project-panel" onClick={() => setActiveIndex(index)} className={`group min-w-[210px] rounded-xl border p-4 text-left transition-all lg:w-full ${activeIndex === index ? 'border-fuchsia/45 bg-fuchsia/10' : 'border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05]'}`}>
                <div className="flex items-center justify-between gap-3"><span className={`font-mono text-[9px] uppercase tracking-[0.14em] ${activeIndex === index ? 'text-magenta' : 'text-white/38'}`}>{item.number}</span><ArrowRight className={`h-3.5 w-3.5 transition-transform ${activeIndex === index ? 'translate-x-0 text-magenta' : '-translate-x-1 text-white/20 group-hover:translate-x-0'}`} /></div>
                <p className="mt-5 font-display text-sm font-semibold text-white">{item.short}</p>
                <p className="mt-2 truncate font-mono text-[9px] uppercase text-white/38">{item.type}</p>
              </button>
            ))}
          </div>

          <article id="project-panel" role="tabpanel" className="min-w-0 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-3 sm:p-5 lg:p-7">
            <ProjectMockup visual={project.visual} />
            <div className="grid gap-10 px-2 pb-3 pt-10 md:px-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45"><span className="text-magenta">{project.status}</span><span className="h-1 w-1 rounded-full bg-white/20" /><span>{project.context}</span></div>
                <h3 className="text-balance mt-5 font-display text-3xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-5xl">{project.title}</h3>
                <p className="mt-6 max-w-[680px] text-base leading-8 text-white/60">{project.thesis}</p>
                <div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/48">{tag}</span>)}</div>
              </div>
              <div className="space-y-6 border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                {[
                  ['Fricción', project.problem],
                  ['Lo que construí', project.build],
                  ['Capacidad que deja', project.value],
                ].map(([label, copy], index) => (
                  <div key={label} className={index < 2 ? 'border-b border-white/10 pb-6' : ''}><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-cyan">{label}</p><p className="mt-3 text-sm leading-7 text-white/58">{copy}</p></div>
                ))}
              </div>
            </div>
            <div className="mx-2 mt-4 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:mx-4 md:grid-cols-2 lg:grid-cols-4">
              {project.facts.map((fact) => <div key={fact} className="bg-night px-5 py-4"><p className="font-mono text-[9px] uppercase tracking-wider text-white/45">{fact}</p></div>)}
            </div>
            <div className="mx-2 mt-6 flex flex-col gap-2 border-t border-white/10 pb-2 pt-5 text-sm leading-6 text-white/58 md:mx-4 sm:flex-row sm:items-start"><span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-magenta sm:w-24">Mi rol</span><span>{project.role}</span></div>
          </article>
        </div>
      </div>
    </section>
  );
}
