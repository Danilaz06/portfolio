/**
 * smooth.ts — Scroll "pro": Lenis (inercia) + GSAP ScrollTrigger.
 *
 * Lenis da el scroll con momentum (el "buttery scroll" de las webs Awwwards)
 * y GSAP ScrollTrigger permite animar cosas ligadas al progreso del scroll.
 * Los dos se sincronizan a través del ticker de GSAP.
 *
 * Respeta prefers-reduced-motion: si está activo, no se inicializa nada.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Instancia de Lenis (null si reduced-motion). Otros módulos pueden importarla. */
export let lenis: Lenis | null = null;

if (!reduce) {
  // 1) Scroll con inercia
  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    smoothWheel: true,
  });

  // 2) Sincronizar Lenis ↔ GSAP (un único loop de render)
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // 3) Navegación por anclas usando el scroll suave de Lenis
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    const id = a.getAttribute('href');
    if (!id || id.length < 2) return;
    a.addEventListener('click', (e) => {
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis!.scrollTo(target as HTMLElement, { offset: -64 });
    });
  });

  // 4) Pequeño detalle GSAP: el hero se va con parallax al hacer scroll
  const intro = document.querySelector('.hero__intro');
  if (intro) {
    gsap.to(intro, {
      yPercent: -14,
      opacity: 0.25,
      ease: 'none',
      scrollTrigger: {
        trigger: '#top',
        start: 'top top',
        end: 'bottom top',
        scrub: true, // ← ligado al scroll, no a una duración
      },
    });
  }
}

export { gsap, ScrollTrigger };
