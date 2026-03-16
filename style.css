/* ============================================================
   ISRAEL TORRES — BLUEPRINT TÉCNICO
   Concepto: blueprint de ingeniería · azul eléctrico · ámbar
   Fuentes: Syne · Figtree · JetBrains Mono
   ============================================================ */

/* ── VARIABLES ─────────────────────────────────────────────── */
:root {
  /* Paleta oscura tipo blueprint */
  --bg:           #080b12;
  --bg-2:         #0c1018;
  --bg-3:         #101520;
  --surface:      #151c28;
  --surface-2:    #1a2235;
  --border:       rgba(99,140,210,0.12);
  --border-h:     rgba(59,130,246,0.45);

  /* Texto */
  --tx:           #dde5f4;
  --tx-2:         #7d8faa;
  --tx-3:         #3a4a62;

  /* Acentos */
  --blue:         #3b82f6;
  --blue-d:       #2563eb;
  --blue-soft:    rgba(59,130,246,0.10);
  --blue-glow:    rgba(59,130,246,0.22);
  --amber:        #d4973a;
  --amber-soft:   rgba(212,151,58,0.10);

  /* Tipografía */
  --f-display:    'Syne', system-ui, sans-serif;
  --f-body:       'Figtree', system-ui, sans-serif;
  --f-mono:       'JetBrains Mono', monospace;

  /* Layout */
  --max:          1140px;
  --r:            10px;
  --section-py:   clamp(80px,11vw,130px);

  /* Ease */
  --ease:         cubic-bezier(0.22,0.68,0,1.2);
  --ease-out:     cubic-bezier(0.25,0.46,0.45,0.94);
  --dur:          0.28s;
}

/* ── RESET ──────────────────────────────────────────────────── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:16px}
body{
  background:var(--bg);
  color:var(--tx);
  font-family:var(--f-body);
  font-weight:400;
  line-height:1.7;
  overflow-x:hidden;
  cursor:none;
}
img{display:block;max-width:100%}
a{text-decoration:none;color:inherit}
ul{list-style:none}

/* Scrollbar */
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--blue);border-radius:2px}

