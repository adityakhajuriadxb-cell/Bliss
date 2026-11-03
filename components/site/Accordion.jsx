// Native disclosure, so it works without scripts and with the keyboard.
export default function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <span className="accordion__icon" aria-hidden="true" />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
