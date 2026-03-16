document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidad del Menú Móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar el ícono (opcional, simple toggle visual)
        if (navLinks.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '✕'; // Equis para cerrar
        } else {
            mobileMenuBtn.innerHTML = '☰'; // Hamburguesa para abrir
        }
    });

    // Cerrar menú al hacer clic en un enlace (en móvil)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    });

    // 2. Animación suave al hacer scroll (Intersection Observer)
    // Esto da el efecto de que los elementos van apareciendo mientras bajas
    const fadeSections = document.querySelectorAll('.fade-in-section');

    const appearOptions = {
        threshold: 0.15, // El elemento debe estar 15% visible para animarse
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Si no está en pantalla, no hacer nada
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, appearOptions);

    fadeSections.forEach(section => {
        appearOnScroll.observe(section);
    });

});