/* Selección */
::selection{background:var(--blue);color:#fff}

/* ── CURSOR ─────────────────────────────────────────────────── */
.cursor{
  position:fixed;
  width:10px;height:10px;
  border-radius:50%;
  background:var(--blue);
  pointer-events:none;
  z-index:9999;
  transform:translate(-50%,-50%);
  mix-blend-mode:screen;
  transition:width .18s,height .18s,opacity .18s;
}
@media(hover:none){.cursor{display:none}body{cursor:auto}}

/* ── TIPOGRAFÍA UTIL ────────────────────────────────────────── */
.mono{font-family:var(--f-mono);font-size:.78rem;letter-spacing:.03em}
em{font-style:italic;color:var(--amber)}

/* ── CONTENEDOR ─────────────────────────────────────────────── */
.container{
  max-width:var(--max);
  margin:0 auto;
  padding:0 clamp(20px,5vw,56px);
}

/* ── SECCIÓN BASE ────────────────────────────────────────────── */
.section{padding:var(--section-py) 0;position:relative}

.section__label{
  display:block;
  color:var(--blue);
  margin-bottom:14px;
  opacity:.75;
}

.section__title{
  font-family:var(--f-display);
  font-size:clamp(2rem,4.5vw,3.6rem);
  font-weight:800;
  line-height:1.08;
  letter-spacing:-.02em;
  margin-bottom:clamp(36px,5vw,56px);
}

/* ── BOTONES ─────────────────────────────────────────────────── */
.btn{
  display:inline-block;
  padding:12px 26px;
  border-radius:6px;
  font-family:var(--f-mono);
  font-size:.82rem;
  letter-spacing:.02em;
  transition:all var(--dur) var(--ease-out);
}
.btn--primary{background:var(--blue);color:#fff}
.btn--primary:hover{background:#1d4ed8;transform:translateY(-2px);box-shadow:0 8px 22px var(--blue-glow)}
.btn--ghost{border:1px solid var(--border-h);color:var(--tx-2)}
.btn--ghost:hover{border-color:var(--blue);color:var(--tx);transform:translateY(-2px)}

/* ── TAGS ────────────────────────────────────────────────────── */
.tag{
  display:inline-block;
  padding:4px 11px;
  border:1px solid var(--border);
  border-radius:20px;
  font-family:var(--f-mono);
  font-size:.68rem;
  color:var(--tx-2);
  letter-spacing:.04em;
  transition:all var(--dur);
}
.tag:hover{border-color:var(--blue);color:var(--blue)}
.tag--sm{padding:3px 9px;font-size:.65rem}

/* ── ANIMACIONES SCROLL ──────────────────────────────────────── */
.reveal{
  opacity:0;
  transform:translateY(22px);
  transition:opacity .65s var(--ease-out),transform .65s var(--ease-out);
}
.reveal.in{opacity:1;transform:translateY(0)}
.reveal-d1{transition-delay:.08s}
.reveal-d2{transition-delay:.16s}
.reveal-d3{transition-delay:.24s}
.reveal-d4{transition-delay:.32s}

/* ══════════════════════════════════════════════════════════════
   NAVEGACIÓN
══════════════════════════════════════════════════════════════ */
.nav{
  position:fixed;
  top:0;left:0;right:0;
  z-index:100;
  padding:16px 0;
  transition:background .3s,padding .3s,border-color .3s;
}
.nav.scrolled{
  background:rgba(8,11,18,.9);
  backdrop-filter:blur(14px);
  padding:10px 0;
  border-bottom:1px solid var(--border);
}
.nav__inner{
  max-width:var(--max);
  margin:0 auto;
  padding:0 clamp(20px,5vw,56px);
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.nav__logo{
  font-family:var(--f-display);
  font-size:1.25rem;
  font-weight:800;
  color:var(--tx);
  letter-spacing:-.03em;
}
.nav__logo span{color:var(--blue)}
.nav__links{
  display:flex;
  align-items:center;
  gap:28px;
}
.nav__links a{
  font-family:var(--f-mono);
  font-size:.75rem;
  color:var(--tx-2);
  letter-spacing:.04em;
  position:relative;
  transition:color var(--dur);
}
.nav__links a::after{
  content:'';
  position:absolute;
  bottom:-3px;left:0;right:0;
  height:1px;
  background:var(--blue);
  transform:scaleX(0);
  transition:transform var(--dur) var(--ease-out);
}
.nav__links a:hover{color:var(--tx)}
.nav__links a:hover::after{transform:scaleX(1)}
.nav__cta{
  color:var(--blue)!important;
  border:1px solid rgba(59,130,246,.35);
  padding:6px 14px;
  border-radius:4px;
}
.nav__cta:hover{background:var(--blue-soft)}
.nav__cta::after{display:none!important}

/* Burger */
.nav__burger{
  display:none;
  flex-direction:column;
  gap:5px;
  background:none;
  border:none;
  cursor:pointer;
  padding:4px;
}
.nav__burger span{display:block;width:22px;height:1.5px;background:var(--tx);transition:all var(--dur) var(--ease-out)}

@media(max-width:860px){
  .nav__burger{display:flex}
  .nav__links{
    position:fixed;
    top:0;right:-100%;
    width:240px;height:100vh;
    background:var(--bg-2);
    border-left:1px solid var(--border);
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    gap:24px;
    padding:40px;
    transition:right .35s var(--ease-out);
    z-index:99;
  }
  .nav__links.open{right:0}
  .nav__links a{font-size:.88rem}
  .nav__burger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
  .nav__burger.open span:nth-child(2){opacity:0}
  .nav__burger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
}

/* ══════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════ */
.hero{
  min-height:100vh;
  display:grid;
  grid-template-columns:1fr auto;
  align-items:center;
  gap:40px;
  max-width:var(--max);
  margin:0 auto;
  padding:120px clamp(20px,5vw,56px) 80px;
  position:relative;
  overflow:hidden;
}

/* Blueprint grid de fondo */
.hero__grid{
  position:fixed;
  inset:0;
  background-image:
    linear-gradient(var(--tx-3) 1px,transparent 1px),
    linear-gradient(90deg,var(--tx-3) 1px,transparent 1px);
  background-size:52px 52px;
  opacity:.18;
  pointer-events:none;
  z-index:0;
}

/* Líneas decorativas flotantes */
.hero__lines{position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.hline{
  position:absolute;
  height:1px;
  background:linear-gradient(90deg,transparent,var(--blue),transparent);
  opacity:.18;
  animation:lineScan 8s linear infinite;
}
.hline--1{width:60%;top:28%;animation-delay:0s}
.hline--2{width:35%;top:55%;animation-delay:3s}
.hline--3{width:80%;top:75%;animation-delay:5.5s}

@keyframes lineScan{
  0%{transform:translateX(-100%)}
  100%{transform:translateX(200%)}
}

.hero__content{
  position:relative;
  z-index:1;
  animation:fadeUp .9s var(--ease-out) both;
}

.hero__badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  border:1px solid var(--border);
  border-radius:20px;
  padding:5px 14px;
  color:var(--tx-2);
  margin-bottom:28px;
}
.badge-dot{
  width:6px;height:6px;
  border-radius:50%;
  background:var(--blue);
  animation:pulseDot 2s ease-in-out infinite;
}
@keyframes pulseDot{0%,100%{opacity:.4}50%{opacity:1}}

.hero__name{
  font-family:var(--f-display);
  font-weight:800;
  line-height:.95;
  letter-spacing:-.03em;
  margin-bottom:24px;
}
.hero__name-first{
  display:block;
  font-size:clamp(3.8rem,9vw,7.5rem);
  color:var(--tx);
}
.hero__name-last{
  display:block;
  font-size:clamp(3.8rem,9vw,7.5rem);
  color:transparent;
  -webkit-text-stroke:1.5px var(--tx-2);
}

.hero__tagline{
  font-family:var(--f-display);
  font-size:clamp(1.1rem,2vw,1.5rem);
  color:var(--amber);
  font-style:italic;
  font-weight:400;
  margin-bottom:20px;
  line-height:1.35;
}
.hero__tagline em{color:var(--tx-2);font-style:normal}

.hero__desc{
  color:var(--tx-2);
  max-width:480px;
  margin-bottom:36px;
  font-size:.95rem;
  line-height:1.8;
}

.hero__actions{display:flex;gap:14px;flex-wrap:wrap}

/* Diagrama orbital CSS */
.hero__diagram{
  position:relative;
  z-index:1;
  width:360px;height:360px;
  flex-shrink:0;
}

.diagram{
  position:relative;
  width:100%;height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
}

.diagram__ring{
  position:absolute;
  border-radius:50%;
  border:1px solid var(--border);
  animation:rotateCW linear infinite;
}
.diagram__ring--outer{
  width:340px;height:340px;
  border-color:rgba(59,130,246,.10);
  animation-duration:40s;
}
.diagram__ring--mid{
  width:230px;height:230px;
  border-color:rgba(59,130,246,.16);
  animation-duration:28s;
  animation-direction:reverse;
}
.diagram__ring--inner{
  width:128px;height:128px;
  border-color:rgba(59,130,246,.25);
  animation-duration:18s;
}

@keyframes rotateCW{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}

.diagram__core{
  position:absolute;
  width:64px;height:64px;
  background:var(--surface-2);
  border:1px solid var(--border-h);
  border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  z-index:2;
  box-shadow:0 0 32px var(--blue-glow);
}
.diagram__core span{color:var(--blue);font-size:.85rem}

/* Nodos orbitales */
.diagram__node{
  position:absolute;
  transform-origin:center;
}
.diagram__node span{
  display:block;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:4px;
  padding:3px 8px;
  font-family:var(--f-mono);
  font-size:.65rem;
  color:var(--tx-2);
  white-space:nowrap;
  transition:border-color var(--dur),color var(--dur);
}
.diagram__node:hover span{border-color:var(--blue);color:var(--blue)}

/* Posiciones de los nodos (radio ~145px del centro) */
.diagram__node--1{top:10px;left:50%;transform:translateX(-50%)}
.diagram__node--2{top:50%;right:6px;transform:translateY(-50%)}
.diagram__node--3{bottom:10px;left:50%;transform:translateX(-50%)}
.diagram__node--4{top:50%;left:6px;transform:translateY(-50%)}
.diagram__node--5{top:20%;right:16%;transform:translateX(50%)}
.diagram__node--6{bottom:20%;left:16%;transform:translateX(-50%)}

.hero__scroll{
  position:absolute;
  bottom:36px;left:50%;
  transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:8px;
  color:var(--tx-3);
  z-index:1;
  animation:fadeIn 1.2s 1s both;
}
.hero__scroll-line{
  width:1px;height:44px;
  background:linear-gradient(to bottom,var(--tx-3),transparent);
  animation:scrollPulse 2.2s ease-in-out infinite;
}
@keyframes scrollPulse{0%,100%{opacity:.25}50%{opacity:.8}}

@media(max-width:900px){
  .hero{grid-template-columns:1fr;text-align:center;padding-top:110px;gap:48px}
  .hero__diagram{width:260px;height:260px;margin:0 auto}
  .diagram__ring--outer{width:248px;height:248px}
  .diagram__ring--mid{width:164px;height:164px}
  .diagram__ring--inner{width:96px;height:96px}
  .hero__desc{margin:0 auto 36px}
  .hero__actions{justify-content:center}
  .hero__scroll{display:none}
}

/* ══════════════════════════════════════════════════════════════
   SOBRE MÍ
══════════════════════════════════════════════════════════════ */
.sobre{background:var(--bg-2);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}

.sobre__grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
  align-items:start;
}

.sobre__left p{
  color:var(--tx-2);
  margin-bottom:16px;
  line-height:1.85;
  font-size:.97rem;
}
.sobre__lead{
  font-size:1.05rem!important;
  color:var(--tx)!important;
  margin-bottom:20px!important;
}

.sobre__right{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}
.sobre__card{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--r);
  padding:20px;
  transition:border-color var(--dur),transform var(--dur);
}
.sobre__card:hover{border-color:var(--border-h);transform:translateY(-3px)}
.sobre__card-icon{display:block;color:var(--blue);font-size:1.2rem;margin-bottom:10px}
.sobre__card h3{font-size:.92rem;font-weight:600;color:var(--tx);margin-bottom:7px;font-family:var(--f-display)}
.sobre__card p{font-size:.8rem;color:var(--tx-2);line-height:1.6}

@media(max-width:768px){
  .sobre__grid{grid-template-columns:1fr;gap:40px}
  .sobre__right{grid-template-columns:1fr}
}

/* ══════════════════════════════════════════════════════════════
   MÉTRICAS
══════════════════════════════════════════════════════════════ */
.metricas{
  background:var(--blue-d);
  background:linear-gradient(135deg,#1a2235 0%,#0c1830 50%,#0d1a2e 100%);
  border-top:1px solid rgba(59,130,246,.18);
  border-bottom:1px solid rgba(59,130,246,.18);
  padding:clamp(56px,8vw,96px) 0;
}

.metricas__grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:2px;
}

.metrica{
  text-align:center;
  padding:clamp(24px,4vw,40px) 20px;
  border-right:1px solid rgba(59,130,246,.14);
  transition:background var(--dur);
}
.metrica:last-child{border-right:none}
.metrica:hover{background:rgba(59,130,246,.06)}

.metrica__num{
  display:flex;align-items:flex-start;justify-content:center;
  gap:2px;
  margin-bottom:12px;
}
.counter{
  font-family:var(--f-display);
  font-size:clamp(2.8rem,5vw,4.5rem);
  font-weight:800;
  color:var(--blue);
  line-height:1;
  letter-spacing:-.04em;
}
.metrica__plus{
  font-family:var(--f-display);
  font-size:clamp(1.5rem,2.5vw,2.2rem);
  font-weight:800;
  color:var(--blue);
  margin-top:6px;
}
.metrica__label{
  font-size:.82rem;
  color:var(--tx-2);
  line-height:1.5;
}
.metrica__label .mono{display:block;color:var(--tx-3);margin-top:3px;font-size:.68rem}

@media(max-width:640px){
  .metricas__grid{grid-template-columns:1fr 1fr;gap:0}
  .metrica{border-right:none;border-bottom:1px solid rgba(59,130,246,.14)}
  .metrica:nth-child(odd){border-right:1px solid rgba(59,130,246,.14)}
  .metrica:last-child,.metrica:nth-last-child(2){border-bottom:none}
}

/* ══════════════════════════════════════════════════════════════
   CÓMO PIENSO
══════════════════════════════════════════════════════════════ */
.proceso{background:var(--bg)}

.proceso__intro{
  max-width:540px;
  color:var(--tx-2);
  margin-bottom:52px;
  line-height:1.8;
}

.proceso__steps{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:0;
}

/* Línea vertical del proceso */
.proceso__steps::before{
  content:'';
  position:absolute;
  left:22px;top:6px;bottom:6px;
  width:1px;
  background:linear-gradient(to bottom,var(--blue),transparent);
  opacity:.25;
}

.pstep{
  display:grid;
  grid-template-columns:44px 2px 1fr;
  gap:20px;
  align-items:start;
  padding:20px 0;
  border-bottom:1px solid var(--border);
  transition:padding-left var(--dur) var(--ease-out);
}
.pstep:last-child{border-bottom:none}
.pstep:hover{padding-left:10px}
.pstep:hover .pstep__bar{background:var(--blue);opacity:.6}
.pstep:hover .pstep__num{color:var(--blue)}

.pstep__num{
  color:var(--tx-3);
  padding-top:4px;
  font-size:.72rem;
  transition:color var(--dur);
}
.pstep__bar{
  width:2px;
  height:100%;
  min-height:20px;
  background:var(--border);
  border-radius:1px;
  transition:all var(--dur);
}
.pstep__body h3{font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:7px;font-family:var(--f-display)}
.pstep__body p{color:var(--tx-2);font-size:.88rem;line-height:1.75;max-width:580px}

/* ══════════════════════════════════════════════════════════════
   EXPERIENCIA (corazón)
══════════════════════════════════════════════════════════════ */
.experiencia{
  background:var(--bg-2);
  border-top:1px solid var(--border);
}

.timeline{
  position:relative;
  padding-left:0;
}

/* Línea central del timeline */
.timeline::before{
  content:'';
  position:absolute;
  left:16px;top:8px;bottom:8px;
  width:1px;
  background:linear-gradient(to bottom,var(--blue) 0%,rgba(59,130,246,.15) 100%);
}

.titem{
  display:grid;
  grid-template-columns:200px 40px 1fr;
  gap:24px;
  align-items:start;
  padding:32px 0;
  border-bottom:1px solid var(--border);
  transition:all var(--dur) var(--ease-out);
}
.titem:last-child{border-bottom:none}
.titem:hover .titem__dot{background:var(--blue);box-shadow:0 0 14px var(--blue-glow)}
.titem:hover .titem__content{transform:translateX(4px)}

.titem__meta{
  display:flex;
  flex-direction:column;
  gap:8px;
  padding-top:4px;
  text-align:right;
}
.titem__date{color:var(--tx-3);font-size:.68rem;line-height:1.4}
.titem__type{align-self:flex-end}

.titem__dot{
  width:16px;height:16px;
  border-radius:50%;
  background:var(--surface-2);
  border:2px solid var(--border-h);
  margin-top:4px;
  justify-self:center;
  transition:all .3s var(--ease-out);
  position:relative;
  z-index:1;
}

/* Tarjeta destacada: anillo exterior */
.titem--featured .titem__dot{
  background:var(--blue);
  border-color:var(--blue);
  box-shadow:0 0 0 4px var(--blue-soft);
}

.titem__content{transition:transform var(--dur) var(--ease-out)}

.titem__header{
  display:flex;
  align-items:baseline;
  gap:12px;
  flex-wrap:wrap;
  margin-bottom:10px;
}
.titem__header h3{
  font-family:var(--f-display);
  font-size:1.1rem;
  font-weight:700;
  color:var(--tx);
}
.titem__company{
  font-family:var(--f-mono);
  font-size:.72rem;
  color:var(--blue);
  letter-spacing:.04em;
}

.titem__desc{
  color:var(--tx-2);
  font-size:.88rem;
  line-height:1.78;
  margin-bottom:14px;
  max-width:600px;
}

.titem__tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px}

/* Logro clave (solo en featured) */
.titem__achievement{
  background:var(--blue-soft);
  border:1px solid rgba(59,130,246,.2);
  border-radius:8px;
  padding:12px 16px;
  margin-top:4px;
  max-width:520px;
}
.achieve-label{display:block;color:var(--blue);margin-bottom:6px;font-size:.65rem}
.titem__achievement p{font-size:.82rem;color:var(--tx-2);line-height:1.6}

@media(max-width:768px){
  .titem{grid-template-columns:20px 1fr;grid-template-rows:auto auto}
  .titem__meta{
    grid-column:2;
    grid-row:1;
    text-align:left;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;
  }
  .titem__dot{grid-column:1;grid-row:1;margin-top:6px}
  .titem__content{grid-column:2;grid-row:2}
  .timeline::before{left:8px}
}

/* ══════════════════════════════════════════════════════════════
   HABILIDADES
══════════════════════════════════════════════════════════════ */
.habilidades{background:var(--bg)}

.skills__grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:48px 64px;
}

