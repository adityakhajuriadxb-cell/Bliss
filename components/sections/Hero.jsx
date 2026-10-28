import Icon from '@/components/brand/Icon';
import ServiceVisual from '@/components/brand/ServiceVisuals';
import DotGlobe, { ROUTES } from '@/components/brand/DotGlobe';

export default function Hero() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-4956fbe elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="4956fbe" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic"}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cd51e57" data-id="cd51e57" data-element_type="column" data-e-type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-e0f2df0 elementor-widget elementor-widget-hero-banner" data-id="e0f2df0" data-element_type="widget" data-e-type="widget" data-widget_type="hero-banner.default">
              <div className="elementor-widget-container">
                <section id="home" className="banner-area banner-padding tg-section position-relative">
                  {/* The world behind everything: centred on the hero, drifting gently on scroll. */}
                  <div className="bl-hero-globe" aria-hidden="true" data-parallax="-0.05">
                    <DotGlobe routes={ROUTES} className="bl-dot-globe--dark" />
                  </div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="banner__content tg-content" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
                          <h1 className="title">Money, in motion.</h1>
                          <p className="desc">
                            Payments, accounts and transfers across 160+ countries. See the rate and every fee before you confirm.
                          </p>
                          <div className="bl-actions">
                            <a href="/services" className="bl-btn bl-btn-primary bl-btn-lg">
                              See what we do
                              <Icon name="arrowRight" size={20} />
                            </a>
                            <span className="bl-pill">App launching soon</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 200;">
                          <ServiceVisual slug="cross-border-payments" backdrop={false} />
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
