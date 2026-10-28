import Icon from '@/components/brand/Icon';
import SpeedBand from '@/components/brand/SpeedBand';

const FEATURES = [
  { icon: 'send', title: 'Arrives in seconds', text: 'Most transfers arrive in seconds. We tell you the moment yours lands.' },
  { icon: 'fee', title: 'Every fee, up front', text: 'See the rate and the fee before you confirm. What you see is what you pay.' },
  { icon: 'shield', title: 'Protected at every step', text: 'Every transfer is encrypted and checked for fraud before it leaves.' },
  { icon: 'globe', title: '160+ countries', text: 'Send to 160+ countries in dozens of currencies, from one account.' },
];

// A scroll story: the intro stays pinned on the left while the features pass on the right.
export default function Features() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-acaa241 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="acaa241" data-element_type="section" data-e-type="section" id="features" data-settings='{"background_background":"classic"}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e9b5133" data-id="e9b5133" data-element_type="column" data-e-type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-6ccf568 elementor-widget elementor-widget-features" data-id="6ccf568" data-element_type="widget" data-e-type="widget" data-widget_type="features.default">
              <div className="elementor-widget-container">
                <section className="bl-story">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="bl-story__intro" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
                          <p className="bl-eyebrow bl-eyebrow--ink">Why Bliss</p>
                          <h2>Built to move money</h2>
                          <p>Fast is easy. Safe is the work. Bliss does both, and shows you every number on the way.</p>
                          <SpeedBand variant="small" className="bl-story__band" />
                        </div>
                      </div>
                      <div className="col-lg-6 offset-lg-1">
                        <ol className="bl-story__list">
                          {FEATURES.map((f, i) => (
                            <li key={f.title} className="bl-story__item" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -120; delay: 80;">
                              <span className="bl-story__num">{String(i + 1).padStart(2, '0')}</span>
                              <span className="bl-story__icon">
                                <Icon name={f.icon} size={28} />
                              </span>
                              <h3>{f.title}</h3>
                              <p>{f.text}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