.skills__group-title{
  color:var(--blue);
  margin-bottom:20px;
}

/* Barras de skill */
.skill-bar-wrap{display:flex;flex-direction:column;gap:16px}

.skill-bar{
  display:grid;
  grid-template-columns:1fr auto;
  grid-template-rows:auto 8px;
  gap:6px;
  row-gap:8px;
}
.skill-bar__label{
  font-size:.84rem;
  color:var(--tx);
  grid-column:1;
  grid-row:1;
}
.skill-bar__pct{
  color:var(--tx-3);
  font-size:.68rem;
  grid-column:2;
  grid-row:1;
  align-self:center;
}
.skill-bar__track{
  grid-column:1/-1;
  grid-row:2;
  height:4px;
  background:var(--surface-2);
  border-radius:2px;
  overflow:hidden;
}
.skill-bar__fill{
  height:100%;
  width:0%;
  background:linear-gradient(90deg,var(--blue-d),var(--blue));
  border-radius:2px;
  transition:width 1.2s cubic-bezier(.23,1,.32,1);
}

/* Chips soft skills */
.skills__chips{display:flex;flex-wrap:wrap;gap:8px;padding-top:4px}
.chip{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:20px;
  padding:6px 14px;
  font-size:.78rem;
  color:var(--tx-2);
  transition:all var(--dur);
}
.chip:hover{border-color:var(--blue);color:var(--blue);background:var(--blue-soft)}

