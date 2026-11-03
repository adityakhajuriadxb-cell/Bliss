import Logo from '@/components/brand/Logo';
import Icon from '@/components/brand/Icon';

// The product UI shown across the site: virtual IBANs and accounts, never payment cards.
// All details here are examples. Check digits of 00 are never valid, so these IBANs can't
// belong to anyone.
export const EXAMPLE_IBAN = 'DE00 1000 0000 0000 2616 00';
export const EXAMPLE_IBAN_2 = 'DE00 1000 0000 0000 7731 42';

// Money states always carry a word as well as a colour (BRAND.md, "Colour").
export function Badge({ state = 'sent', children }) {
  return <span className={`ui-badge ui-badge--${state}`}>{children}</span>;
}

// The full-size virtual IBAN, in the place a payment card would sit.
export function IbanTile({ name = 'Amara Okafor', iban = EXAMPLE_IBAN, currency = 'EUR', label = 'Virtual IBAN', className = '' }) {
  return (
    <div className={`ui-iban ${className}`}>
      <div className="ui-iban__top">
        <Logo label="Bliss" />
        <span className="ui-iban__cur">{currency}</span>
      </div>
      <div className="ui-iban__body">
        <p className="ui-kicker">{label}</p>
        <p className="ui-mono ui-iban__number">{iban}</p>
      </div>
      <div className="ui-iban__foot">
        <div>
          <p className="ui-kicker">Account name</p>
          <p>{name}</p>
        </div>
        <span className="ui-iban__copy"><Icon name="copy" size={18} /> Copy</span>
      </div>
    </div>
  );
}

export function BalancePanel({ currency = 'EUR', currencyName = 'Euro account', symbol = '€', amount = '21,530.86', reference = '•••• 2616', actions = true, className = '' }) {
  return (
    <div className={`ui-panel ui-balance ${className}`}>
      <div className="ui-row">
        <span className="ui-chip"><span className="ui-sym">{symbol}</span>{currencyName}</span>
        <span className="ui-round"><Icon name="more" size={18} /></span>
      </div>
      <p className="ui-kicker ui-mt">Your balance</p>
      <p className="ui-amount">{symbol}{amount} <small>{currency}</small></p>
      <div className="ui-row ui-mt">
        <div>
          <p className="ui-kicker">Account</p>
          <p className="ui-mono">{reference}</p>
        </div>
        <div className="ui-right">
          <p className="ui-kicker">Status</p>
          <Badge>Active</Badge>
        </div>
      </div>
      {actions && (
        <div className="ui-actions">
          <span className="ui-pill ui-pill--solid">Send <Icon name="send" size={16} /></span>
          <span className="ui-pill">Add money</span>
        </div>
      )}
    </div>
  );
}

// The numbers follow BRAND.md: $500.00 less a $2.40 fee, at 0.92104, is €458.31.
export function ConvertPanel({ className = '' }) {
  return (
    <div className={`ui-panel ui-convert ${className}`}>
      <p className="ui-kicker">You send</p>
      <p className="ui-title">1 USD = 0.92104 EUR</p>
      <div className="ui-convert__fields">
        <div className="ui-field"><span className="ui-chip"><span className="ui-sym">$</span>USD</span><strong>500.00</strong></div>
        <span className="ui-convert__swap"><Icon name="swap" size={18} /></span>
        <div className="ui-field"><span className="ui-chip"><span className="ui-sym">€</span>EUR</span><strong>458.31</strong></div>
      </div>
      <dl className="ui-lines">
        <div><dt>Fee</dt><dd>$2.40 USD</dd></div>
        <div><dt>Rate locked for</dt><dd>30 min</dd></div>
      </dl>
    </div>
  );
}

export function SummaryPanel({ title, lines, badge, badgeState = 'sent', action, className = '' }) {
  return (
    <div className={`ui-panel ${className}`}>
      <div className="ui-row">
        <p className="ui-title">{title}</p>
        {badge && <Badge state={badgeState}>{badge}</Badge>}
      </div>
      <dl className="ui-lines">
        {lines.map(([label, value]) => (
          <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
        ))}
      </dl>
      {action && <span className="ui-pill ui-pill--solid ui-pill--block">{action}</span>}
    </div>
  );
}

