'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import anime from 'animejs';
import { SITE } from '@/config/site';

// Same smooth scroll as the original theme: 1s easeInOutExpo, stopping just above the section.
function smoothScrollTo(top) {
  const offset = window.innerWidth < 768 ? 30 : 50;
  const scroller = document.scrollingElement;
  anime.remove(scroller);
  anime({
    targets: scroller,
    scrollTop: Math.max(0, top - offset),
    duration: 1000,
    easing: 'easeInOutExpo',
  });
}

function NavLinks({ onNavigate }) {
  const pathname = usePathname();

  const handleClick = (event, href) => {
    onNavigate?.();
    // Only intercept on the homepage; from other pages the browser navigates to /#section.
    if (pathname !== '/') return;
    if (href === '/') {
      event.preventDefault();
      smoothScrollTo(0);
      return;
    }
    const target = document.querySelector(href.slice(1));
    if (target) {
      event.preventDefault();
      smoothScrollTo(target.getBoundingClientRect().top + window.scrollY);
    }
  };

  return (
    <ul className="navigation">
      {SITE.nav.map((item, i) => (
        <li key={item.href} className={`menu-item${i === 0 ? ' current-menu-item' : ''}`}>
          <a href={item.href} aria-current={i === 0 ? 'page' : undefined} onClick={(e) => handleClick(e, item.href)}>
            {item.label}
          </a>
        </li>
      ))}
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
                      <img src={SITE.logo.header} style={{ maxWidth: 200 }} alt={SITE.name} />
                    </a>
                    <a className="dark-logo" href="/">
                      <img src={SITE.logo.header} style={{ maxWidth: 200 }} alt={SITE.name} />
                    </a>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <NavLinks />
                  </div>
                  <div className="tgmenu__action">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <button className="btn border-btn">Launching Soon</button>
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
                      <img src={SITE.logo.mobileLight} style={{ maxWidth: 200 }} alt={SITE.name} />
                    </a>
                    <a className="dark-logo" href="/">
                      <img src={SITE.logo.mobileDark} style={{ maxWidth: 200 }} alt={SITE.name} />
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