@media(max-width:768px){.skills__grid{grid-template-columns:1fr}}

/* ══════════════════════════════════════════════════════════════
   MÁS ALLÁ DEL CV
══════════════════════════════════════════════════════════════ */
.masalla{
  background:var(--bg-2);
  border-top:1px solid var(--border);
}

.masalla__grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
  margin-bottom:48px;
}

.masalla__lead{
  font-size:1.05rem;
  color:var(--tx);
  margin-bottom:20px;
  line-height:1.8;
}
.masalla__text p{
  color:var(--tx-2);
  font-size:.92rem;
  line-height:1.8;
  margin-bottom:16px;
}
.masalla__quote{
  border-left:2px solid var(--amber);
  padding:14px 20px;
  margin-top:24px;
  font-family:var(--f-display);
  font-style:italic;
  font-size:.95rem;
  color:var(--tx-2);
  line-height:1.75;
  background:var(--amber-soft);
  border-radius:0 8px 8px 0;
}

.masalla__interests{
  display:flex;
  flex-direction:column;
  gap:16px;
}
.interest{
  display:flex;align-items:flex-start;gap:16px;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--r);
  padding:16px 18px;
  transition:border-color var(--dur),transform var(--dur);
}
.interest:hover{border-color:var(--border-h);transform:translateX(4px)}
.interest__icon{
  font-size:1.1rem;
  color:var(--blue);
  flex-shrink:0;
  margin-top:2px;
}
.interest strong{display:block;font-size:.9rem;color:var(--tx);margin-bottom:3px}
.interest p{font-size:.8rem;color:var(--tx-2)}

