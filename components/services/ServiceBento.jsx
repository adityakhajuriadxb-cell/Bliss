import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import { ServiceScreen, ServiceChip } from '@/components/brand/ServiceVisuals';
import { getService } from '@/config/services';

// /services: the services grouped by the job they do. Each group leads with its main
// service in a large tile showing its portal page; the others get a smaller tile showing
// the moment they land. Tile size and surface carry the hierarchy, not borders.
const GROUPS = [
  {
    title: 'Move money',
    text: 'Send it across borders, or between money and digital assets.',
    layout: 'lead-stack',
    lead: 'cross-border-payments',
    rest: ['on-ramp', 'off-ramp'],
  },
  {
    title: 'Get paid',
    text: 'Take card payments and receive bank transfers to your own IBAN.',
    layout: 'lead-side',
    lead: 'card-processing',
    rest: ['iban-accounts'],
  },
  {
    title: 'Hold money',
    text: 'Keep balances in many currencies, all in one account.',
    layout: 'wide',
    lead: 'emi-accounts',
    rest: [],
  },
];

function TileText({ service }) {
  return (
    <span className="bl-tile__text">
      <span className="bl-tile__audience">{service.audience}</span>
      <span className="bl-tile__name">{service.name}</span>
      <span className="bl-tile__summary">{service.summary}</span>
      <span className="bl-tile__more">
        Learn more
        <Icon name="arrowRight" size={18} />
      </span>
    </span>
  );
}

function LeadTile({ slug }) {
  const service = getService(slug);
  return (
    <Link href={`/services/${slug}`} className="bl-tile bl-tile--lead">
      <TileText service={service} />
      <span className="bl-tile__screen" aria-hidden="true" data-parallax="-0.04">
        <ServiceScreen slug={slug} />
      </span>
    </Link>
  );
}

function SmallTile({ slug }) {
  const service = getService(slug);
  return (
    <Link href={`/services/${slug}`} className="bl-tile bl-tile--small">
      <TileText service={service} />
      <span className="bl-tile__chips" aria-hidden="true">
        <ServiceChip slug={slug} which="floatA" />
        <ServiceChip slug={slug} which="floatB" />
      </span>
    </Link>
  );
}

export default function ServiceBento() {
  return (
    <div className="bl-bento">
      {GROUPS.map((group, i) => (
        <div key={group.title} className="bl-bento__group">
          <div className="bl-bento__head" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -120;">
            <span className="bl-bento__index">0{i + 1}</span>
            <h2>{group.title}</h2>
            <p>{group.text}</p>
          </div>
          <div
            className={`bl-bento__grid bl-bento__grid--${group.layout}`}
            data-anime="targets: > *; opacity:[0, 1]; translateX:[-24, 0]; onview: -160; delay: anime.stagger(80);"
          >
            <LeadTile slug={group.lead} />
            {group.rest.map((slug) => (
              <SmallTile key={slug} slug={slug} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
