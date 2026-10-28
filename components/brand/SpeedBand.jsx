// The speed band (docs/brand/BRAND.md, "Graphic language"): horizontal blocks cut by
// 4-unit gaps, each row starting a step further right, as if moving left to right.
// Every block uses the mark's own shape: 4-unit corners on the left, a fully rounded right end.

const H = 20; // block height
const CUT = 4; // the speed cut

// Each row: [start offset, [[width, tone], ...]]. Tones map to classes in bliss.css.
const ROWS = {
  hero: [
    [0, [[112, 'base'], [44, 'soft'], [20, 'soft']]],
    [16, [[64, 'soft'], [148, 'mint']]],
    [32, [[188, 'base'], [28, 'soft']]],
    [48, [[52, 'soft'], [96, 'base'], [40, 'mint']]],
  ],
  small: [
    [0, [[64, 'base'], [24, 'mint']]],
    [16, [[40, 'soft'], [56, 'base']]],
  ],
};

function blockPath(x, y, w) {
  const r = H / 2;
  return `M${x + 4} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + H}H${x + 4}A4 4 0 0 1 ${x} ${y + H - 4}V${y + 4}A4 4 0 0 1 ${x + 4} ${y}Z`;
}

export default function SpeedBand({ variant = 'hero', tone = 'light', className = '', style, ...rest }) {
  const rows = ROWS[variant];
  const blocks = [];
  let width = 0;

  rows.forEach(([offset, segments], row) => {
    const y = row * (H + CUT);
    let x = offset;
    segments.forEach(([w, kind]) => {
      blocks.push({ d: blockPath(x, y, w), kind });
      x += w + CUT;
    });
    width = Math.max(width, x - CUT);
  });
  const height = rows.length * (H + CUT) - CUT;

  return (
    <svg
      className={`bl-speed-band bl-speed-band--${tone} ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={style}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {blocks.map((b, i) => (
        <path key={i} className={`bl-sb-${b.kind}`} d={b.d} />
      ))}
    </svg>
  );
}