.horizonte{
  background:linear-gradient(135deg,var(--surface) 0%,rgba(21,28,40,.5) 100%);
  border:1px solid var(--border);
  border-left:3px solid var(--blue);
  border-radius:0 var(--r) var(--r) 0;
  padding:28px 32px;
}
.horizonte__label{display:block;color:var(--blue);margin-bottom:12px}
.horizonte p{font-size:.92rem;color:var(--tx-2);line-height:1.8;max-width:560px}

@media(max-width:768px){.masalla__grid{grid-template-columns:1fr;gap:40px}}

/* ══════════════════════════════════════════════════════════════
   REFLEXIONES
══════════════════════════════════════════════════════════════ */
.reflexiones{background:var(--bg)}

.reflexiones__intro{
  color:var(--tx-2);
  max-width:480px;
  margin-bottom:44px;
  font-size:.93rem;
  line-height:1.8;
}

.reflexiones__grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}
.rnota{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--r);
  padding:26px;
  transition:border-color var(--dur),transform var(--dur);
}
.rnota:hover{border-color:var(--border-h);transform:translateY(-3px)}
.rnota--wide{grid-column:span 2}
.rnota__num{display:block;color:var(--blue);font-size:.65rem;margin-bottom:12px;opacity:.6}
.rnota p{
  font-family:var(--f-display);
  font-style:italic;
  font-size:.93rem;
  color:var(--tx-2);
  line-height:1.75;
}

