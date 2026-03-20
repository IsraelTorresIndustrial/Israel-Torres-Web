/* ============================================================
   ISRAEL TORRES — script.js Definitivo
   ============================================================
   01. Año en footer
   02. Scroll progress bar
   03. Nav: scroll + burger + active links
   04. Índice lateral
   05. Reveal al scroll
   06. Mapa conceptual SVG animado
   07. Contadores animados
   08. Timeline: acordeón expandible
   09. Skills: tabs
   10. Flip cards: toggle táctil
   11. Google Analytics tracking completo:
       · Rebote rápido (< 10 seg)
       · Tiempo de engagement (30s / 1min / 2min / 5min)
       · Scroll depth (25 / 50 / 75 / 90 / 100%)
       · Secciones visitadas (una vez por sesión)
       · Click en email
       · Click en LinkedIn
       · "Ver detalle" timeline (qué cargo)
       · Click en tabs de skills (qué categoría)
       · Clicks en nav
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── HELPER GA4 ───────────────────────────── */
  function track(eventName, params) {
    if (typeof gtag === 'function') gtag('event', eventName, params || {});
  }

  /* ── 01. AÑO ──────────────────────────────── */
  const yrEl = document.getElementById('yr');
  if (yrEl) yrEl.textContent = new Date().getFullYear();

  /* ── 02. SCROLL PROGRESS ──────────────────── */
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ── 03. NAV ──────────────────────────────── */
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('nav-burger');
  const menu   = document.getElementById('nav-links');

  if (nav) {
    const check = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Menú');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
    }));
    document.addEventListener('click', e => {
      if (!burger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        burger.classList.remove('open');
      }
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  const navObs   = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { threshold: 0.35 });
  sections.forEach(s => navObs.observe(s));

  /* ── 04. ÍNDICE LATERAL ───────────────────── */
  const sideIndex = document.getElementById('side-index');
  const siDots    = document.querySelectorAll('.si-dot');
  const heroEl    = document.getElementById('inicio');

  if (sideIndex && heroEl) {
    new IntersectionObserver(entries => {
      sideIndex.classList.toggle('visible', !entries[0].isIntersecting);
    }, { threshold: 0.1 }).observe(heroEl);

    const siObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          siDots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === '#' + e.target.id));
      });
    }, { threshold: 0.4 });
    sections.forEach(s => siObs.observe(s));
  }

  /* ── 05. REVEAL ───────────────────────────── */
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -28px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

  /* ── 06. MAPA CONCEPTUAL SVG ──────────────── */
  const mapEl = document.querySelector('.concept-map');
  if (mapEl) {
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) mapEl.classList.add('animated');
    }, { threshold: 0.3 }).observe(mapEl);
  }

  /* ── 07. CONTADORES ───────────────────────── */
  function animCounter(el, target) {
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1600, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(step); else el.textContent = target;
    };
    requestAnimationFrame(step);
  }
  const cntObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animCounter(e.target, parseInt(e.target.dataset.target, 10));
        cntObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.counter').forEach(el => cntObs.observe(el));

  /* ── 08. TIMELINE ACORDEÓN ────────────────── */
  document.querySelectorAll('.tl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const detail = document.getElementById(btn.getAttribute('aria-controls'));
      if (!detail) return;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Cerrar todos
      document.querySelectorAll('.tl-toggle').forEach(b => {
        if (b !== btn) {
          b.setAttribute('aria-expanded', 'false');
          b.textContent = 'ver detalle ↓';
          const d = document.getElementById(b.getAttribute('aria-controls'));
          if (d) d.hidden = true;
        }
      });

      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'ver detalle ↓';
        detail.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'ocultar ↑';
        detail.hidden = false;
        setTimeout(() => btn.closest('.tl-item')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
        track('timeline_detail_open', { event_category: 'experiencia', event_label: btn.dataset.job || btn.getAttribute('aria-controls') });
      }
    });
  });

  /* ── 09. SKILLS TABS ──────────────────────── */
  const tabs   = document.querySelectorAll('.stab');
  const panels = document.querySelectorAll('.skills__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      panels.forEach(p => {
        const match = p.id === 'tab-' + target;
        p.hidden = !match;
        p.classList.toggle('active', match);
        if (match) p.querySelectorAll('.reveal:not(.in)').forEach((el, i) => setTimeout(() => el.classList.add('in'), i * 60 + 50));
      });
      track('skills_tab_click', { event_category: 'skills', event_label: tab.textContent.trim() });
    });
  });

  // Init reveals del panel activo
  setTimeout(() => {
    document.querySelectorAll('.skills__panel.active .reveal').forEach((el, i) => setTimeout(() => el.classList.add('in'), i * 80));
  }, 300);

  /* ── 10. FLIP CARDS TÁCTIL ────────────────── */
  document.querySelectorAll('.flip').forEach(card => {
    card.addEventListener('click', () => {
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches)
        card.classList.toggle('flipped');
    });
  });

  /* ══════════════════════════════════════════
     11. GOOGLE ANALYTICS — TRACKING COMPLETO
  ══════════════════════════════════════════ */

  // A. REBOTE RÁPIDO — salir antes de 10 segundos
  let engaged = false;
  setTimeout(() => { engaged = true; }, 10000);
  window.addEventListener('beforeunload', () => {
    if (!engaged) track('quick_bounce', { event_category: 'engagement', event_label: 'menos de 10 segundos' });
  });

  // B. HITOS DE TIEMPO
  [
    { ms: 30000,  label: '30 segundos' },
    { ms: 60000,  label: '1 minuto'    },
    { ms: 120000, label: '2 minutos'   },
    { ms: 300000, label: '5 minutos'   },
  ].forEach(({ ms, label }) => {
    setTimeout(() => track('time_engaged', { event_category: 'engagement', event_label: label, value: ms / 1000 }), ms);
  });

  // C. SCROLL DEPTH — 25 / 50 / 75 / 90 / 100%
  const depths  = [25, 50, 75, 90, 100];
  const reached = new Set();
  window.addEventListener('scroll', () => {
    const pct = Math.floor((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
    depths.forEach(d => {
      if (pct >= d && !reached.has(d)) {
        reached.add(d);
        track('scroll_depth', { event_category: 'engagement', event_label: d + '%', value: d });
      }
    });
  }, { passive: true });

  // D. SECCIONES VISITADAS — una vez por sesión
  const secLabels = {
    inicio: 'Hero', sobre: 'Sobre mí', proceso: 'Cómo pienso',
    metricas: 'Métricas', experiencia: 'Experiencia', skills: 'Skills',
    masalla: 'Detrás de la pizarra', ideas: 'Notas del sistema', contacto: 'Contacto'
  };
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        track('section_view', { event_category: 'navegacion', event_label: secLabels[e.target.id] || e.target.id });
        secObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => secObs.observe(s));

  // E. CLICK EN EMAIL
  const emailEl = document.getElementById('link-email');
  if (emailEl) emailEl.addEventListener('click', () => track('click_email', { event_category: 'contacto', event_label: 'Email' }));

  // F. CLICK EN LINKEDIN
  const liEl = document.getElementById('link-linkedin');
  if (liEl) liEl.addEventListener('click', () => track('click_linkedin', { event_category: 'contacto', event_label: 'LinkedIn' }));

  // G. CLICKS EN NAV
  navLinks.forEach(a => {
    a.addEventListener('click', () => track('nav_click', { event_category: 'navegacion', event_label: a.textContent.trim() }));
  });

}); // fin DOMContentLoaded
