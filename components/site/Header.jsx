'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/config/site';
import Logo from '@/components/brand/Logo';
import Icon from '@/components/brand/Icon';

function isCurrent(pathname, href) {
  return !href.includes('#') && pathname.startsWith(href);
}

export default function Header({ tone = 'mist' }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header site-header--${tone}${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__bar">
        <Link href="/" className="site-header__logo" aria-label={`${SITE.name} home`}>
          <Logo label={SITE.name} />
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {SITE.nav.map((item) => (
              <li key={item.href} className={item.children ? 'has-menu' : undefined}>
                <Link href={item.href} aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="site-nav__menu">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} aria-current={pathname === child.href ? 'page' : undefined}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          {SITE.signInUrl ? (
            <a href={SITE.signInUrl} className="btn btn-line">Sign in</a>
          ) : (
            <span className="btn btn-line btn-static">Launching soon</span>
          )}
          <Link href={SITE.cta.href} className="btn btn-white">{SITE.cta.label}</Link>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          <ul>
            {SITE.nav.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <button type="button" aria-expanded={productsOpen} onClick={() => setProductsOpen(!productsOpen)}>
                      {item.label}
                      <Icon name={productsOpen ? 'minus' : 'plus'} size={20} />
                    </button>
                    {productsOpen && (
                      <ul>
                        <li><Link href={item.href} onClick={closeMenu}>All products</Link></li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} onClick={closeMenu}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={closeMenu}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <Link href={SITE.cta.href} className="btn btn-navy btn-block" onClick={closeMenu}>{SITE.cta.label}</Link>
        </nav>
      )}
    </header>
  );
}
