import Icon from '@/components/brand/Icon';

const REASONS = [
  { icon: 'eye', title: 'Clearer than a bank', text: 'We show the real rate and every fee before you send. No surprises after.' },
  { icon: 'fee', title: 'No hidden fees', text: 'The fee you see before you confirm is the fee you pay.' },
  { icon: 'route', title: 'Reliable routes', text: 'We route each transfer so it reaches your recipient on time and in full.' },
  { icon: 'support', title: 'Help at any hour', text: 'Our support team is here 24/7 for any transfer or account question.' },
];

export default function WhyChooseUs() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-eec87ac elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="eec87ac" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic"}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8312ea9" data-id="8312ea9" data-element_type="column" data-e-type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-93797bf elementor-widget elementor-widget-features" data-id="93797bf" data-element_type="widget" data-e-type="widget" data-widget_type="features.default">
              <div className="elementor-widget-container">
                <section className="choose-area choose-style-two">
                  <div className="container">
                    <div className="row justify-content-center" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 200;">
                      <div className="col-xl-8 col-lg-10">
                        <div className="section__title text-center title-mb-80">
                          <h2 className="title">Why people choose Bliss</h2>
                        </div>
                      </div>
                    </div>
                    <div className="position-relative">
                      <div className="row choose__item-lists" data-anime="targets: > * > *; opacity:[0, 1]; translateX:[-24, 0]; onview: -400; delay: anime.stagger(80);">
                        {REASONS.map((r) => (
                          <div className="col-xl-3 col-lg-4 col-sm-6" key={r.title}>
                            <div className="choose__item">
                              <div className="choose__item-count">
                                <Icon name={r.icon} size={32} />
                              </div>
                              <div className="choose__item-content">
                                <h3 className="title">{r.title}</h3>
                                <p>{r.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
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
