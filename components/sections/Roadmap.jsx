import ElementorSection from '@/components/ElementorSection';

const PHASES = [
  { percent: 0, title: 'Launch', text: 'We launched a secure remittance platform enabling fast and reliable global money transfers.' },
  { percent: 25, title: 'Core Features', text: 'We introduced essential tools like real-time tracking, recipient management, and instant transfers.' },
  { percent: 50, title: 'Global Expansion', text: 'We expanded our services to more countries with wider payout networks and better coverage.' },
  { percent: 75, title: 'Enhanced Security', text: 'We upgraded our system with advanced encryption and fraud protection for safer transactions.' },
  { percent: 95, title: 'Smart Optimization', text: 'We improved transfer speed and exchange rates using smarter routing and processing systems.' },
  { percent: 100, title: 'Future Growth', text: 'We are building a fully global payment ecosystem with faster settlements and AI-driven improvements.' },
];

export default function Roadmap() {
  return (
    <ElementorSection sectionId="7eb6f7b" columnId="f881283" widgetId="a3a51f8" widget="roadmap" settings='{"background_background":"classic"}'>
      <section className="roadmap-area roadmap-style-two">
        <div className="container">
          <div className="row justify-content-center" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
            <div className="col-xl-8 col-lg-10">
              <div className="section__title text-center title-mb-75">
                <h2 className="title">Our Roadmap</h2>
                <p className="desc">
                  We are continuously improving our platform to make global money transfers faster, smarter, and more accessible.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-10">
              <div className="roadmap__wrapper-two">
                {PHASES.map((phase, i) => (
                  <div className="roadmap__card style-two" key={phase.title}>
                    <div className="roadmap__percent">
                      <span>{phase.percent}</span>%
                    </div>
                    <div className="roadmap__step">
                      <span className="tg-text-gradient d-inline-flex">Phase {String(i + 1).padStart(2, '0')}</span>
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
