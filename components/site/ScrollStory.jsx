'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// A pinned list on the left follows the story panels scrolling past on the right.
// `items`: [{ id, label, title, text, visual, cta? }], with `visual` already rendered.
export default function ScrollStory({ items }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    refs.current[index]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="story">
      <ul className="story__list">
        {items.map((item, i) => (
          <li key={item.id}>
            <button type="button" className={i === active ? 'is-active' : ''} aria-current={i === active ? 'step' : undefined} onClick={() => goTo(i)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="story__items">
        {items.map((item, i) => (
          <article
            key={item.id}
            className="story__item"
            data-index={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
          >
            <div className={`story__visual ${item.visualClass ?? ''}`}>{item.visual}</div>
            {item.label !== item.title && <p className="story__eyebrow">{item.label}</p>}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.cta && <Link href={item.cta.href} className="btn btn-mint">{item.cta.label}</Link>}
          </article>
        ))}
      </div>
    </div>
  );
}