@media(max-width:1024px){
  .reflexiones__grid{grid-template-columns:1fr 1fr}
  .rnota--wide{grid-column:span 2}
}
@media(max-width:600px){
  .reflexiones__grid{grid-template-columns:1fr}
  .rnota--wide{grid-column:span 1}
}

/* ══════════════════════════════════════════════════════════════
   CONTACTO
══════════════════════════════════════════════════════════════ */
.contacto{
  background:var(--bg-2);
  border-top:1px solid var(--border);
}
.contacto__inner{max-width:680px}
.contacto__desc{
  color:var(--tx-2);
  margin-bottom:44px;
  line-height:1.8;
  font-size:.95rem;
  max-width:520px;
}

.contacto__links{display:flex;flex-direction:column;gap:14px}

.clink{
  display:flex;align-items:center;gap:18px;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--r);
  padding:18px 22px;
  transition:border-color var(--dur),transform var(--dur),box-shadow var(--dur);
}
.clink:hover{border-color:var(--border-h);transform:translateX(6px);box-shadow:0 6px 20px rgba(0,0,0,.3)}
.clink__icon{
  width:40px;height:40px;
  background:var(--blue-soft);
  border-radius:8px;
  display:flex;align-items:center;justify-content:center;
  color:var(--blue);
  font-size:.8rem;
  flex-shrink:0;
}
.clink__text strong{display:block;font-size:.88rem;color:var(--tx);margin-bottom:2px}
.clink__text span{color:var(--tx-3);font-size:.68rem}

/* ══════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════ */
.footer{
  padding:28px 0;
  border-top:1px solid var(--border);
  background:var(--bg);
}
.footer__text{color:var(--tx-3);text-align:center}
.footer__sep{margin:0 10px;opacity:.4}

/* ══════════════════════════════════════════════════════════════
   KEYFRAMES GLOBALES
══════════════════════════════════════════════════════════════ */
@keyframes fadeUp{
  from{opacity:0;transform:translateY(26px)}
  to{opacity:1;transform:translateY(0)}
}
@keyframes fadeIn{
  from{opacity:0}
  to{opacity:1}
}
