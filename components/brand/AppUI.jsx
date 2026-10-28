import Icon from '@/components/brand/Icon';

// Building blocks for the web portal pages shown inside <Portal>. Illustrative only.

export function Panel({ children, className = '' }) {
  return <div className={`bl-app-panel ${className}`}>{children}</div>;
}

export function Field({ label, value, code, mono }) {
  return (
    <div className="bl-mini-field">
      <span className="bl-mini-field__label">{label}</span>
      <span className={`bl-mini-field__value${mono ? ' bl-mono' : ''}`}>
        {value}
        {code && <small>{code}</small>}
      </span>
    </div>
  );
}

export function Amount({ label, value, code }) {
  return (
    <div className="bl-app-amount">
      <span className="bl-mini-field__label">{label}</span>
      <span className="bl-app-amount__value">
        {value}
        <small>{code}</small>
      </span>
    </div>
  );
}

export function Line({ label, value, strong }) {
  return (
    <div className={`bl-mini-line${strong ? ' is-strong' : ''}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

// A checklist row: a mint-text tick when done, an empty ring when not.
export function Check({ label, done = true, time }) {
  return (
    <div className={`bl-mini-check${done ? ' is-done' : ''}`}>
      {done ? <Icon name="check" size={16} /> : <span className="bl-mini-check__ring" />}
      <span>{label}</span>
      {time && <time>{time}</time>}
    </div>
  );
}

export function Badge({ state = 'sent', children }) {
  return <span className={`bl-badge bl-badge-${state}`}>{children}</span>;
}

// Illustrated button: navy, so each page keeps one real mint action.
export function FakeButton({ children }) {
  return <span className="bl-mini-button">{children}</span>;
}

// Progress toward done, filled in mint.
export function Progress({ value, label }) {
  return (
    <div className="bl-mini-progress">
      <span className="bl-mini-progress__track">
        <span className="bl-mini-progress__fill" style={{ width: `${value}%` }} />
      </span>
      {label && <span className="bl-mini-progress__label">{label}</span>}
    </div>
  );
}

export function Head({ title, badge, state }) {
  return (
    <div className="bl-mini-head">
      <span>{title}</span>
      {badge && <Badge state={state}>{badge}</Badge>}
    </div>
  );
}

// Rows of payments: name and reference on the left, amount and status on the right.
export function AppList({ rows }) {
  return (
    <ul className="bl-app-list">
      {rows.map((r) => (
        <li key={r.ref}>
          <span className="bl-app-list__name">{r.name}</span>
          <span className="bl-app-list__ref">{r.ref}</span>
          <span className="bl-app-list__amount">
            {r.amount} <small>{r.code}</small>
          </span>
          <Badge state={r.state}>{r.label}</Badge>
        </li>
      ))}
    </ul>
  );
}

// A small card floating beside the phone: a status, a line of text and a reference.
export function Chip({ badge, state = 'sent', text, sub, children }) {
  return (
    <div className="bl-chip-card">
      {badge && <Badge state={state}>{badge}</Badge>}
      {text && <p className="bl-chip-card__text">{text}</p>}
      {sub && <p className="bl-chip-card__sub">{sub}</p>}
      {children}
    </div>
  );
}
