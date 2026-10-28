// The dot globe (docs/brand/BRAND.md, "Graphic language"): the world drawn as dots on
// the 8px grid, with mint dots for markets. Each column is 7.5° of longitude starting at
// 180°W; each row is 6° of latitude starting at 72°N.

const PITCH = 8;
const COLS = 48;

// Land on each row, as inclusive [fromCol, toCol] ranges.
const LAND = [
  [[7, 15], [17, 21], [27, 27], [32, 43]],
  [[2, 15], [17, 19], [21, 21], [25, 47]],
  [[3, 15], [18, 18], [24, 46]],
  [[7, 16], [23, 23], [24, 42], [45, 45]],
  [[7, 16], [23, 42]],
  [[7, 14], [22, 30], [31, 41], [42, 42]],
  [[8, 14], [23, 25], [28, 41], [42, 42]],
  [[8, 13], [22, 32], [32, 40]],
  [[9, 11], [22, 28], [29, 31], [33, 36], [36, 40]],
  [[10, 12], [14, 14], [22, 29], [29, 31], [33, 35], [37, 38], [40, 40]],
  [[12, 13], [22, 30], [34, 34], [37, 38], [40, 40]],
  [[13, 16], [22, 30], [37, 39]],
  [[13, 17], [25, 29], [37, 41]],
  [[13, 19], [25, 29], [38, 42]],
  [[14, 18], [25, 29], [30, 30], [41, 42]],
  [[14, 18], [25, 28], [30, 30], [40, 43]],
  [[14, 17], [26, 28], [39, 44]],
  [[14, 17], [26, 28], [39, 44]],
  [[14, 16], [42, 43]],
  [[14, 15], [43, 43], [46, 46]],
  [[14, 15], [46, 46]],
  [[14, 14]],
];

// Example markets, as [row, col]: Toronto, Mexico City, São Paulo, Lisbon, London,
// Lagos, Nairobi, Dubai, Mumbai, Manila.
const MARKETS = new Set(['5:13', '9:10', '16:17', '5:22', '3:24', '11:24', '12:28', '8:31', '9:33', '10:40']);

// Example routes between markets, as [from, to] dots.
// Toronto → Lagos, London → Mumbai, Lisbon → São Paulo, Dubai → Manila.
export const ROUTES = [
  [[5, 13], [11, 24]],
  [[3, 24], [9, 33]],
  [[5, 22], [16, 17]],
  [[8, 31], [10, 40]],
];

const center = ([row, col]) => [col * PITCH + PITCH / 2, row * PITCH + PITCH / 2];

// A route between two [row, col] dots, drawn as an arc that bows upward.
function routePath(from, to) {
  const [x1, y1] = center(from);
  const [x2, y2] = center(to);
  const lift = Math.max(16, Math.abs(x2 - x1) * 0.3);
  return `M${x1} ${y1}Q${(x1 + x2) / 2} ${Math.min(y1, y2) - lift} ${x2} ${y2}`;
}

export default function DotGlobe({ className = '', routes = [] }) {
  const dots = [];
  LAND.forEach((ranges, row) => {
    const cols = new Set();
    ranges.forEach(([from, to]) => {
      for (let c = from; c <= to; c++) cols.add(c);
    });
    cols.forEach((col) => dots.push({ row, col, market: MARKETS.has(`${row}:${col}`) }));
  });

  return (
    <svg
      className={`bl-dot-globe ${className}`}
      viewBox={`0 0 ${COLS * PITCH} ${LAND.length * PITCH}`}
      role="img"
      aria-label="World map drawn in dots, with example Bliss markets highlighted"
    >
      {dots.map(({ row, col, market }) => (
        <circle
          key={`${row}:${col}`}
          className={market ? 'bl-dot-market' : 'bl-dot'}
          cx={col * PITCH + PITCH / 2}
          cy={row * PITCH + PITCH / 2}
          r={market ? 3 : 2}
        />
      ))}
      {routes.map(([from, to]) => (
        <path key={`${from}-${to}`} className="bl-dot-route" d={routePath(from, to)} />
      ))}
    </svg>
  );
}
