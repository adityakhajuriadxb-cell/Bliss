'use client';

import { useEffect } from 'react';
import anime from 'animejs';

// Brand motion (docs/brand/BRAND.md, "Motion"): fast in, gentle settle. Animations
// can still override these in their data-anime attribute.
const BRAND_MOTION = { duration: 240, easing: 'cubicBezier(0.2, 0.8, 0.2, 1)' };

// Parses the theme's data-anime attribute, e.g.
// "opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: anime.stagger(100);"
function parseAnime(attr) {
  const options = {};
  for (const row of attr.split(';')) {
    const match = row.trim().match(/^(.*?):([\s\S]*)$/);
    if (!match) continue;
    const key = match[1].trim();
    const raw = match[2].trim();
    let value = raw;
    const stagger = raw.match(/^anime\.stagger\((\d+(?:\.\d+)?)\)$/);
    if (stagger) value = anime.stagger(parseFloat(stagger[1]));
    else if (raw === 'true' || raw === 'false') value = raw === 'true';
    else if (/^-?\d+(\.\d+)?$/.test(raw)) value = parseFloat(raw);
    else if (raw.startsWith('[')) value = JSON.parse(raw);
    options[key] = value;
  }
  return options;
}

function setupAnimations() {
  const cleanups = [];
  document.querySelectorAll('[data-anime]').forEach((el) => {
    const { onview, targets, ...options } = parseAnime(el.getAttribute('data-anime'));
    // "targets: > *" selects relative to the element itself.
    const animTargets = targets ? el.querySelectorAll(`:scope ${targets}`) : el;
    const instance = anime({ ...BRAND_MOTION, targets: animTargets, ...options, autoplay: false });
    instance.seek(0); // apply the starting state (e.g. opacity 0) right away

    // Same trigger as the original theme: play once the element's top passes
    // the bottom of the viewport, shifted by the numeric onview offset.
    const offset = typeof onview === 'number' ? onview : 0;
    const check = () => {
      if (window.innerHeight > el.getBoundingClientRect().top - offset) {
        window.removeEventListener('scroll', check);
        window.removeEventListener('resize', check);
        instance.play();
      }
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
    cleanups.push(() => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      instance.pause();
    });
  });
  return () => cleanups.forEach((fn) => fn());
}

// Scroll-linked depth. Uses the CSS `translate` property, which composes with the
// `transform` that anime.js animates, so the two never overwrite each other.
//   data-parallax="0.1"            moves by (distance from viewport centre) × speed:
//                                  higher speeds read as closer to the viewer
//   data-parallax-axis="x"         drifts right as you scroll down, the brand's direction
//   data-parallax-children="a,b"   one speed per child element, in order
//   data-scroll-reveal             sets --reveal from 0 to 1 as the element enters (see bliss.css)
function setupParallax() {
  const layers = [];
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    layers.push({ el, speed: parseFloat(el.dataset.parallax), axis: el.dataset.parallaxAxis || 'y' });
  });
  document.querySelectorAll('[data-parallax-children]').forEach((parent) => {
    parent.dataset.parallaxChildren.split(',').forEach((speed, i) => {
      const el = parent.children[i];
      if (el) layers.push({ el, speed: parseFloat(speed), axis: 'y' });
    });
  });
  const reveals = [...document.querySelectorAll('[data-scroll-reveal]')];
  if (!layers.length && !reveals.length) return () => {};

  const update = () => {
    const vh = window.innerHeight;
    for (const { el, speed, axis } of layers) {
      // Measure without our own offset so the movement doesn't feed back on itself.
      const rect = el.getBoundingClientRect();
      const applied = axis === 'y' ? parseFloat((el.style.translate || '').split(' ')[1]) || 0 : 0;
      const centre = rect.top - applied + rect.height / 2;
      // Capped at one screen away: layers far off-screen don't need to travel further.
      const distance = Math.max(-vh, Math.min(vh, centre - vh / 2));
      const offset = distance * speed;
      el.style.translate = axis === 'x' ? `${(-offset).toFixed(1)}px 0px` : `0px ${offset.toFixed(1)}px`;
    }
    for (const el of reveals) {
      const top = el.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, (vh - top) / (vh * 0.6)));
      el.style.setProperty('--reveal', progress.toFixed(3));
    }
  };

  let frame = 0;
  const onScroll = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      update();
    });
  };
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    layers.forEach(({ el }) => (el.style.translate = ''));
    reveals.forEach((el) => el.style.removeProperty('--reveal'));
  };
}

// Scroll stories: [data-scrolly] gets data-active = the index of the [data-step] child
// nearest the middle of the screen; CSS shows the matching phone screen. This is state,
// not decoration, so it also runs with reduced motion (bliss.css drops the cross-fade).
function setupScrolly() {
  const roots = [...document.querySelectorAll('[data-scrolly]')];
  if (!roots.length) return () => {};

  const update = () => {
    const middle = window.innerHeight / 2;
    for (const root of roots) {
      let active = 0;
      let nearest = Infinity;
      root.querySelectorAll('[data-step]').forEach((step, i) => {
        const rect = step.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - middle);
        if (distance < nearest) {
          nearest = distance;
          active = i;
        }
      });
      root.dataset.active = String(active);
    }
  };

  let frame = 0;
  const onScroll = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      update();
    });
  };
  roots.forEach((root) => root.setAttribute('data-scrolly-ready', ''));
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    roots.forEach((root) => root.removeAttribute('data-scrolly-ready'));
  };
}

export default function SiteEffects() {
  useEffect(() => {
    const stopScrolly = setupScrolly();
    // Respect reduced motion: leave everything in its final, visible state.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return stopScrolly;
    const stopAnimations = setupAnimations();
    const stopParallax = setupParallax();
    return () => {
      stopScrolly();
      stopAnimations();
      stopParallax();
    };
  }, []);

  return null;
}
