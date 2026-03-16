/* ============================================================
   ISRAEL TORRES — script.js Definitivo
   Módulos:
   1. Año footer
   2. Scroll progress bar
   3. Nav: scroll effect + active links + burger
   4. Índice lateral
   5. Reveal al scroll
   6. Mapa conceptual SVG: animar líneas + nodos
   7. Contadores animados
   8. Timeline: acordeón expandible
   9. Skills: tabs
   10. Flip cards: touch toggle
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────
  // 1. AÑO EN FOOTER
  // ─────────────────────────────────────────
  const yrEl = document.getElementById('yr');
  if (yrEl) yrEl.textContent = new Date().getFullYear();


  // ─────────────────────────────────────────
  // 2. SCROLL PROGRESS BAR
  // ─────────────────────────────────────────
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = max > 0 ? (window.scrollY / max * 100) + '%' : '0%';
    }, { passive: true });
  }


  // ─────────────────────────────────────────
  // 3. NAV
  // ─────────────────────────────────────────
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('nav-burger');
  const menu   = document.getElementById('nav-links');

  // Scroll effect
  if (nav) {
    const checkScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // Burger
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

  // Active nav links
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__links a');
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => secObs.observe(s));


  // ─────────────────────────────────────────
  // 4. ÍNDICE LATERAL
  // ─────────────────────────────────────────
  const sideIndex = document.getElementById('side-index');
  const siDots    = document.querySelectorAll('.si-dot');

  if (sideIndex) {
    // Mostrar después de pasar el hero
    const heroEl = document.getElementById('inicio');
    const showObs = new IntersectionObserver(entries => {
      sideIndex.classList.toggle('visible', !entries[0].isIntersecting);
    }, { threshold: 0.1 });
    if (heroEl) showObs.observe(heroEl);

    // Active dot
    const siObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          siDots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === `#${id}`));
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => siObs.observe(s));
  }


  // ─────────────────────────────────────────
  // 5. REVEAL AL SCROLL
  // ─────────────────────────────────────────
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -28px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));


  // ─────────────────────────────────────────
  // 6. MAPA CONCEPTUAL SVG
  //    Anima líneas y nodos cuando entra en viewport
  // ─────────────────────────────────────────
  const mapEl = document.querySelector('.concept-map');
  if (mapEl) {
    const mapObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        mapEl.classList.add('animated');
        mapObs.unobserve(mapEl);
      }
    }, { threshold: 0.3 });
    mapObs.observe(mapEl);
  }


  // ─────────────────────────────────────────
  // 7. CONTADORES ANIMADOS
  // ─────────────────────────────────────────
  function animCounter(el, target, duration = 1600) {
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const prog  = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      el.textContent = Math.floor(eased * target);
      if (prog < 1) requestAnimationFrame(step);
      else el.textContent = target;
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


  // ─────────────────────────────────────────
  // 8. TIMELINE ACORDEÓN
  // ─────────────────────────────────────────
  document.querySelectorAll('.tl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const detail   = document.getElementById(targetId);
      if (!detail) return;

      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Cerrar todos los demás
      document.querySelectorAll('.tl-toggle').forEach(b => {
        if (b !== btn) {
          b.setAttribute('aria-expanded', 'false');
          b.textContent = 'ver detalle ↓';
          const otherId  = b.getAttribute('aria-controls');
          const otherDet = document.getElementById(otherId);
          if (otherDet) otherDet.hidden = true;
        }
      });

      // Toggle el actual
      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'ver detalle ↓';
        detail.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'ocultar ↑';
        detail.hidden = false;
        // Scroll suave a la tarjeta
        setTimeout(() => {
          btn.closest('.tl-item')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  });


  // ─────────────────────────────────────────
  // 9. SKILLS — TABS
  // ─────────────────────────────────────────
  const tabs   = document.querySelectorAll('.stab');
  const panels = document.querySelectorAll('.skills__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach(p => {
        const isTarget = p.id === `tab-${target}`;
        p.hidden = !isTarget;
        p.classList.toggle('active', isTarget);
        // Re-trigger reveals del panel al mostrarse
        if (isTarget) {
          p.querySelectorAll('.reveal:not(.in)').forEach(el => {
            setTimeout(() => el.classList.add('in'), 50);
          });
        }
      });
    });
  });


  // ─────────────────────────────────────────
  // 10. FLIP CARDS — toggle táctil
  // ─────────────────────────────────────────
  document.querySelectorAll('.flip').forEach(card => {
    // Solo en dispositivos táctiles (sin hover real)
    card.addEventListener('click', () => {
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        card.classList.toggle('flipped');
      }
    });
  });


  // ─────────────────────────────────────────
  // 11. INICIALIZAR REVEALS DEL PANEL ACTIVO
  // ─────────────────────────────────────────
  // El primer panel (BI) ya está visible, forzar sus reveals
  const firstPanel = document.querySelector('.skills__panel.active');
  if (firstPanel) {
    setTimeout(() => {
      firstPanel.querySelectorAll('.reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), i * 80);
      });
    }, 300);
  }

}); // fin DOMContentLoaded
