import ElementorSection from '@/components/ElementorSection';

const PHASES = [
  { percent: 0, title: 'Launch', text: 'Bliss opens for transfers, with the rate and every fee shown before you send.' },
  { percent: 25, title: 'Core features', text: 'Live tracking, saved recipients and transfers that arrive in seconds.' },
  { percent: 50, title: 'More countries', text: 'More countries and more ways to receive money in the local currency.' },
  { percent: 75, title: 'Stronger protection', text: 'More fraud checks, and new ways to lock and protect your account.' },
  { percent: 95, title: 'Faster routes', text: 'Smarter routing, so more transfers arrive in seconds and on time.' },
  { percent: 100, title: 'One account, every border', text: 'Send, receive and hold money in dozens of currencies from one account.' },
];

export default function Roadmap() {
  return (
    <ElementorSection sectionId="7eb6f7b" columnId="f881283" widgetId="a3a51f8" widget="roadmap" settings='{"background_background":"classic"}'>
      <section className="roadmap-area roadmap-style-two">
        <div className="container">
          <div className="row justify-content-center" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
            <div className="col-xl-8 col-lg-10">
              <div className="section__title text-center title-mb-75">
                <h2 className="title">Our roadmap</h2>
                <p className="desc">
                  Where Bliss starts, and what comes next.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="roadmap__wrapper-two">
                {PHASES.map((phase, i) => (
                  <div className="roadmap__card style-two" key={phase.title}>
                    <div className="roadmap__percent">
                      <span>{phase.percent}</span>%
                    </div>
                    <div className="roadmap__step">
                      <span className="d-inline-flex">Phase {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="roadmap__heading">{phase.title}</h3>
                    <p>{phase.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ElementorSection>
  );
}
