'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import anime from 'animejs';
import { SITE } from '@/config/site';
import Logo from '@/components/brand/Logo';

// Smooth scroll with the brand ease (fast in, gentle settle), stopping just above the section.
function smoothScrollTo(top) {
  const offset = window.innerWidth < 768 ? 30 : 50;
  const scroller = document.scrollingElement;
  const target = Math.max(0, top - offset);
  anime.remove(scroller);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    scroller.scrollTop = target;
    return;
  }
  anime({
    targets: scroller,
    scrollTop: target,
    duration: 600,
    easing: 'cubicBezier(0.2, 0.8, 0.2, 1)',
  });
}

// The current page's top-level item: "/" only on the homepage, otherwise a path prefix.
// Hash links (/#about) are sections of the homepage, so they are never marked current.
function isCurrent(pathname, href) {
  if (href === '/') return pathname === '/';
  return !href.includes('#') && pathname.startsWith(href);
}

function NavLinks({ onNavigate }) {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState(null);

  const handleClick = (event, href) => {
    onNavigate?.();
    // Only intercept on the homepage; from other pages the browser navigates to /#section.
    if (pathname !== '/') return;
    if (href === '/') {
      event.preventDefault();
      smoothScrollTo(0);
      return;
    }
    if (!href.startsWith('/#')) return;
    const target = document.querySelector(href.slice(1));
    if (target) {
      event.preventDefault();
      smoothScrollTo(target.getBoundingClientRect().top + window.scrollY);
    }
  };

  return (
    <ul className="navigation">
      {SITE.nav.map((item) => {
        const current = isCurrent(pathname, item.href);
        const open = openItem === item.href;
        const classes = ['menu-item', item.children && 'menu-item-has-children', current && 'current-menu-item']
          .filter(Boolean)
          .join(' ');
        return (
          <li key={item.href} className={classes}>
            <a href={item.href} aria-current={current ? 'page' : undefined} onClick={(e) => handleClick(e, item.href)}>
              {item.label}
            </a>
            {item.children && (
              <>
                {/* Mobile menu only; the theme hides this on desktop, where the list opens on hover. */}
                <button
                  type="button"
                  className={`dropdown-btn${open ? ' open' : ''}`}
                  aria-expanded={open}
                  aria-label={`Show ${item.label} pages`}
                  onClick={() => setOpenItem(open ? null : item.href)}
                >
                  <span className="plus-line" />
                </button>
                <ul className={`sub-menu${open ? ' is-open' : ''}`}>
                  {item.children.map((child) => (
                    <li key={child.href} className={pathname === child.href ? 'current-menu-item' : undefined}>
                      <a href={child.href} aria-current={pathname === child.href ? 'page' : undefined} onClick={onNavigate}>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 245);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The theme CSS slides the mobile menu in when <body> has this class.
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-visible', menuOpen);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div id="sticky-header" className={`tg-header__area transparent-header${sticky ? ' sticky-menu' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler" onClick={() => setMenuOpen(true)}>
                <i className="flaticon-menu-1" />
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <a className="light-logo" href="/">
                      <Logo tone="reversed" label={SITE.name} />
                    </a>
                    <a className="dark-logo" href="/">
                      <Logo tone="reversed" label={SITE.name} />
                    </a>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <NavLinks />
                  </div>
                  <div className="tgmenu__action">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <span className="bl-pill">App launching soon</span>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="tgmobile__menu">
                <nav className="tgmobile__menu-box">
                  <div className="close-btn" onClick={closeMenu}>
                    <i className="flaticon-close-1" />
                  </div>
                  <div className="nav-logo">
                    <a className="light-logo" href="/">
                      <Logo tone="primary" label={SITE.name} />
                    </a>
                    <a className="dark-logo" href="/">
                      <Logo tone="reversed" label={SITE.name} />
                    </a>
                  </div>
                  <div className="tgmobile__menu-outer">
                    <NavLinks onNavigate={closeMenu} />
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li className="facebook">
                        <a href={SITE.social.facebook}><i className="fab fa-facebook-f" /></a>
                      </li>
                      <li className="twitter">
                        <a href={SITE.social.twitter}><i className="fab fa-twitter" /></a>
                      </li>
                      <li className="instagram">
                        <a href={SITE.social.instagram}><i className="fab fa-instagram" /></a>
                      </li>
                      <li className="discord">
                        <a href={SITE.social.discord}><i className="fab fa-discord" /></a>
                      </li>
                      <li className="telegram">
                        <a href={SITE.social.telegram}><i className="fab fa-telegram-plane" /></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="tgmobile__menu-backdrop" onClick={closeMenu} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
