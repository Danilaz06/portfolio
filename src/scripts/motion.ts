/**
 * motion.ts — motor de animaciones ligadas al scroll (sin dependencias).
 * Un único listener de scroll en rAF reparte el evento a todos los handlers.
 * Respeta prefers-reduced-motion.
 */

type Handler = (scrollY: number) => void;

const handlers = new Set<Handler>();
const mqReduce =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : ({ matches: false } as MediaQueryList);

let ticking = false;

function tick() {
  const y = window.scrollY;
  for (const h of handlers) h(y);
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(tick);
  }
}

/** Registra un handler que se ejecuta en cada scroll (y una vez al inicio). */
export function registerScroll(handler: Handler): () => void {
  handlers.add(handler);
  handler(typeof window !== 'undefined' ? window.scrollY : 0);
  return () => handlers.delete(handler);
}

export const prefersReduced = () => mqReduce.matches;

export const clamp = (v: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, v));

/** Progreso 0→1 de un elemento atravesando el viewport (start..end configurables). */
export function viewportProgress(el: Element, start = 0, end = 1): number {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const raw = (vh * (1 - start) - r.top) / (r.height + vh * (1 - start - (1 - end)));
  return clamp(raw);
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);

  const initParallax = () => {
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.15');
      registerScroll(() => {
        if (mqReduce.matches) {
          el.style.transform = '';
          return;
        }
        const r = el.getBoundingClientRect();
        const offset = r.top + r.height / 2 - window.innerHeight / 2;
        el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(2)}px, 0)`;
      });
    });
  };

  // Barra de progreso de scroll (parte superior)
  const initProgressBar = () => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    registerScroll(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
    });
  };

  const boot = () => {
    initParallax();
    initProgressBar();
  };

  if (document.readyState !== 'loading') boot();
  else window.addEventListener('DOMContentLoaded', boot);
}
