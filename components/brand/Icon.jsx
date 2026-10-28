// Outline icons on a 24px grid with a 1.75px stroke and round caps and joins
// (docs/brand/BRAND.md, "Iconography"). Directional icons lean forward to the right.
const PATHS = {
  send: 'M7 17 17 7M9 7h8v8',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  fee: 'M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 8h6M9 12h6M9 16h3',
  shield: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3ZM9 12l2 2 4-4',
  globe: 'M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  track: 'M3 12h4l3-7 4 14 3-7h4',
  support: 'M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM8 10h8M8 13h5',
  eye: 'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  route: 'M4 17h6a3 3 0 0 0 3-3v-4a3 3 0 0 1 3-3h4M17 4l3 3-3 3',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  card: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7ZM3 10h18M7 15h4',
  onRamp: 'M3 12h12M11 8l4 4-4 4M20 5v14',
  offRamp: 'M4 5v14M8 12h12M16 8l4 4-4 4',
  wallet: 'M4 7a2 2 0 0 1 2-2h12v4M4 7v10a2 2 0 0 0 2 2h14V9H6a2 2 0 0 1-2-2ZM16 14h1',
  bank: 'M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18',
  lock: 'M6 11h12v9H6V11ZM8 11V8a4 4 0 0 1 8 0v3',
  layers: 'M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5',
  code: 'M8 8l-4 4 4 4M16 8l4 4-4 4',
  asset: 'M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9L12 3ZM12 12l7.8-4.5M12 12v9M12 12 4.2 7.5',
  users: 'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M12.5 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM21 19v-1a4 4 0 0 0-3-3.9M15 4.1a3 3 0 0 1 0 5.8',
};

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      className={`bl-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
