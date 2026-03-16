/* ============================================================
   ISRAEL TORRES — script.js
   Módulos: cursor · nav · burger · counters · skill bars ·
            scroll reveals · active nav
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── AÑO ──────────────────────────────────────────────────────
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();


  // ── CURSOR PERSONALIZADO ──────────────────────────────────────
  const cursor = document.getElementById('cursor');
  if (cursor && window.matchMedia('(hover:hover)').matches) {
    let cx = 0, cy = 0;
    document.addEventListener('mousemove', e => {
      cx = e.clientX; cy = e.clientY;
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
    });
    // Hover en interactivos
    document.querySelectorAll('a,button,.sobre__card,.titem,.interest,.rnota,.clink,.chip')
      .forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.width  = '20px';
          cursor.style.height = '20px';
          cursor.style.opacity = '.6';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.width  = '10px';
          cursor.style.height = '10px';
          cursor.style.opacity = '1';
        });
      });
    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
    document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
  }


  // ── NAVBAR SCROLL ────────────────────────────────────────────
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  // ── MENÚ BURGER ──────────────────────────────────────────────
  const burger = document.getElementById('nav-burger');
  const navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Menú');
    });
    // Cerrar al hacer click en enlace
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
      });
    });
    // Cerrar al hacer click fuera
    document.addEventListener('click', e => {
      if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
      }
    });
  }


  // ── REVEAL EN SCROLL ─────────────────────────────────────────
  // Agrega clase .reveal a elementos que queremos animar al entrar en viewport
  const revealSelectors = [
    '.section__label',
    '.section__title',
    '.sobre__card',
    '.pstep',
    '.titem',
    '.skills__group',
    '.metrica',
    '.interest',
    '.rnota',
    '.clink',
    '.horizonte',
    '.masalla__lead',
    '.masalla__quote',
    '.sobre__lead',
  ];

  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      // Delay en cascada para grupos de tarjetas
      const delayClass = i % 4;
      if (delayClass === 1) el.classList.add('reveal-d1');
      if (delayClass === 2) el.classList.add('reveal-d2');
      if (delayClass === 3) el.classList.add('reveal-d3');
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  // ── CONTADORES ANIMADOS ───────────────────────────────────────
  function animateCounter(el, target, duration = 1800) {
    let start = null;
    const startVal = 0;

    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.target, 10);
        animateCounter(e.target, target);
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));


  // ── BARRAS DE HABILIDADES ────────────────────────────────────
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const pct = e.target.dataset.pct;
        const fill = e.target.querySelector('.skill-bar__fill');
        if (fill) {
          // Pequeño delay para que se vea la animación de entrada primero
          setTimeout(() => {
            fill.style.width = pct + '%';
          }, 200);
        }
        skillObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-bar').forEach(el => skillObserver.observe(el));


  // ── NAVEGACIÓN ACTIVA POR SECCIÓN ────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav__links a');

  // Inyectar estilos para link activo
  const styleActive = document.createElement('style');
  styleActive.textContent = `
    .nav__links a.active { color: var(--tx) !important; }
    .nav__links a.active::after { transform: scaleX(1) !important; }
  `;
  document.head.appendChild(styleActive);

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.getAttribute('id');
        navAs.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => sectionObserver.observe(s));


  // ── HOVER EN NODOS DEL DIAGRAMA ───────────────────────────────
  // Ya gestionado en CSS, pero podemos pausar la rotación en hover
  const diagram = document.querySelector('.diagram');
  if (diagram) {
    diagram.addEventListener('mouseenter', () => {
      document.querySelectorAll('.diagram__ring').forEach(r => {
        r.style.animationPlayState = 'paused';
      });
    });
    diagram.addEventListener('mouseleave', () => {
      document.querySelectorAll('.diagram__ring').forEach(r => {
        r.style.animationPlayState = 'running';
      });
    });
  }

}); // fin DOMContentLoaded
