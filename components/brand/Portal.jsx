import Icon from '@/components/brand/Icon';
import { SITE } from '@/config/site';

// The Bliss web portal's sections, shown in the sidebar.
export const PORTAL_NAV = [
  { icon: 'wallet', label: 'Accounts' },
  { icon: 'send', label: 'Payments' },
  { icon: 'card', label: 'Cards' },
  { icon: 'asset', label: 'Digital assets' },
  { icon: 'users', label: 'Recipients' },
];

// A browser window showing a page of the Bliss web portal: address bar, sidebar with
// the current section highlighted, and the page itself. Purely illustrative, so hidden
// from assistive tech; the surrounding copy carries the meaning.
export default function Portal({ title, section, children, className = '' }) {
  return (
    <div className={`bl-portal ${className}`} aria-hidden="true">
      <div className="bl-portal__chrome">
        <span className="bl-portal__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="bl-portal__address">
          <Icon name="lock" size={12} />
          app.{SITE.domain}
        </span>
      </div>
      <div className="bl-portal__frame">
        <nav className="bl-portal__nav">
          <img src="/brand/logos/bliss-lockup.svg" alt="" className="bl-portal__logo" />
          {PORTAL_NAV.map((item) => (
            <span key={item.label} className={item.label === section ? 'is-active' : undefined}>
              <Icon name={item.icon} size={16} />
              <b>{item.label}</b>
            </span>
          ))}
        </nav>
        <div className="bl-portal__main">
          {title && <p className="bl-portal__title">{title}</p>}
          <div className="bl-portal__body">{children}</div>
        </div>
      </div>
    </div>
  );
}