const DEFAULT_ROWS = [
  { name: 'Received from Sloane M.', meta: 'Just now', amount: '+€1,280.00', state: 'sent', status: 'Received' },
  { name: 'Sent to Amara O.', meta: 'Today', amount: '−$500.00', state: 'sent', status: 'Sent' },
  { name: 'Sent to Julian T.', meta: 'Today', amount: '−€85.50', state: 'pending', status: 'Pending' },
];

export function TxList({ title = 'Transactions', rows = DEFAULT_ROWS, className = '' }) {
  return (
    <div className={`ui-panel ui-tx ${className}`}>
      <p className="ui-title">{title}</p>
      <ul>
        {rows.map((row) => (
          <li key={row.name}>
            <span className="ui-tx__icon"><Icon name={row.amount.startsWith('+') ? 'arrowRight' : 'send'} size={16} /></span>
            <div className="ui-tx__who">
              <p>{row.name}</p>
              <small>{row.meta}</small>
            </div>
            <div className="ui-right">
              <p className="ui-tx__amount">{row.amount}</p>
              <Badge state={row.state}>{row.status}</Badge>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BarChart({ title = 'Money in', value = '85%', change = '12%', className = '' }) {
  const bars = [62, 48, 48, 48, 66];
  return (
    <div className={`ui-panel ui-bars ${className}`}>
      <div className="ui-row">
        <p className="ui-title">{title}</p>
        <span className="ui-chip ui-chip--small">Monthly <Icon name="chevron" size={14} /></span>
      </div>
      <p className="ui-amount ui-amount--md">{value} <Badge>↑ {change}</Badge></p>
      <div className="ui-bars__plot" aria-hidden="true">
        {bars.map((height, i) => (
          <div key={i} className="ui-bars__col">
            <span className={i === bars.length - 1 ? 'is-now' : ''} style={{ height: `${height}%` }} />
            <small>{`0${i + 2}`}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

const LINE = 'M0 96C14 96 22 88 34 76 46 64 58 62 78 62 98 62 110 78 124 78 142 78 152 58 170 56 192 54 198 54 214 44 232 34 244 42 256 58 268 76 282 76 300 76 318 76 336 62 350 52 358 40 362 22 368 4';
const LINE_FILL = `${LINE}V120H0Z`;

export function LineChart({ title = 'Money received', value = '€9,252', change = '7%', compare = 'vs last year', className = '' }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  return (
    <div className={`ui-panel ui-line ${className}`}>
      <p className="ui-title">{title}</p>
      <p className="ui-amount ui-amount--md">{value} <Badge>↑ {change}</Badge> <small>{compare}</small></p>
      <svg viewBox="0 0 368 120" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ui-line-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00C389" stopOpacity="0.22" />
            <stop offset="1" stopColor="#00C389" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={LINE_FILL} fill="url(#ui-line-fill)" />
        <path d={LINE} fill="none" stroke="#0B1F3A" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="ui-line__months" aria-hidden="true">
        {months.map((m) => (
          <span key={m} className={m === 'Jun' ? 'is-now' : ''}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export function GrowthChart({ className = '' }) {
  const ranges = ['24H', '1W', '1M', '1Y', 'All'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
  const path = 'M0 150C10 148 14 136 22 146 32 158 44 158 56 152 66 148 70 164 78 154 86 134 94 128 104 138 114 146 120 124 132 122 138 104 144 88 158 84 170 82 176 90 188 70 194 56 208 62 222 50 232 42 238 26 252 22 266 18 272 34 286 22 296 16 304 22 316 18 322 42 332 20 340 14';
  return (
    <div className={`ui-panel ui-growth ${className}`}>
      <div className="ui-growth__ranges" aria-hidden="true">
        {ranges.map((r) => (
          <span key={r} className={r === '1W' ? 'is-now' : ''}>{r}</span>
        ))}
      </div>
      <svg viewBox="0 0 340 170" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id="ui-grid" width="42.5" height="34" patternUnits="userSpaceOnUse">
            <path d="M42.5 0H0V34" fill="none" stroke="#D5DEEA" strokeWidth="1" />
          </pattern>
          <linearGradient id="ui-growth-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00C389" stopOpacity="0.22" />
            <stop offset="1" stopColor="#00C389" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="340" height="170" fill="url(#ui-grid)" />
        <path d={`${path}V170H0Z`} fill="url(#ui-growth-fill)" />
        <path d={path} fill="none" stroke="#0B1F3A" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="ui-growth__days" aria-hidden="true">
        {days.map((d, i) => (
          <span key={`${d}${i}`}>{d}<small>{15 + i}</small></span>
        ))}
      </div>
    </div>
  );
}

function round(value) {
  return Math.round(value * 100) / 100;
}

export function Gauge({ title = 'Money in and out', subtitle = 'This month', value = '€25k', caption = 'Net money in', note = 'Every payment and fee is on one statement.', className = '' }) {
  const ticks = 15;
  const filled = 10;
  return (
    <div className={`ui-panel ui-gauge ${className}`}>
      <p className="ui-title">{title}</p>
      <p className="ui-kicker">{subtitle}</p>
      <div className="ui-gauge__dial">
        <svg viewBox="0 0 280 150" aria-hidden="true">
          {Array.from({ length: ticks }, (_, i) => {
            const angle = Math.PI - (i / (ticks - 1)) * Math.PI;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            return (
              <line
                key={i}
                x1={round(140 + 92 * cos)}
                y1={round(140 - 92 * sin)}
                x2={round(140 + 128 * cos)}
                y2={round(140 - 128 * sin)}
                stroke={i < filled ? '#A9EBD3' : '#E6EEF8'}
                strokeWidth="18"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
        <div className="ui-gauge__value">
          <strong>{value}</strong>
          <small>{caption}</small>
        </div>
      </div>
      <div className="ui-gauge__legend" aria-hidden="true">
        <span><i className="is-in" />Money in</span>
        <span><i />Money out</span>
      </div>
      <p className="ui-gauge__note">{note}</p>
    </div>
  );
}

export function Rings({ className = '' }) {
  const rings = [
    { r: 92, color: '#A9EBD3', off: '#E6EEF8', share: 0.74 },
    { r: 72, color: '#0B1F3A', off: '#E6EEF8', share: 0.56 },
    { r: 52, color: '#00C389', off: '#E6EEF8', share: 0.38 },
  ];
  const rows = [
    ['Euro', '€74,695.27'],
    ['US dollar', '$2,339.66'],
    ['Pound', '£85.25'],
  ];
  return (
    <div className={`ui-panel ui-rings ${className}`}>
      <div>
        <p className="ui-kicker">Total across accounts</p>
        <p className="ui-amount ui-amount--md">€76,949.93 <small>EUR</small></p>
        <Badge>↑ 2.9%</Badge>
        <dl className="ui-lines">
          {rows.map(([label, value]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
      </div>
      <svg viewBox="0 0 210 210" aria-hidden="true">
        {rings.map((ring) => {
          const length = 2 * Math.PI * ring.r;
          return (
            <g key={ring.r} fill="none" strokeWidth="12" strokeLinecap="round" transform="rotate(-90 105 105)">
              <circle cx="105" cy="105" r={ring.r} stroke={ring.off} />
              <circle cx="105" cy="105" r={ring.r} stroke={ring.color} strokeDasharray={`${round(length * ring.share)} ${round(length)}`} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function Message({ name, children, tone = 'them', className = '' }) {
  return (
    <div className={`ui-msg ui-msg--${tone} ${className}`}>
      <p className="ui-msg__name">{name}</p>
      <p>{children}</p>
    </div>
  );
}
