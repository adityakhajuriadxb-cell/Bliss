import Link from 'next/link';

export default function PageHero({ crumbs = [], eyebrow, title, intro, actions, visual }) {
  return (
    <section className={`page-hero${visual ? '' : ' page-hero--plain'}`}>
      <div className="wrap page-hero__grid">
        <div>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb">
              <ol className="crumbs">
                {crumbs.map((crumb, i) => (
                  <li key={crumb.href}>
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href}>{crumb.label}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {intro && <p className="page-hero__intro">{intro}</p>}
          {actions && <div className="page-hero__actions">{actions}</div>}
        </div>
        {visual && <div className="page-hero__visual">{visual}</div>}
      </div>
    </section>
  );
}
