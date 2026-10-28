import Link from 'next/link';

// Navy hero band for inner pages. `crumbs` is a list of { label, href } ending at this page.
export default function PageHero({ crumbs = [], eyebrow, title, intro, actions, visual }) {
  return (
    <section className="bl-page-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className={visual ? 'col-lg-6' : 'col-xl-8 col-lg-10'}>
            <div data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
              {crumbs.length > 0 && (
                <nav aria-label="Breadcrumb">
                  <ol className="bl-crumbs">
                    {crumbs.map((c, i) =>
                      i < crumbs.length - 1 ? (
                        <li key={c.href}>
                          <Link href={c.href}>{c.label}</Link>
                        </li>
                      ) : (
                        <li key={c.href} aria-current="page">
                          {c.label}
                        </li>
                      ),
                    )}
                  </ol>
                </nav>
              )}
              {eyebrow && <p className="bl-eyebrow">{eyebrow}</p>}
              <h1 className="bl-page-hero__title">{title}</h1>
              {intro && <p className="bl-page-hero__intro">{intro}</p>}
              {actions && <div className="bl-actions">{actions}</div>}
            </div>
          </div>
          {visual && (
            <div className="col-lg-6">
              <div className="bl-page-hero__visual" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 200;">
                {visual}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
