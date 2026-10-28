// Wrapper markup Elementor puts around every widget. The theme's CSS (post-24.css) targets
// these element ids, so they must match the original page.
export default function ElementorSection({ sectionId, columnId, widgetId, widget, id, settings, children }) {
  return (
    <section
      id={id}
      className={`elementor-section elementor-top-section elementor-element elementor-element-${sectionId} elementor-section-full_width elementor-section-height-default`}
      data-id={sectionId}
      data-element_type="section"
      data-settings={settings}
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className={`elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-${columnId}`}
          data-id={columnId}
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className={`elementor-element elementor-element-${widgetId} elementor-widget elementor-widget-${widget}`}
              data-id={widgetId}
              data-element_type="widget"
              data-widget_type={`${widget}.default`}
            >
              <div className="elementor-widget-container">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
