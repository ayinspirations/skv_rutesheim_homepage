import { useEffect } from 'react';

// Blendet alle Inhaltsblöcke beim Scrollen weich ein (Klassen .sr / .sr-in, siehe index.html).
// Listen- und Grid-Einträge fliegen einzeln (leicht versetzt) ein, übrige Blöcke als Ganzes.
// Elemente, die framer-motion oder eigene Inline-Animationen steuern (inline opacity), bleiben
// unberührt, damit sich nichts doppelt animiert.
const ITEMS = 'main section [class*="grid-cols"] > *, main section [class*="space-y-"] > *';
const BLOCKS = 'main section > div > *, footer > div > *';

const isAnimatedElsewhere = (el: Element) =>
  (el as HTMLElement).style.opacity !== '' || el.querySelector('[style*="opacity"]') !== null;

export function useScrollReveal(key: string) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('sr-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0 }
    );

    const mark = (el: Element, delayIdx: number) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(delayIdx, 6) * 90}ms`;
      el.classList.add('sr');
      io.observe(el);
    };
    // Bereits markierte Elemente (auch Vorfahren/Nachfahren) nie erneut anfassen.
    const touched = (el: Element) =>
      el.classList.contains('sr') || el.parentElement?.closest('.sr') != null || el.querySelector('.sr') != null;

    const scan = () => {
      document.querySelectorAll(ITEMS).forEach((el) => {
        if (touched(el) || isAnimatedElsewhere(el)) return;
        const idx = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
        mark(el, idx);
      });
      document.querySelectorAll(BLOCKS).forEach((el) => {
        if (touched(el) || isAnimatedElsewhere(el)) return;
        mark(el, 0);
      });
    };

    // Die neue Seite wird erst nach der Ausblend-Animation eingehängt -> bei DOM-Änderungen neu scannen.
    let t = window.setTimeout(scan, 50);
    const mo = new MutationObserver(() => {
      window.clearTimeout(t);
      t = window.setTimeout(scan, 60);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(t);
      mo.disconnect();
      io.disconnect();
    };
  }, [key]);
}
