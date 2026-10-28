import DotGlobe from '@/components/brand/DotGlobe';
import Icon from '@/components/brand/Icon';
import { TransferTimeline } from '@/components/brand/TransferCards';

export default function About() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-f3e2df5 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f3e2df5" data-element_type="section" data-e-type="section" id="about" data-settings='{"background_background":"classic"}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f781ed5" data-id="f781ed5" data-element_type="column" data-e-type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-39ec0b4 elementor-widget elementor-widget-about" data-id="39ec0b4" data-element_type="widget" data-e-type="widget" data-widget_type="about.default">
              <div className="elementor-widget-container">
                <section className="about-area">
                  <div className="container">
                    <div className="row justify-content-center" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
                      <div className="col-xl-8 col-lg-10">
                        <div className="section__title text-center title-mb-80">
                          <h2 className="title">About Bliss</h2>
                          <p className="desc">As safe as a bank. As quick as a message.</p>
                        </div>
                      </div>
                    </div>
                    <div className="about__row-reverse">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="about__img bl-panel" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;">
                            <DotGlobe />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="about__content" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 300;">
                            <div className="section__title text-start">
                              <span className="sub-title tg-text-gradient">Who we are</span>
                              <h2 className="title">One account. Every border.</h2>
                            </div>
                            <p>
                              Bliss moves money across borders to 160+ countries. We show the real rate and every fee before you
                              send, so you always know what arrives.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="about__img bl-panel" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;">
                            <TransferTimeline />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="about__content" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 300;">
                            <div className="section__title text-start">
                              <span className="sub-title tg-text-gradient">How it works</span>
                              <h2 className="title">Every step, in plain numbers</h2>
                            </div>
                            <p>
                              Send, track and receive money in dozens of currencies. You see each step as it happens, and we tell
                              you the moment your money lands.
                            </p>
                            <div className="about__facts-list">
                              <div className="about__icon-box">
                                <div className="icon">
                                  <Icon name="track" size={28} />
                                </div>
                                <p>Track every transfer live</p>
                              </div>
                              <div className="about__icon-box">
                                <div className="icon">
                                  <Icon name="support" size={28} />
                                </div>
                                <p>Support 24/7</p>
                              </div>
                            </div>
                          </div>
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
