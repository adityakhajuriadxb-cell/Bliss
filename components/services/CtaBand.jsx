import SpeedBand from '@/components/brand/SpeedBand';

// Closing navy band for inner pages.
export default function CtaBand({ title, text }) {
  return (
    <section className="bl-cta-band">
      <div className="container">
        <div className="bl-cta-band__inner" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
          <div>
            <h2 className="bl-cta-band__title">{title}</h2>
            <p className="bl-cta-band__text">{text}</p>
            <span className="bl-pill">App launching soon</span>
          </div>
          <SpeedBand tone="dark" className="bl-cta-band__band" data-parallax="0.1" data-parallax-axis="x" />
        </div>
      </div>
    </section>
  );
}
