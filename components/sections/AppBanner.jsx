import SpeedBand from '@/components/brand/SpeedBand';
import Icon from '@/components/brand/Icon';

export default function AppBanner() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-3a8d245 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="3a8d245" data-element_type="section" data-e-type="section" data-scroll-reveal>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-660f4f3" data-id="660f4f3" data-element_type="column" data-e-type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-6580072 elementor-widget elementor-widget-hero-banner" data-id="6580072" data-element_type="widget" data-e-type="widget" data-widget_type="hero-banner.default">
              <div className="elementor-widget-container">
                <section className="banner-area banner-style-two tg-section position-relative">
                  <div className="banner__background-wrap bl-band-bg" aria-hidden="true">
                    <SpeedBand className="bl-band-bg__left" data-parallax="0.16" data-parallax-axis="x" />
                    <SpeedBand className="bl-band-bg__right" data-parallax="0.08" data-parallax-axis="x" />
                  </div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-7 col-lg-9">
                        <div className="banner__content-two tg-content text-center" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
                          <h2 className="title">Sent in seconds. Seen to the cent.</h2>
                          <p className="desc">Follow every transfer from the moment you send to the moment it lands.</p>
                          <a href="#faq" className="bl-btn bl-btn-lg">
                            Read the FAQ
                            <Icon name="arrowRight" size={20} />
                          </a>
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
