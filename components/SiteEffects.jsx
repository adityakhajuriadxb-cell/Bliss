'use client';

import { useEffect } from 'react';
import anime from 'animejs';
import Swiper, { EffectFade, Navigation, Pagination } from 'swiper';

// Parses the theme's data-anime attribute, e.g.
// "opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
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
    const { onview, ...options } = parseAnime(el.getAttribute('data-anime'));
    const instance = anime({ targets: el, ...options, autoplay: false });
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

function setupBannerSlider() {
  const el = document.querySelector('.banner__collection-active');
  if (!el) return () => {};
  const swiper = new Swiper(el, {
    modules: [EffectFade, Navigation, Pagination],
    loop: false,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: { el: '.tg-swiper-pagination', clickable: true },
    navigation: { nextEl: '.tg-swiper-next', prevEl: '.tg-swiper-prev' },
  });
  return () => swiper.destroy(true, true);
}

export default function SiteEffects() {
  useEffect(() => {
    const stopAnimations = setupAnimations();
    const stopSlider = setupBannerSlider();
    return () => {
      stopAnimations();
      stopSlider();
    };
  }, []);

  return null;
}
