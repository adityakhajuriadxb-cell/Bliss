import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import ServiceShowcase from '@/components/services/ServiceShowcase';

export default function Services() {
  return (
    <section className="bl-section bl-section--raised" id="services">
      <div className="container">
        <div className="bl-section__head" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
          <p className="bl-eyebrow bl-eyebrow--ink">What we do</p>
          <h2>One platform for moving money</h2>
          <p>Payments, accounts and transfers, and the bridge between money and digital assets.</p>
        </div>
        <ServiceShowcase />
        <div className="bl-section__foot">
          <Link href="/services" className="bl-btn">
            See all services
            <Icon name="arrowRight" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
