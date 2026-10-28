import ElementorSection from '@/components/ElementorSection';

export default function Separator({ sectionId, columnId, widgetId }) {
  return (
    <ElementorSection sectionId={sectionId} columnId={columnId} widgetId={widgetId} widget="tg-separator">
      <div className="section-divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;">
        <img decoding="async" src="/assets/images/divider-01-1.svg" alt="" />
      </div>
    </ElementorSection>
  );
}
