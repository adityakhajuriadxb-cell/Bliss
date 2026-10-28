import { SITE } from '@/config/site';

export default function Cta() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-199f5ed elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="199f5ed" data-element_type="section" data-e-type="section" id="contact" data-settings='{"background_background":"classic"}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-78b175c" data-id="78b175c" data-element_type="column" data-e-type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-4265c51 elementor-widget elementor-widget-tp-cta" data-id="4265c51" data-element_type="widget" data-e-type="widget" data-widget_type="tp-cta.default">
              <div className="elementor-widget-container">
                <section className="cta-area">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-7 col-lg-9">
                        <div className="cta__content text-center" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
                          <h2 className="title">Get the {SITE.name} app</h2>
                          <p className="desc">
                            We're launching soon. One account, 160+ countries, and every fee shown before you send.
                          </p>
                          <span className="bl-pill">App launching soon</span>
                        </div>
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
