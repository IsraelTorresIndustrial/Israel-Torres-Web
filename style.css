/* ============================================================
   ISRAEL TORRES v3 — script.js
   Módulos:
   - Año en footer
   - Scroll progress bar
   - Nav scroll effect + active links + burger
   - Reveal en scroll (IntersectionObserver)
   - Contadores animados
   - Timeline horizontal: drag + botones + dots + progress bar
   - Flip cards: toggle en touch
   - Flip bars: animar al voltear
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ══════════════════════════════════════════
  // 1. AÑO EN FOOTER
  // ══════════════════════════════════════════
  const yrEl = document.getElementById('yr');
  if (yrEl) yrEl.textContent = new Date().getFullYear();


  // ══════════════════════════════════════════
  // 2. SCROLL PROGRESS BAR
  // ══════════════════════════════════════════
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }


  // ══════════════════════════════════════════
  // 3. NAV — scroll effect + burger + active
  // ══════════════════════════════════════════
  const nav     = document.getElementById('nav');
  const burger  = document.getElementById('nav-burger');
  const navMenu = document.getElementById('nav-links');

  // Scroll effect
  if (nav) {
    const onNavScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onNavScroll, { passive: true });
    onNavScroll();
  }

  // Burger
  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Menú');
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navMenu.classList.remove('open');
        burger.classList.remove('open');
      });
    });
    document.addEventListener('click', e => {
      if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        burger.classList.remove('open');
      }
    });
  }

  // Active nav link al hacer scroll
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__links a');
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => sectionObs.observe(s));


  // ══════════════════════════════════════════
  // 4. REVEAL AL SCROLL
  // ══════════════════════════════════════════
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  // ══════════════════════════════════════════
  // 5. CONTADORES ANIMADOS
  // ══════════════════════════════════════════
  function animCount(el, target, duration = 1600) {
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3); // ease-out cubic
      el.textContent = Math.floor(ease * target);
      if (prog < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animCount(e.target, parseInt(e.target.dataset.target, 10));
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));


  // ══════════════════════════════════════════
  // 6. TIMELINE HORIZONTAL
  //    - Drag to scroll
  //    - Botones prev/next
  //    - Dots de navegación
  //    - Barra de progreso
  // ══════════════════════════════════════════
  const track      = document.getElementById('tl-track');
  const btnPrev    = document.getElementById('tl-prev');
  const btnNext    = document.getElementById('tl-next');
  const dotsWrap   = document.getElementById('tl-dots');
  const progressEl = document.getElementById('tl-progress-bar');
  const pdotsWrap  = document.getElementById('tl-progress-dots');

  if (track) {
    const cards = Array.from(track.querySelectorAll('.tl-card'));
    const CARD_COUNT = cards.length;

    // ── Crear dots de navegación (bottom)
    if (dotsWrap) {
      cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'tl-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Ir a posición ${i + 1}`);
        dot.addEventListener('click', () => scrollToCard(i));
        dotsWrap.appendChild(dot);
      });
    }

    // ── Crear dots de progreso (top bar)
    if (pdotsWrap) {
      cards.forEach((_, i) => {
        const pd = document.createElement('div');
        pd.className = 'tl-pdot' + (i === 0 ? ' active' : '');
        pd.addEventListener('click', () => scrollToCard(i));
        pdotsWrap.appendChild(pd);
      });
    }

    // ── Índice actual
    let currentIndex = 0;

    function scrollToCard(index) {
      currentIndex = Math.max(0, Math.min(index, CARD_COUNT - 1));
      const card = cards[currentIndex];
      const trackLeft = track.getBoundingClientRect().left;
      const cardLeft  = card.getBoundingClientRect().left;
      const offset    = track.scrollLeft + cardLeft - trackLeft;
      const padding   = parseInt(getComputedStyle(track).paddingLeft) || 0;
      track.scrollTo({ left: offset - padding, behavior: 'smooth' });
      updateUI();
    }

    function updateUI() {
      // Dots bottom
      if (dotsWrap) {
        dotsWrap.querySelectorAll('.tl-dot').forEach((d, i) => {
          d.classList.toggle('active', i === currentIndex);
        });
      }

      // Dots top progress
      if (pdotsWrap) {
        pdotsWrap.querySelectorAll('.tl-pdot').forEach((d, i) => {
          d.classList.toggle('active', i === currentIndex);
          d.classList.toggle('passed', i < currentIndex);
        });
      }

      // Barra de progreso
      if (progressEl) {
        const pct = CARD_COUNT > 1 ? (currentIndex / (CARD_COUNT - 1)) * 100 : 100;
        progressEl.style.setProperty('--bar-pct', pct + '%');
        // Aplicar con pseudo-element via CSS var
        progressEl.setAttribute('data-pct', pct);
        // Forzar via style en el after (no podemos con CSS vars directamente en ::after desde JS,
        // así que usamos una clase o style trick)
        progressEl.style.background = `linear-gradient(90deg, var(--blue) ${pct}%, var(--gray-100) ${pct}%)`;
      }

      // Botones prev/next
      if (btnPrev) btnPrev.disabled = currentIndex === 0;
      if (btnNext) btnNext.disabled = currentIndex === CARD_COUNT - 1;
    }

    // ── Botones
    if (btnPrev) btnPrev.addEventListener('click', () => scrollToCard(currentIndex - 1));
    if (btnNext) btnNext.addEventListener('click', () => scrollToCard(currentIndex + 1));

    // ── Actualizar índice al hacer scroll manual
    let scrollTimer;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const trackLeft  = track.getBoundingClientRect().left;
        const padding    = parseInt(getComputedStyle(track).paddingLeft) || 0;
        let closestIdx   = 0;
        let closestDist  = Infinity;
        cards.forEach((card, i) => {
          const cardLeft = card.getBoundingClientRect().left;
          const dist     = Math.abs(cardLeft - trackLeft - padding);
          if (dist < closestDist) { closestDist = dist; closestIdx = i; }
        });
        if (closestIdx !== currentIndex) {
          currentIndex = closestIdx;
          updateUI();
        }
      }, 80);
    }, { passive: true });

    // ── Drag to scroll (mouse)
    let isDragging = false;
    let startX, startScroll;

    track.addEventListener('mousedown', e => {
      isDragging = true;
      startX     = e.pageX - track.offsetLeft;
      startScroll= track.scrollLeft;
      track.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      e.preventDefault();
      const x    = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.2;
      track.scrollLeft = startScroll - walk;
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        track.style.userSelect = '';
        // Snap al más cercano
        const trackLeft = track.getBoundingClientRect().left;
        const padding   = parseInt(getComputedStyle(track).paddingLeft) || 0;
        let closestIdx  = 0, closestDist = Infinity;
        cards.forEach((card, i) => {
          const dist = Math.abs(card.getBoundingClientRect().left - trackLeft - padding);
          if (dist < closestDist) { closestDist = dist; closestIdx = i; }
        });
        scrollToCard(closestIdx);
      }
    });

    // ── Swipe táctil
    let touchStartX, touchStartScroll;
    track.addEventListener('touchstart', e => {
      touchStartX     = e.touches[0].clientX;
      touchStartScroll= track.scrollLeft;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) scrollToCard(currentIndex + (diff > 0 ? 1 : -1));
    }, { passive: true });

    // ── Init
    updateUI();
  }


  // ══════════════════════════════════════════
  // 7. FLIP CARDS — toggle en touch/click
  //    (hover funciona en desktop via CSS)
  //    En móvil: primer tap → voltear,
  //    segundo tap → volver
  // ══════════════════════════════════════════
  const flips = document.querySelectorAll('.flip');

  flips.forEach(card => {
    // Solo activar click toggle si no hay hover real
    card.addEventListener('click', () => {
      if (!window.matchMedia('(hover: hover)').matches) {
        card.classList.toggle('flipped');
        // Animar barras cuando se voltea
        if (card.classList.contains('flipped')) animFlipBars(card);
      }
    });

    // En desktop, animar barras cuando entra el hover
    card.addEventListener('mouseenter', () => {
      animFlipBars(card);
    });
  });

  function animFlipBars(card) {
    card.querySelectorAll('.fbar').forEach(bar => {
      const fill = bar.querySelector('.fbar__fill');
      const pct  = bar.dataset.p;
      if (fill && pct) {
        fill.style.width = '0%'; // reset
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            fill.style.width = pct + '%';
          });
        });
      }
    });
  }


  // ══════════════════════════════════════════
  // 8. KEYBOARD NAVIGATION PARA TIMELINE
  // ══════════════════════════════════════════
  const tlOuter = document.querySelector('.tl-outer');
  if (tlOuter) {
    tlOuter.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' && btnPrev && !btnPrev.disabled) btnPrev.click();
      if (e.key === 'ArrowRight' && btnNext && !btnNext.disabled) btnNext.click();
    });
  }

}); // fin DOMContentLoaded
