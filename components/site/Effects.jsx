'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Site-wide behaviour that isn't tied to one component.
export default function Effects() {
  const pathname = usePathname();

  // Reveals [data-reveal] elements as they scroll into view. The motion itself is in globals.css
  // and is switched off under reduced motion.
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]:not(.is-in)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  // A link to the page you're already on goes back to the top. Next.js treats it as no navigation,
  // so the page would otherwise stay where it is. Smooth or instant follows the CSS.
  useEffect(() => {
    const onClick = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!link || link.target === '_blank') return;
      const url = new URL(link.href);
      if (url.origin === location.origin && url.pathname === location.pathname && !url.hash) {
        window.scrollTo({ top: 0 });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
