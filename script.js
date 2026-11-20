/* ==========================================================================
   ESTRATEGIA DIGITAL ESTRELLA · Interacciones ligeras
   La página funciona por completo sin JavaScript; esto solo añade mejoras.
   ========================================================================== */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    /* 1. Ejemplo en vivo: los botones no salen de la página,
          solo muestran el aviso «Esto es un ejemplo». */
    var toast = document.getElementById('demo-toast');
    var toastTimer;

    document.querySelectorAll('[data-demo]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!toast) return;
        clearTimeout(toastTimer);
        toast.textContent = '';
        toast.classList.remove('is-visible');
        // Pequeña pausa para que los lectores de pantalla repitan el aviso
        window.setTimeout(function () {
          toast.textContent = 'Esto es un ejemplo';
          toast.classList.add('is-visible');
        }, 30);
        toastTimer = window.setTimeout(function () {
          toast.classList.remove('is-visible');
        }, 1800);
      });
    });

    /* 2. Preguntas frecuentes: solo una abierta a la vez.
          Los navegadores modernos lo hacen con el atributo name de <details>;
          esto cubre a los que todavía no lo admiten. */
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        faqItems.forEach(function (other) {
          if (other !== item && other.open) other.open = false;
        });
      });
    });

    /* 3. Aparición suave de los bloques al hacer scroll */
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    var targets = document.querySelectorAll(
      '.section-header, .card, .example, .pricing-card, .faq-list, .closing-card, .demo-wrap'
    );
    targets.forEach(function (el) { el.classList.add('reveal'); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach(function (el) { observer.observe(el); });
  });
})();
