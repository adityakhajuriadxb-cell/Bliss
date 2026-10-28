import SpeedBand from '@/components/brand/SpeedBand';
import { RecentTransfers } from '@/components/brand/TransferCards';

export default function TransferBanner() {
  return (
    <div className="elementor-element elementor-element-c0edf2e e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="c0edf2e" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}' data-scroll-reveal>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-464e671 elementor-widget elementor-widget-hero-banner" data-id="464e671" data-element_type="widget" data-e-type="widget" data-widget_type="hero-banner.default">
          <div className="elementor-widget-container">
            <section className="banner-area banner-style-four tg-section position-relative">
              <div className="container">
                <div className="banner__four-inner">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                      <div className="banner__content tg-content" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
                        <h2 className="title">Sent to family. Paid for school. Received from anywhere.</h2>
                        <p className="desc">
                          Each transfer shows its status in words, not just colours: sent, pending or failed. If one takes
                          longer, we tell you why and when it will land.
                        </p>
                        <SpeedBand variant="small" tone="dark" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="bl-recent-wrap" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 200;">
                        <div data-parallax="0.06">
                          <RecentTransfers />
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
  );
}
